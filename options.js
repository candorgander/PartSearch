// Create a browser alias if needed
if (typeof browser === "undefined") {
    var browser = chrome;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const lcsc = document.getElementById("lcscTLD");
    const mouser = document.getElementById("mouserTLD");
    const digikey = document.getElementById("digikeyTLD");
  
    // Load saved values with defaults
    browser.storage.local.get({
      lcscTLD: "com",
      mouserTLD: "in",
      digikeyTLD: "in"
    }, (res) => {
      lcsc.value = res.lcscTLD;
      mouser.value = res.mouserTLD;
      digikey.value = res.digikeyTLD;
    });
  
    // Save updated values
    document.getElementById("save").addEventListener("click", () => {
      browser.storage.local.set({
        lcscTLD: lcsc.value,
        mouserTLD: mouser.value,
        digikeyTLD: digikey.value,
      }, () => {
        alert("Settings saved!");
      });
    });
  });
  