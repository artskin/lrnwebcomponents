define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-card/paper-card.js",
  "./node_modules/@polymer/paper-button/paper-button.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_b602c660e11811e8afaff116767fb8b2() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n        <style>\n            :host {\n                display: none;\n            }\n            :host([file]) {\n                display: inherit;\n            }\n        </style>\n\n        <template is="dom-if" if="[[card]]">\n            <paper-card heading="[[heading]]" elevation="[[elevation]]">\n                <div class="card-content">\n                    <object data="[[file]]" type="application/pdf" width="[[width]]" height="[[height]]">\n                        <p>\n                            {{notSupportedMessage}} <a href="[[file]]">{{notSupportedLinkMessage}}</a>\n                        </p>\n                    </object>\n                </div>\n                <div class="card-actions">\n                    <paper-button on-click="_download">[[downloadLabel]]</paper-button>\n                </div>\n            </paper-card>\n        </template>\n\n        <template is="dom-if" if="[[!card]]">\n            <object data="[[file]]" type="application/pdf" width="[[width]]" height="[[height]]">\n                <p>\n                    {{notSupportedMessage}} <a href="[[file]]">{{notSupportedLinkMessage}}</a>\n                </p>\n            </object>\n        </template>\n'
    ]);
    _templateObject_b602c660e11811e8afaff116767fb8b2 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_b602c660e11811e8afaff116767fb8b2()
    ),
    is: "pdf-browser-viewer",
    properties: {
      file: { type: String, value: void 0, reflectToAttribute: !0 },
      notSupportedMessage: {
        type: String,
        value:
          "It appears your Web browser is not configured to display PDF files. No worries, just"
      },
      notSupportedLinkMessage: {
        type: String,
        value: "click here to download the PDF file."
      },
      height: { type: String, value: "400px" },
      width: { type: String, value: "100%" },
      card: { type: Boolean, value: !1 },
      downloadLabel: { type: String, value: "Download" },
      elevation: { type: String, value: "1" }
    },
    clear: function clear() {
      this.file = void 0;
    },
    _download: function _download() {
      window.location = this.file;
    }
  });
});