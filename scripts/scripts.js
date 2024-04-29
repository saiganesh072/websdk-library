import {
  sampleRUM,
  buildBlock,
  loadHeader,
  loadFooter,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  waitForLCP,
  loadBlocks,
  loadCSS,
  getMetadata,
} from "./aem.js";

const LCP_BLOCKS = []; // add your LCP blocks to the list

/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
function buildHeroBlock(main) {
  const h1 = main.querySelector("h1");
  const picture = main.querySelector("picture");
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING) {
    const section = document.createElement("div");
    section.append(buildBlock("hero", { elems: [picture, h1] }));
    main.prepend(section);
  }
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    if (!window.location.hostname.includes("localhost"))
      sessionStorage.setItem("fonts-loaded", "true");
  } catch (e) {
    // do nothing
  }
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    buildHeroBlock(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Auto Blocking failed", error);
  }
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  decorateIcons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
}

function initWebSDK(path, config) {
  return new Promise((resolve) => {
    import(path)
      .then(() => window.alloy("configure", config))
      .then(resolve);
  });
}

function onDecoratedElement(fn) {
  // Apply propositions to all already decorated blocks/sections
  if (document.querySelector('[data-block-status="loaded"],[data-section-status="loaded"]')) {
    fn();
  }

  const observer = new MutationObserver((mutations) => {
    if (
      mutations.some(
        (m) =>
          m.target.tagName === "BODY" ||
          m.target.dataset.sectionStatus === "loaded" ||
          m.target.dataset.blockStatus === "loaded"
      )
    ) {
      fn();
    }
  });
  // Watch sections and blocks being decorated async
  observer.observe(document.querySelector("main"), {
    subtree: true,
    attributes: true,
    attributeFilter: ["data-block-status", "data-section-status"],
  });
  // Watch anything else added to the body
  observer.observe(document.querySelector("body"), { childList: true });
}

function toCssSelector(selector) {
  return selector.replace(
    /(\.\S+)?:eq\((\d+)\)/g,
    (_, clss, i) => `:nth-child(${Number(i) + 1}${clss ? ` of ${clss})` : ""}`
  );
}

async function getElementForProposition(proposition) {
  const selector = proposition.data.prehidingSelector || toCssSelector(proposition.data.selector);
  return document.querySelector(selector);
}

async function getAndApplyRenderDecisions() {
  // Get the decisions, but don't render them automatically
  // so we can hook up into the AEM EDS page load sequence
  const response = await window.alloy("sendEvent", { renderDecisions: false });
  const { propositions } = response;
  onDecoratedElement(async () => {
    await window.alloy("applyPropositions", { propositions });
    // keep track of propositions that were applied
    propositions.forEach((p) => {
      p.items = p.items.filter(
        (i) =>
          i.schema !== "https://ns.adobe.com/personalization/dom-action" ||
          !getElementForProposition(i)
      );
    });
  });

  // Reporting is deferred to avoid long tasks
  window.setTimeout(() => {
    // Report shown decisions
    window.alloy("sendEvent", {
      xdm: {
        eventType: "decisioning.propositionDisplay",
        _experience: {
          decisioning: { propositions },
        },
      },
    });
  });
}

let alloyLoadedPromise = initWebSDK("./alloy.js", {
  datastreamId: "c2f57ae1-7751-402d-839d-ba448bb4ac1b",
  orgId: "975D01725D5A6B1C0A495EF5@AdobeOrg",
});
// if (getMetadata("target")) {
//   alloyLoadedPromise.then(() => getAndApplyRenderDecisions());
// }
alloyLoadedPromise.then(() => getAndApplyRenderDecisions());
/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = "en";
  decorateTemplateAndTheme();
  const main = doc.querySelector("main");
  // if (main) {
  //   decorateMain(main);
  //   document.body.classList.add('appear');
  //   await waitForLCP(LCP_BLOCKS);
  // }
  if (main) {
    decorateMain(main);
    // wait for alloy to finish loading
    await alloyLoadedPromise;
    document.body.classList.add("appear");
    // show the LCP block in a dedicated frame to reduce TBT
    await new Promise((res) => {
      window.requestAnimationFrame(async () => {
        await waitForLCP(LCP_BLOCKS);
        res();
      });
    });
  }

  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem("fonts-loaded")) {
      loadFonts();
    }
  } catch (e) {
    // do nothing
  }
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  const main = doc.querySelector("main");
  await loadBlocks(main);

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  loadHeader(doc.querySelector("header"));
  loadFooter(doc.querySelector("footer"));

  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  loadFonts();

  sampleRUM("lazy");
  sampleRUM.observe(main.querySelectorAll("div[data-block-name]"));
  sampleRUM.observe(main.querySelectorAll("picture > img"));
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import("./delayed.js"), 3000);
  // load anything that can be postponed to the latest here
}

async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}

loadPage();
