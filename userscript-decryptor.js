// ==UserScript==
// @name        compupaste.com
// @namespace   Violentmonkey Scripts
// @match       * //to work in only one site put the website link in match field  and delete *
// @grant       none
// @version     1.0
// @author      NeiValHein
// @description 12/12/2020 09:06:08
 var seeHidden = document.evaluate("//input[@name='crypted']",    
 document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);    
 for (var i = seeHidden.snapshotLength - 1; i >= 0; i--) {   
 var showHidden = seeHidden.snapshotItem(i);   
showHidden.type = 'text';    showHidden.title = 'Hidden field "' +    (showHidden.name || showHidden.id) + '"';    
showHidden.select();
 }
// ==/UserScript==
