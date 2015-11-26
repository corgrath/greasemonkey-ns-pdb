// ==UserScript==
// @name        greasemonkey-ns-pdb
// @include     https://projekt.netset.se/*
// @version     15
// @downloadURL https://github.com/corgrath/greasemonkey-ns-pdb/raw/master/greasemonkey-ns-pdb.user.js
// @updateURL   https://github.com/corgrath/greasemonkey-ns-pdb/raw/master/greasemonkey-ns-pdb.user.js
// @grant       none
// ==/UserScript==

var tdTags = document.getElementsByTagName("td");

var statusGreen = [
		"ready on test",
		"pending review",
		"move to production",
		"ready on production",
		"discussion and support",
		"move to qa",
		"pending deploy",
		"estimated",
		"ready on qa"
	];

var statusNeedAttention = [
		"under utveckling",
		"estimate required",
		"netset start",
		"new",
		"ny",
		"under development",
		"assigned",
		"returned to netset",
		"atea internal"
	];

var statusIgnore = [
	   "main task",	
    ];
	
for ( var i = 0; i < tdTags.length ; i++ ) {

	var element = tdTags[i];

	if( statusNeedAttention.indexOf(element.innerHTML.toLowerCase()) !== -1 ) {
		element.parentNode.style.background = "#FFC1C1";
		
	}

	if( statusGreen.indexOf(element.innerHTML.toLowerCase()) !== -1 ) {
		element.parentNode.style.background = "#C0FFC0";
	}

	if( element.innerHTML == "Christoffer Pettersson" ) {
		element.style.background = "red";
		element.style.color = "white";
	}
	
	if( statusIgnore.indexOf(element.innerHTML.toLowerCase()) !== -1 ) {
       element.parentNode.style.background = "lightgray";
       for( var k = 0 ; k < element.parentNode.childNodes.length ; k++ ) {
          if(element.parentNode.childNodes[k].style ) {
             element.parentNode.childNodes[k].style.color = "gray";	
             element.parentNode.childNodes[k].style.fontSize = "8px";	
          }
       }
	}

}
