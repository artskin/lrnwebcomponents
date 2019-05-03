define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js"],function(_exports,_polymerElement,_HAXWiring,_schemaBehaviors,_simpleColors){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.AccentCard=void 0;function _templateObject_342f33c06d0a11e9b7a2411172694144(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style is=\"custom-style\" include=\"simple-colors\">\n        :host {\n          display: block;\n          border-radius: 2px;\n          margin: 0 0 15px;\n          box-shadow: var(\n            --accent-card-box-shadow,\n            0 2px 2px 0 rgba(0, 0, 0, 0.14),\n            0 1px 5px 0 rgba(0, 0, 0, 0.12),\n            0 3px 1px -2px rgba(0, 0, 0, 0.2)\n          );\n          color: var(\n            --accent-card-color,\n            var(--simple-colors-default-theme-grey-9, #222)\n          );\n          background-color: var(\n            --accent-card-background-color,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n          --accent-card-image-width: 30%;\n          --accent-card-image-height: 10%;\n          --accent-card-border-color: var(\n            --simple-colors-default-theme-accent-6,\n            #ddd\n          );\n          --accent-card-heading-color: var(\n            --simple-colors-default-theme-accent-7,\n            #000\n          );\n          --accent-card-footer-border-color: var(\n            --simple-colors-default-theme-grey-3,\n            #ddd\n          );\n          @apply --accent-card;\n        }\n        :host([dark]) {\n          color: var(\n            --accent-card-color,\n            var(--simple-colors-default-theme-grey-12, #fff)\n          );\n          --accent-card-border-color: var(\n            --simple-colors-default-theme-accent-7,\n            #fff\n          );\n          --accent-card-footer-border-color: var(\n            --simple-colors-default-theme-grey-6,\n            #666\n          );\n        }\n        :host([accent-background]) {\n          background-color: var(\n            --accent-card-background-color,\n            var(--simple-colors-default-theme-accent-1, #fff)\n          );\n          --accent-card-footer-border-color: var(--accent-card-border-color);\n        }\n        :host section {\n          width: 100%;\n          box-sizing: border-box;\n        }\n        :host([horizontal]) section {\n          display: flex;\n          justify-content: space-between;\n          align-items: stretch;\n        }\n        :host([flat]) {\n          box-shadow: none;\n        }\n        :host([flat]:not([accent-background])) {\n          border: 1px solid var(--accent-card-footer-border-color);\n        }\n        :host(:not([horizontal]):not([no-border])) section {\n          border-top: 4px solid var(--accent-card-border-color);\n        }\n        :host([horizontal]:not([no-border])) section {\n          border-left: 4px solid var(--accent-card-border-color);\n        }\n        :host .image-outer {\n          box-sizing: border-box;\n          position: relative;\n          overflow: visible;\n        }\n        :host([horizontal]) .image-outer {\n          height: auto;\n          width: var(--accent-card-image-width);\n        }\n        :host(:not([horizontal])) .image-outer {\n          height: auto;\n          width: 100%;\n        }\n        :host .image {\n          height: 100%;\n          width: 100%;\n          background-size: cover;\n          background-position-x: var(--accent-card-image-x, center);\n          background-position-y: var(--accent-card-image-y, center);\n          @apply --accent-card-image;\n        }\n        :host([image-align=\"left\"]) .image {\n          background-position-x: left;\n        }\n        :host([image-align=\"center\"]) .image {\n          background-position-x: center;\n        }\n        :host([image-align=\"right\"]) .image {\n          background-position-x: right;\n        }\n        :host([image-valign=\"top\"]) .image {\n          background-position-y: top;\n        }\n        :host([image-valign=\"center\"]) .image {\n          background-position-y: center;\n        }\n        :host([image-valign=\"bottom\"]) .image {\n          background-position-y: bottom;\n        }\n        :host([horizontal]) .image {\n          @apply --accent-card-image-horizontal;\n        }\n        :host(:not([horizontal])) .image {\n          height: 0;\n          padding-top: var(--accent-card-image-height);\n          @apply --accent-card-image-vertical;\n        }\n        :host .body {\n          flex-grow: 1;\n          overflow: visible;\n          @apply --accent-card-body;\n        }\n        :host #heading {\n          padding-top: var(--accent-card-padding, 20px);\n          padding-left: var(--accent-card-padding, 20px);\n          padding-right: var(--accent-card-padding, 20px);\n          padding-bottom: 0;\n          margin: 0;\n          @apply --accent-card-heading;\n        }\n        :host([accent-heading][accent-color]) #heading {\n          color: var(--accent-card-heading-color);\n        }\n        :host #subheading {\n          font-size: 90%;\n          font-style: italic;\n          padding-left: var(--accent-card-padding, 20px);\n          padding-right: var(--accent-card-padding, 20px);\n          @apply --accent-card-subheading;\n        }\n        :host #content {\n          font-size: 100%;\n          padding: var(--accent-card-padding, 20px);\n          @apply --accent-card-content;\n        }\n        :host #content:not(:last-child) {\n          border-bottom: 1px solid var(--accent-card-footer-border-color);\n        }\n        :host #footer {\n          padding-left: var(--accent-card-padding, 20px);\n          padding-right: var(--accent-card-padding, 20px);\n          @apply --accent-card-footer;\n        }\n      </style>\n      <section id=\"card\" style$=\"[[__customStyle]]\">\n        <div class=\"image-outer\" hidden$=\"[[!_hasProp(imageSrc)]]\">\n          <div class=\"image\" style$=\"[[__backgroundStyle]]\"></div>\n        </div>\n        <div class=\"body\">\n          <h1 id=\"heading\"><slot name=\"heading\"></slot></h1>\n          <div id=\"subheading\"><slot name=\"subheading\"></slot></div>\n          <div id=\"content\"><slot name=\"content\"></slot></div>\n          <div id=\"footer\"><slot name=\"footer\"></slot></div>\n        </div>\n      </section>\n    "]);_templateObject_342f33c06d0a11e9b7a2411172694144=function _templateObject_342f33c06d0a11e9b7a2411172694144(){return data};return data}/**
 * `accent-card`
 * `A card with optional accent stylings.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @extends SimpleColors
 * @customElement
 * @polymer
 * @demo demo/index.html demo
 * @demo demo/colors.html colors
 * @demo demo/orientation.html card orientation
 * @demo demo/borders.html borders and shadow
 * @demo demo/images.html image aligmnent
 * @demo demo/variables.html css variables
 */var AccentCard=/*#__PURE__*/function(_SimpleColors){babelHelpers.inherits(AccentCard,_SimpleColors);function AccentCard(){babelHelpers.classCallCheck(this,AccentCard);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(AccentCard).apply(this,arguments))}babelHelpers.createClass(AccentCard,[{key:"connectedCallback",/**
   * life cycle, element is afixed to the DOM
   */value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(AccentCard.prototype),"connectedCallback",this).call(this);// Establish hax property binding
this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(AccentCard.haxProperties,AccentCard.tag,this)}/**
   * sets target for a11y keys
   */},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(AccentCard.prototype),"ready",this).call(this)}/**
   * Determine if the component has a property.
   *
   * @param {object} the property to test
   * @returns {boolean} `prop !== undefined && prop !== null`
   */},{key:"_hasProp",value:function _hasProp(prop){return prop!==void 0&&null!==prop}/**
   * Determine if there is an image and style accordingly.
   *
   * @param {string} the source url of the image
   * @returns {string} the background style that adds the image to the card
   */},{key:"_getBackgroundStyle",value:function _getBackgroundStyle(imageSrc){if(this._hasProp(imageSrc)){return"background-image: url("+imageSrc+");"}else{return"display: none;"}}}],[{key:"tag",/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */get:function get(){return"accent-card"}//get player-specifc properties
},{key:"behaviors",get:function get(){return[_simpleColors.SimpleColors]}// render function
},{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_342f33c06d0a11e9b7a2411172694144())}// haxProperty definition
},{key:"haxProperties",get:function get(){var _ref;return _ref={canEditSource:!1,canPosition:!1},babelHelpers.defineProperty(_ref,"canEditSource",!1),babelHelpers.defineProperty(_ref,"gizmo",{title:"Accent Card",description:"A card with optional accent styling.",icon:"chrome-reader-mode",color:"light-blue",groups:["Media","Text"],handles:[{type:"media",url:"source"},{type:"text",url:"source"}],meta:{author:"nikkimk",owner:"The Pennsylvania State University"}}),babelHelpers.defineProperty(_ref,"settings",{quick:[{property:"accentColor",title:"Accent Color",description:"An optional accent color.",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark Theme",description:"Enable Dark Theme",inputMethod:"boolean",icon:"icons:invert-colors"},{property:"horizontal",title:"Horizontal",description:"Horizontal orientation?",inputMethod:"boolean"}],configure:[{slot:"heading",title:"Heading",description:"A heading for the card.",inputMethod:"textfield"},{slot:"subheading",title:"Subheading",description:"An optional subheading for the card.",inputMethod:"textfield"},{slot:"content",title:"Content",description:"Content for the card.",inputMethod:"textfield"},{slot:"footer",title:"Footer",description:"An optional footer for the card.",inputMethod:"textfield"},{property:"imageSrc",title:"Image",description:"Optional image",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"imageAlign",title:"imageAlign",description:"Image Horizontal Alignment",inputMethod:"select",options:{left:"left",center:"center",right:"right"}},{property:"imageValign",title:"imageValign",description:"Image Vertical Alignment",inputMethod:"select",options:{top:"top",center:"center",bottom:"bottom"}},{property:"accentColor",title:"Accent Color",description:"An optional accent color.",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark Theme",description:"Enable Dark Theme",inputMethod:"boolean",icon:"icons:invert-colors"},{property:"horizontal",title:"Horizontal",description:"Horizontal orientation?",inputMethod:"boolean"},{property:"accentHeading",title:"Heading Accent",description:"Apply the accent color to the heading?",inputMethod:"boolean"},{property:"accentBackground",title:"Background Accent",description:"Apply the accent color to the card background?",inputMethod:"boolean"},{property:"noBorder",title:"No Border Accent",description:"Remove the border accent?",inputMethod:"boolean"},{property:"flat",title:"Flat",description:"Remove the box shadow?",inputMethod:"boolean"}],advanced:[]}),_ref}// properties available to the custom element for data binding
},{key:"properties",get:function get(){return{/**
       * Apply accent color to card background
       */accentBackground:{name:"accentBackground",type:Boolean,value:!1,reflectToAttribute:!0},/**
       * Apply accent color to heading
       */accentHeading:{name:"accentHeading",type:Boolean,value:!1,reflectToAttribute:!0},/**
       * Display the card as flat (no box shadow);
       */flat:{name:"flat",type:Boolean,value:!1,reflectToAttribute:!0},/**
       * Display the card as a horizontal layout? Default is vertical.
       */horizontal:{name:"horizontal",type:Boolean,value:!1,reflectToAttribute:!0},/**
       * "Optional": The horizontal alignment of the image, so that:
       * - "left" will align the left edge of the image.
       * - "right" will align the right edge of the image.
       * - "center" will align the center of the image
       * - A null will allow temporary support to the deprecated CSS variables
       */imageAlign:{name:"imageAlign",type:String,value:null,reflectToAttribute:!0},/**
       * "Optional": The source for an image on the card
       */imageSrc:{name:"imageSrc",type:String,value:null},/**
       * "Optional": The vertical alignment of the image, so that:
       * - "top" will align the top of edge of the image.
       * - "bottom" will align the bottom edge of the image.
       * - "center" will align the middle of the image.
       * - A null will allow temporary support to the deprecated CSS variables
       */imageValign:{name:"imageValign",type:String,value:null,reflectToAttribute:!0},/**
       * Removes the think accent border
       */noBorder:{name:"noBorder",type:Boolean,value:!1,reflectToAttribute:!0},/**
       * The style for the image if there is an image
       */__backgroundStyle:{name:"__backgroundStyle",type:String,computed:"_getBackgroundStyle(imageSrc)"}}}}]);return AccentCard}(_simpleColors.SimpleColors);_exports.AccentCard=AccentCard;window.customElements.define(AccentCard.tag,AccentCard)});