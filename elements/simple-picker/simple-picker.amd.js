define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/iron-icon/iron-icon.js","./node_modules/@polymer/iron-icons/iron-icons.js","./lib/simple-picker-option.js"],function(_exports,_polymerElement,_ironIcon,_ironIcons,_simplePickerOption){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SimplePicker=void 0;function _templateObject_7f6bddb029d111e9909c9fa28300b51f(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: flex;\n  align-items: center;\n  position: relative;\n  --simple-picker-color: black;\n  font-size: var(--paper-input-container-label_-_font-size, var(--paper-font-subhead_-_font-size, inherit));\n  margin: 8px 0;\n  height: 42px;\n  @apply --simple-picker;\n}\n\n:host([disabled]) {\n  cursor: not-allowed;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host label {\n  padding-right: 5px;\n  color: var(--paper-input-container-label_-_color, var(--paper-input-container-color, var(--secondary-text-color, #000)));\n  @apply --simple-picker-label;\n}\n\n:host, \n:host #sample, \n:host .rows {\n  margin: 0;\n  padding: 0;\n}\n\n:host #listbox {\n  display: flex;\n  flex: 1 0 auto;\n}\n\n:host #sample {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px;\n  border-radius: 2px;\n  background-color: var(--simple-picker-background-color,#ddd);\n  border: 1px solid var(--simple-picker-border-color, var(--simple-picker-color));\n}\n\n:host #icon {\n  transform: rotate(-90deg);\n  transition: transform 0.25s;\n}\n\n:host([expanded]) #icon {\n  transform: rotate(0deg);\n  transition: transform 0.25s;\n}\n\n:host #collapse {\n  display: none;\n  width: 100%;\n  position: absolute;\n  top: 35px;\n  padding: 1px;\n  @apply --simple-picker-collapse;\n}\n\n:host([expanded]:not([disabled])) #collapse {\n  display: block;\n} \n\n:host .rows {\n  display: block;\n  position: absolute;\n  z-index: 1000;\n  outline: 1px solid var(--simple-picker-border-color, var(--simple-picker-color));\n  background-color: var(--simple-picker-background-color,#ddd);\n  box-shadow: 0px 0px 1px #888;\n  @apply --simple-picker-rows;\n}\n\n:host .row {\n  display: flex; \n  align-items: stretch;\n  justify-content: space-between;\n  @apply --simple-picker-row;\n}\n\n:host simple-picker-option {\n  z-index: 1;\n  flex: 1 1 auto;\n  max-height: unset;\n  min-height: var(--simple-picker-option-size, 24px);\n  min-width: var(--simple-picker-option-size, 24px);\n  line-height: var(--simple-picker-option-size, 24px);\n  color: var(--simple-picker-color);\n  background-color: var(--simple-picker-option-background-color, white);\n  outline: var(--simple-picker-option-outline, none);\n  transition: max-height 2s;\n  @apply --simple-picker-option;\n}\n\n:host #sample simple-picker-option {\n\n}\n\n:host simple-picker-option[selected] {\n  z-index: 50;\n  color: var(--simple-picker-color);\n  background-color: var(--simple-picker-selected-option-background-color, #e8e8e8);\n  outline: var(--simple-picker-selected-option-outline, none);\n}\n\n:host simple-picker-option[active] {\n  z-index: 100;\n  cursor: pointer;\n  color: var(--simple-picker-color);\n  background-color: var(--simple-picker-active-option-background-color, #aaddff);\n  outline: var(--simple-picker-active-option-outline, none);\n}\n\n:host #sample simple-picker-option {\n  color: var(--simple-picker-active-sample-color,  var(--simple-picker-color));\n  background-color: var(--simple-picker-sample-background-color, transparent);\n  border: none;\n}\n\n:host(:not([expanded])) #collapse simple-picker-option {\n  max-height: 0;\n  transition: max-height 1.5s;\n}\n\n@media screen and (max-width: 600px) {\n  :host {\n    position: static;\n  }\n  :host #collapse {\n    top: 0;\n    margin-top: 0;\n    position: relative;\n  } \n  :host .rows {\n    position: sticky;\n  }  \n}\n</style>\n<label for=\"listbox\" hidden$=\"[[!hasLabel]]\">[[label]]</label>\n<div id=\"listbox\"\n  aria-activedescendant$=\"[[__activeDesc]]\" \n  aria-labelledby$=\"[[ariaLabelledby]]\" \n  disabled$=\"[[disabled]]\"\n  role=\"listbox\" \n  tabindex=\"0\">\n  <div id=\"sample\">\n    <simple-picker-option \n      aria-hidden=\"true\" \n      hide-option-labels$=\"[[hideOptionLabels]]\"\n      icon$=\"[[__selectedOption.icon]]\"\n      style$=\"[[__selectedOption.style]]\" \n      title$=\"[[__selectedOption.alt]]\">\n    </simple-picker-option>\n    <span id=\"icon\"><iron-icon aria-hidden=\"true\" icon=\"arrow-drop-down\"></iron-icon></span>\n  </div>\n  <div id=\"collapse\">\n    <div class=\"rows\">\n      <template is=\"dom-repeat\" items=\"[[options]]\" as=\"row\" index-as=\"rownum\">\n        <div class=\"row\">\n          <template is=\"dom-repeat\" items=[[row]] as=\"option\" index-as=\"colnum\">\n            <simple-picker-option \n              active$=\"[[_isActive(__activeDesc,rownum,colnum)]]\"\n              aria-selected$=\"[[_isSelected(value,option.value)]]\"\n              data$=\"[[data]]\"\n              hide-option-labels$=\"[[hideOptionLabels]]\"\n              icon$=\"[[option.icon]]\"\n              id$=\"[[_getOptionId(rownum,colnum)]]\"\n              role=\"option\"\n              selected$=\"[[_isSelected(value,option.value)]]\"\n              on-option-focus=\"_handleOptionFocus\"\n              on-set-selected-option=\"_handleSetSelectedOption\"\n              style$=\"[[option.style]]\" \n              tabindex=\"-1\"\n              title$=\"[[option.alt]]\"\n              value$=\"[[option.value]]\">\n            </simple-picker-option>\n          </template>\n        </div>\n      </template>\n    </div>\n  </div>\n</div>"]);_templateObject_7f6bddb029d111e9909c9fa28300b51f=function _templateObject_7f6bddb029d111e9909c9fa28300b51f(){return data};return data}var SimplePicker=function(_PolymerElement){babelHelpers.inherits(SimplePicker,_PolymerElement);function SimplePicker(){babelHelpers.classCallCheck(this,SimplePicker);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SimplePicker).apply(this,arguments))}babelHelpers.createClass(SimplePicker,[{key:"_getOption",value:function _getOption(options,optionId){if(options!==void 0&&optionId!==void 0&&null!==optionId){var coords=optionId.split("-");return options[coords[1]][coords[2]]}return null}},{key:"_getOptionId",value:function _getOptionId(rownum,colnum){return"option-"+rownum+"-"+colnum}},{key:"_goToOption",value:function _goToOption(rownum,colnum){var targetId=this._getOptionId(rownum,colnum),target=this.shadowRoot.querySelector("#"+targetId),active=this.shadowRoot.querySelector("#"+this.__activeDesc);if(null!==target){target.tabindex=0;target.focus();active.tabindex=-1}}},{key:"_handleListboxClick",value:function _handleListboxClick(e){this._toggleListbox(!this.expanded)}},{key:"_handleListboxKeydown",value:function _handleListboxKeydown(e){var coords=this.__activeDesc.split("-"),rownum=parseInt(coords[1]),colnum=parseInt(coords[2]);if(32===e.keyCode){e.preventDefault();this._toggleListbox(!this.expanded)}else if(this.expanded&&[9,35,36,38,40].includes(e.keyCode)){e.preventDefault();if(35===e.keyCode){var lastrow=this.options.length-1,lastcol=this.options[lastrow].length-1;this._goToOption(lastrow,lastcol)}else if(36===e.keyCode){this._goToOption(0,0)}else if(38===e.keyCode){if(0<colnum){this._goToOption(rownum,colnum-1)}else if(0<rownum){this._goToOption(rownum-1,this.options[rownum-1].length-1)}}else if(40===e.keyCode){if(colnum<this.options[rownum].length-1){this._goToOption(rownum,colnum+1)}else if(rownum<this.options.length-1){this._goToOption(rownum+1,[0])}}}}},{key:"_handleOptionFocus",value:function _handleOptionFocus(e){this._setActiveOption(e.detail.id)}},{key:"_hasLabel",value:function _hasLabel(label){return label!==void 0&&null!==label&&""!==label.trim()}},{key:"_isActive",value:function _isActive(active,rownum,colnum){return active===this._getOptionId(rownum,colnum)}},{key:"_isSelected",value:function _isSelected(value1,value2){return value1===value2}},{key:"_setActiveOption",value:function _setActiveOption(id){this.__activeDesc=id;this.dispatchEvent(new CustomEvent("option-focus",{detail:this}))}},{key:"_setSelectedOption",value:function _setSelectedOption(value){var sel=null;this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:this}));if(null!==value&&this.options!==void 0&&null!==this.options){for(var i=0;i<this.options.length;i++){for(var j=0;j<this.options[i].length;j++){if(this.options[i][j].value===value){this.__activeDesc=this.options[i][j].value;sel=this.options[i][j]}}}}return sel}},{key:"_toggleListbox",value:function _toggleListbox(expanded){var active=this.shadowRoot.querySelector("#"+this.__activeDesc);this.expanded=expanded;if(expanded){if(null!==active)active.focus();this.dispatchEvent(new CustomEvent("expand",{detail:this}))}else{if(null!==active)this.value=active.getAttribute("value");this.dispatchEvent(new CustomEvent("collapse",{detail:this}))}}},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(SimplePicker.prototype),"ready",this).call(this);var root=this;if(this.$.listbox!==void 0){this.$.listbox.addEventListener("click",function(e){root._handleListboxClick(e)});this.$.listbox.addEventListener("keydown",function(e){root._handleListboxKeydown(e)})}}},{key:"setOptions",value:function setOptions(options){this.set("options",[[]]);this.set("options",options)}},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(SimplePicker.prototype),"connectedCallback",this).call(this)}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_7f6bddb029d111e9909c9fa28300b51f())}},{key:"properties",get:function get(){return{ariaLabelledby:{name:"ariaLabelledby",type:"String",value:null},disabled:{name:"disabled",type:"Boolean",value:!1},expanded:{name:"expanded",type:"Boolean",value:!1,reflectToAttribute:!0},hideOptionLabels:{name:"hideOptionLabels",type:"Boolean",value:!1},hasLabel:{name:"label",type:"Boolean",computed:"_hasLabel(label)"},label:{name:"label",type:"String",value:null},options:{name:"options",type:"Array",value:[[]]},value:{name:"value",type:"Object",value:null,notify:!0,reflectToAttribute:!0},__activeDesc:{name:"__activeDesc",type:"String",value:"option-0-0"},__selectedOption:{name:"_setSelectedOption",type:"Object",computed:"_setSelectedOption(value)"}}}},{key:"tag",get:function get(){return"simple-picker"}}]);return SimplePicker}(_polymerElement.PolymerElement);_exports.SimplePicker=SimplePicker;window.customElements.define(SimplePicker.tag,SimplePicker)});