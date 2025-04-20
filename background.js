// Create a browser alias if needed (for Firefox compatibility)
if (typeof browser === "undefined") {
  var browser = chrome;
}

browser.contextMenus.create({
  id: "LCSC",
  title: "Search part in LCSC",
  contexts: ["selection"],
});
browser.contextMenus.create({
  id: "Digikey",
  title: "Search part in Digikey",
  contexts: ["selection"],
});
browser.contextMenus.create({
  id: "Mouser",
  title: "Search part in Mouser",
  contexts: ["selection"],
});

// On first install, open options page
browser.runtime.onInstalled.addListener((details) => {
  // if (details.reason === "install") {
    if (browser.runtime.openOptionsPage) {
      browser.runtime.openOptionsPage();
    } else {
      window.open(browser.runtime.getURL("options.html"));
    }
  // }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  browser.storage.local.get({
    lcscTLD: "com",
    mouserTLD: "in",
    digikeyTLD: "in"
  }, (tlds) => {
    const query = encodeURIComponent(info.selectionText);

    switch (info.menuItemId) {
      case "LCSC":
        browser.tabs.create({
          url: `https://www.lcsc.${tlds.lcscTLD}/search?q=${query}`,
        });
        break;
      case "Mouser":
        browser.tabs.create({
          url: `https://www.mouser.${tlds.mouserTLD}/c/?q=${query}`,
        });
        break;
      case "Digikey":
        browser.tabs.create({
          url: `https://www.digikey.${tlds.digikeyTLD}/en/products?keywords=${query}`,
        });
        break;
    }
  });
});
