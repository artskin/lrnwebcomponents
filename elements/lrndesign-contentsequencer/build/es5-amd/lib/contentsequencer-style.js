define(["../node_modules/@polymer/paper-styles/color.js"], function() {
  "use strict";
  var $_documentContainer = document.createElement("div");
  $_documentContainer.setAttribute("style", "display: none;");
  $_documentContainer.innerHTML =
    '<dom-module id="contentsequencer-style">\n  <template strip-whitespace="">\n    <style>\n\n:host {\n  display: block;\n  line-height: 24px;\n\n  --paper-menu: {\n    cursor: pointer;\n    background: inherit;\n    padding: 0;\n  };\n\n  --app-drawer-content-container: {\n    background: var(--lrndesign-contentsequencer-background, --paper-grey-100);\n  };\n\n  --nav-height: 64px;\n}\n\n\n:host([theme="minimal"]) {\n  position: relative;\n}\n\n#headerpanel {\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  margin-left: 256px; /* drawer width */\n}\n\n#headerpanel[narrow] {\n  margin-left: 0;\n}\n\napp-drawer-layout {\n  overflow-x: hidden;\n}\n\n.drawer-content-wrapper {\n  padding: 16px;\n}\n\n#main-content {\n  background: var(--lrndesign-contentsequencer-background, --paper-grey-300);\n}\n\n#pages {\n  top: var(--nav-height);\n}\n\n#controls[narrow] {\n  width: 100%;\n}\n\n#main-toolbar {\n  background: var(--lrndesign-contentsequencer-header-background, --paper-blue-600);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: var(--nav-height);\n  padding: 0 16px;\n}\n\n#main-toolbar .title {\n  margin: 0 8px;\n  flex: 1;\n  font-weight: 300;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\npaper-icon-button[icon=menu] {\n  margin-right: 0 !important;\n}\n\npaper-fab {\n  --paper-fab-keyboard-focus-background: var(--lrndesign-contentsequencer-fab-background, --paper-blue-700);\n  --paper-fab-background: var(--lrndesign-contentsequencer-fab-background, --paper-blue-700);\n  flex-shrink: 0;\n}\n\n/* override external styles */\n:host([theme="minimal"]) #resumeDialog > * {\n  margin-top: 20px;\n  padding: 0 24px;\n}\n\n:host([theme="minimal"]) #resumeDialog .buttons {\n  padding: 8px 8px 8px 24px;\n  margin: 0;\n}\n\n.countdown iron-icon {\n  margin-right: 3px;\n}\n\n:host(:not([theme="minimal"])) #drawer .countdown {\n  display: none;\n}\n\n:host([theme="minimal"]) #drawer .countdown {\n  padding: 0 16px 16px 16px;\n  font-style: italic;\n  color: var(--paper-blue-500);\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n}\n\n#controls {\n  position: fixed;\n  right: 0;\n  bottom: 16px;\n  padding: 0 16px;\n  width: calc(100% - 256px); /* width of drawer */\n  box-sizing: border-box;\n  pointer-events: none; /* allow users to scroll */\n}\n\n#controls .fabs {\n  /* Note: custom props don\'t work in calc(). */\n  max-width: calc(800px + 175px);\n  margin: 0 auto;\n}\n\n.navbutton {\n  pointer-events: initial; /* make sure buttons are clickable */\n}\n\n.navbutton.prevbutton {\n  transition: transform 300ms ease-in-out;\n}\n\n.navbutton.prevbutton[disabled] {\n  background: var(--lrndesign-contentsequencer-fab-background);\n  color: white;\n  transform: scale(0);\n}\n\n.navbutton.donebutton {\n  background: var(--google-green-500);\n}\n\n#toc {\n  /* ensures bottom of nav scrolling meny doesn\'t overlap with file bug link. */\n  margin-bottom: 1.5em;\n}\n\n.toc-item {\n  font-size: 14px;\n  color: var(--paper-grey-500);\n  overflow: hidden;\n  border-radius: 4px;\n  padding: 6px 16px;\n  box-sizing: content-box; /* override users that set * selector box-sizing. */\n}\n\n.toc-item i {\n  display: inline-block;\n  font-style: normal;\n  width: 24px;\n  min-width: 24px;\n  background: #fff;\n  border-radius: 50%;\n  text-align: center;\n  height: 24px;\n  vertical-align: middle;\n  line-height: 24px;\n  border: 2px solid var(--paper-grey-400);\n  margin-right: 8px;\n  font-weight: 400;\n}\n\n.toc-item i:before,\n.toc-item i:after {\n  content: \'\';\n  display: block;\n  border-left: 1px solid var(--paper-grey-400);\n  width: 0;\n  height: 44px;\n  z-index: 1;\n  margin-top: 1px;\n}\n\n.toc-item i:before {\n  margin-top: -44px;\n  margin-left: 11px;\n}\n\n.toc-item i:after {\n  margin-left: 11px;\n}\n\n.toc-item.completed {\n  color: var(--paper-grey-900);\n}\n\n.toc-item.iron-selected {\n  color: var(--paper-grey-900);\n  background-color: var(--paper-grey-300);\n  font-weight: 600;\n}\n\n.toc-item.completed i,\n.toc-item.completed i:before,\n.toc-item.completed i:after,\n.toc-item.iron-selected i,\n.toc-item.iron-selected i:before {\n  border-color: var(--paper-blue-500);\n}\n\n.toc-item:first-of-type i:before,\n.toc-item:last-of-type i:after {\n  display: none;\n}\n\n#metadata {\n  color: var(--lrndesign-contentsequencer-footer-text-color, #777);\n  font-size: 0.7em;\n  flex: 0 0 80px;\n}\n\n#feedback a {\n  color: currentcolor;\n}\n\n@media (min-width: 641px) {\n  :host(:not([theme="minimal"])) #pages {\n    margin-top: 32px;\n  }\n  #controls {\n    padding: 0 32px;\n    bottom: 32px;\n  }\n}\n\n    </style>\n  </template>\n</dom-module>';
  document.head.appendChild($_documentContainer);
});