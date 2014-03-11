// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({pinned: true}, function(tabs) {
	reOrderOrCreate("mail", "https://mail.google.com/a/carematics.com", 0, tabs);
	reOrderOrCreate("calendar", "https://calendar.google.com/a/carematics.com", 1, tabs);
	reOrderOrCreate("rememberthemilk", "http://www.rememberthemilk.com", 2, tabs);
	reOrderOrCreate("mergestone.atlassian.net", "https://mergestone.atlassian.net", 3, tabs);
  reOrderOrCreate("crm.zoho.com/crm", "https://www.zoho.com/crm/lp/login.html", 4, tabs);

  });
});


/**
 * If a tab is already in the list of pinned tabs change the position to pos
 * and if it's not pinned created it with the provided url
 */
function reOrderOrCreate(keyword, urlString, pos, tabs) {
	for (var i = 0, l = tabs.length; i !== l; i++) {
  		var t = tabs[i];
  		if (t.url.indexOf(keyword) >= 0) {
  			chrome.tabs.move(t.id, {index:pos});
  			return;
  		} 
  	}
  	chrome.tabs.create({index:pos, url:urlString, pinned:true, active:false});
}