// ==UserScript==
// @name        greasemonkey-ns-pdb
// @include     https://projekt.netset.se/*
// @version     1
// @grant       none
// ==/UserScript==

var tdTags = document.getElementsByTagName("td");

for ( var i=0; i < tdTags.length ; i++ ) {

  var element = tdTags[i];
  var statusNeedAttention = ["under utveckling", "estimate required", "netset start", "new", "ny"];
  var statusOkay = ["pending review", "move to production"];
  
  if( statusNeedAttention.indexOf(element.innerHTML.toLowerCase()) !== -1 ) {
    element.parentNode.style.background = "#FFC1C1";
  }

  if( statusOkay.indexOf(element.innerHTML.toLowerCase()) !== -1 ) {
    element.parentNode.style.background = "#C0FFC0";
  }
  
  if( element.innerHTML == "Christoffer Pettersson" ) {
    element.style.background = 'blue';
    element.style.color = "white";
  }

}
