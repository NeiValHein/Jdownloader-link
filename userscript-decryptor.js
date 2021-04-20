// ==UserScript==
// @name        Decryptor UserScript
// @namespace   NeiValHein Scripts
// @include        http://*
// @include        https://*
// @connect        *
// @version     1.0
// @author      NeiValHein
// @description Obtain encrypted link with this userscript and put them in Jdownloader Decryptor (see my GitHub profile to download)
 var seeHidden = document.evaluate("//input[@name='crypted']",    
 document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);    
 for (var i = seeHidden.snapshotLength - 1; i >= 0; i--) {   
 var showHidden = seeHidden.snapshotItem(i);   
showHidden.type = 'text';    showHidden.title = 'Hidden field "' +    (showHidden.name || showHidden.id) + '"';    
showHidden.select();
 }
// ==/UserScript==
