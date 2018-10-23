define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.Ontology = void 0;
  function _templateObject_65c43750d70011e8a96c4130067c974f() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_65c43750d70011e8a96c4130067c974f = function() {
      return data;
    };
    return data;
  }
  var Ontology = (function(_PolymerElement) {
    babelHelpers.inherits(Ontology, _PolymerElement);
    function Ontology() {
      babelHelpers.classCallCheck(this, Ontology);
      return babelHelpers.possibleConstructorReturn(
        this,
        (Ontology.__proto__ || Object.getPrototypeOf(Ontology)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      Ontology,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                Ontology.prototype.__proto__ ||
                  Object.getPrototypeOf(Ontology.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              Ontology.haxProperties,
              Ontology.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_65c43750d70011e8a96c4130067c974f()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Ontology",
                description: "Automated conversion of ontology/",
                icon: "icons:android",
                color: "green",
                groups: [""],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "ontology";
          }
        }
      ]
    );
    return Ontology;
  })(_polymerElement.PolymerElement);
  _exports.Ontology = Ontology;
  window.customElements.define(Ontology.tag, Ontology);
});
