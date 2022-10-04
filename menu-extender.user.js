// ==UserScript==
// @name         Hejto MenuExtender
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Extend your menu today! Grow up to 5 inches(!sic)
// @author       pawemie
// @match        *://www.hejto.pl/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hejto.pl
// ==/UserScript==

// Add buttons and sections as soon as top menu is loaded

let poller = setInterval(function () {
 if (document.querySelector("header div div.flex.justify-end.items-start") !== null) {
        clearInterval(poller);
        addExtendedButtons();
    }
}, 50);

function addExtendedButtons() {
 const handlerEl = document.querySelector("header div div.flex.justify-end.items-start");
        handlerEl.insertAdjacentHTML("afterbegin", `
        <div id="powerSectionEntries" title="Entries panel"
        class="p-2 relative mr-3 rounded-full transition-colors w-11 h-11 text-grey-500 dark:text-grey-300 focus:bg-grey-200 dark:focus:bg-grey-600 hover:bg-grey-200 dark:hover:bg-grey-600">
            <a href="` + window.location.protocol + `//www.hejto.pl/konto/wpisy" title="wpisy"">
               <svg width="24px" height="24px" viewBox="0 -5 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" stroke="currentColor" fill="currentColor">
                  <title>Wpisy</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                     <g id="Message-text" sketch:type="MSLayerGroup" transform="translate(1.000000, 1.000000)" stroke="#6B6C6E" stroke-width="2">
                        <path d="M18.2,39.3 C16.8,38.9 15.4,38.4 14.2,37.8 C5.7,34.2 0.1,27.8 0.1,20.5 C0.1,9.2 13.7,0 30.6,0 C47.5,0 61.1,9.2 61.1,20.5 C61.1,31.8 47.5,41 30.6,41 C29.8,41 28.9,41 28.1,40.9 L28.1,40.9 L8.2,50 L14.2,37.9" id="Shape" sketch:type="MSShapeGroup"></path>
                        <path d="M16.2,13 L34,13" id="Shape" sketch:type="MSShapeGroup"></path>
                        <path d="M16.2,20 L44,20" id="Shape" sketch:type="MSShapeGroup"></path>
                        <path d="M16.2,27 L47,27" id="Shape" sketch:type="MSShapeGroup"></path>
                     </g>
                  </g>
               </svg>
            </a>
        </div>
        <div id="powerSectionComments" title="Comments panel"
        class="p-2 relative mr-3 rounded-full transition-colors w-11 h-11 text-grey-500 dark:text-grey-300 focus:bg-grey-200 dark:focus:bg-grey-600 hover:bg-grey-200 dark:hover:bg-grey-600">
            <a href="` + window.location.protocol + `//www.hejto.pl/konto/komentowane-wpisy" title="komentowane-wpisy"">
               <svg width="24px" height="24px" viewBox="0 -5 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" stroke="currentColor" fill="currentColor">
                 <title>Komentarze</title>
                 <desc>Created with Sketch.</desc>
                 <defs></defs>
                 <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                    <g id="Message-dot" sketch:type="MSLayerGroup" transform="translate(1.000000, 2.000000)" stroke="#6B6C6E" stroke-width="2">
                       <path d="M18.1,39.2 C16.7,38.8 15.3,38.3 14.1,37.7 C5.6,34.1 0,27.7 0,20.4 C0,9.1 13.6,-0.1 30.5,-0.1 C47.3,-0.1 61.2,9.1 61.2,20.4 C61.2,31.7 47.4,40.9 30.5,40.9 C29.7,40.9 28.8,40.9 28,40.8 L28,40.8 L8.1,49.9 L14.1,37.8" id="Shape" sketch:type="MSShapeGroup"></path>
                       <circle id="Oval" sketch:type="MSShapeGroup" cx="20.5" cy="21.5" r="1.5"></circle>
                       <circle id="Oval" sketch:type="MSShapeGroup" cx="31.5" cy="21.5" r="1.5"></circle>
                       <circle id="Oval" sketch:type="MSShapeGroup" cx="41.5" cy="21.5" r="1.5"></circle>
                    </g>
                 </g>
               </svg>
            </a>
        </div>
        `);
}