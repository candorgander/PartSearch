/*
  Platform Independence
*/

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

/*
Search using the search engine whose name matches the
menu item's ID.
*/
browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "LCSC":
      browser.tabs.create({
        url:
          "https://www.lcsc.com/search?q=" +
          encodeURIComponent(info.selectionText),
      });
      break;
    case "Mouser":
      browser.tabs.create({
        url:
          "https://www.mouser.in/c/?q=" +
          encodeURIComponent(info.selectionText),
      });
      break;
    case "Digikey":
      browser.tabs.create({
        url:
          "https://www.digikey.in/en/products?keywords=" +
          encodeURIComponent(info.selectionText),
      });
      break;
  }
});
