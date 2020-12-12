// ==UserScript==
// @name        Decryptor
// @namespace   NeiValHein Scripts
// @match       https://website.com/ // if you want to execute the userscript in other site then delete th current link and put the new website link
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
