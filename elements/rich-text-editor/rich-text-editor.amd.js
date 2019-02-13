define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/responsive-utility/responsive-utility.js","./node_modules/@polymer/iron-icons/iron-icons.js","./node_modules/@polymer/iron-icons/editor-icons.js","./node_modules/@polymer/iron-icons/image-icons.js","./node_modules/@lrnwebcomponents/md-extra-icons/md-extra-icons.js","./lib/rich-text-editor-button.js","./lib/rich-text-editor-styles.js"],function(_exports,_polymerElement,_HAXWiring,_responsiveUtility,_ironIcons,_editorIcons,_imageIcons,_mdExtraIcons,_richTextEditorButton,_richTextEditorStyles){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.RichTextEditor=void 0;function _templateObject_21a8b6502fe211e9bd7355a1480d168b(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  @apply --rich-text-editor;\n}\n:host([sticky]) {\n  position: sticky;\n  top: 0;\n}\n:host([hidden]) {\n  display: none;\n}\n:host #toolbar {\n  display: flex;\n  opacity: 1;\n  margin: 0;\n  align-items: stretch;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  background-color: var(--rich-text-editor-bg);\n  border: var(--rich-text-editor-border);\n  font-size: 12px;\n  transition: all 0.5s;\n  @apply --rich-text-editor-toolbar;\n} \n:host #toolbar[aria-hidden]{\n  visibility: hidden;\n  opacity: 0;\n  height: 0;\n}\n:host #toolbar .group {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-evenly;\n  align-items: stretch;\n  padding: 0 3px;\n  @apply --rich-text-editor-toolbar-group;\n}\n:host #toolbar .group:not(:last-of-type) {\n  margin-right: 3px;\n  border-right: var(--rich-text-editor-border);\n  @apply --rich-text-editor-toolbar-divider;\n}\n:host #toolbar .more-button {\n  flex: 1 0 auto;\n  justify-content: flex-end;\n}\n:host .more-button[display-max=\"xs\"],\n:host(:not([responsive-size=\"xs\"])) .more-button[display-max=\"sm\"],\n:host(:not([responsive-size*=\"s\"])) .more-button[display-max=\"md\"],\n:host([responsive-size*=\"l\"]) .more-button[display-max=\"lg\"],\n:host([responsive-size=\"xl\"]) .more-button[display-max=\"xl\"],\n:host([responsive-size=\"xs\"]) #toolbar[collapsed] .group:not([minimum-size=\"xs\"]),\n:host([responsive-size=\"sm\"]) #toolbar[collapsed] .group:not([minimum-size*=\"s\"]),\n:host([responsive-size=\"md\"]) #toolbar[collapsed] .group[minimum-size*=\"l\"],\n:host([responsive-size=\"lg\"]) #toolbar[collapsed] .group[minimum-size=\"xl\"] {\n  display: none;\n}\n</style>\n<style include=\"rich-text-editor-styles\"></style>\n<div id=\"toolbar\" aria-hidden$=\"[[!controls]]\" collapsed$=\"[[collapsed]]\">\n  <template is=\"dom-repeat\" items=\"[[buttons]]\" as=\"size\">\n    <template is=\"dom-repeat\" items=\"[[size.groups]]\" as=\"group\">\n      <div class=\"group\" minimum-size$=\"[[size.size]]\">\n        <template is=\"dom-repeat\" items=\"[[group.buttons]]\" as=\"button\">\n          <rich-text-editor-button\n            controls$=\"[[controls]]\"\n            command$=\"[[button.command]]\"\n            event$=\"[[button.event]]\"\n            icon$=\"[[button.icon]]\"\n            label$=\"[[button.label]]\"\n            toggled$=\"[[_toggledButton(button,__trigger)]]\"\n            on-rich-text-button-tap=\"_handleTextOperation\">\n          </rich-text-editor-button> \n        </template>\n      </div>\n    </template>\n  </template>\n  <rich-text-editor-button\n    class=\"more-button\"\n    display-max$=\"[[_getMax(buttons)]]\"\n    controls=\"toolbar\"\n    icon=\"more-vert\"\n    label=\"Toggle More Buttons\"\n    toggled$=\"[[!collapsed]]\"\n    on-rich-text-button-tap=\"_toggleMore\">\n  </rich-text-editor-button>  \n</div>"]);_templateObject_21a8b6502fe211e9bd7355a1480d168b=function _templateObject_21a8b6502fe211e9bd7355a1480d168b(){return data};return data}var RichTextEditor=function(_PolymerElement){babelHelpers.inherits(RichTextEditor,_PolymerElement);function RichTextEditor(){babelHelpers.classCallCheck(this,RichTextEditor);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(RichTextEditor).apply(this,arguments))}babelHelpers.createClass(RichTextEditor,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(RichTextEditor.prototype),"connectedCallback",this).call(this);var root=this;document.designMode="on";window.ResponsiveUtility.requestAvailability();window.dispatchEvent(new CustomEvent("responsive-element",{detail:{element:root,attribute:"responsive-size",relativeToParent:!0}}));document.addEventListener("selectionchange",function(){root._updateToggleButtons()})}},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(RichTextEditor.prototype),"disconnectedCallback",this).call(this);var root=this;document.removeEventListener("selectionchange",function(){root._updateToggleButtons()})}},{key:"editTarget",value:function editTarget(editableElement){var root=this,test=document.createElement("RichTextEditorButton");console.log(_richTextEditorButton.RichTextEditorButton.properties,test);if(editableElement.getAttribute("id")===void 0||null===editableElement.getAttribute("id"))editableElement.setAttribute("id",root._generateUUID());if(root.editableElement!==editableElement){if(null!==root.editableElement){root.editableElement.contentEditable=!1;root.editableElement=null}editableElement.parentNode.insertBefore(root,editableElement);root.editableElement=editableElement;root.editableElement.contentEditable=!0;root._updateToggleButtons();root.controls=editableElement.getAttribute("id")}}},{key:"removeEditableRegion",value:function removeEditableRegion(editableElement){for(var root=this,i=0,item;i<this.editableElements.length;i++){item=this.editableElements[i];if(item[0]===editableElement){item[0].removeEventListener("click",function(e){root.editTarget(editableElement)});item[1].disconnect();this.set("editableElements",this.editableElements.splice(i,1))}}}},{key:"addEditableRegion",value:function addEditableRegion(editableElement){var root=this,observer=new MutationObserver(function(){root._updateToggleButtons()});editableElement.addEventListener("click",function(e){root.editTarget(editableElement)});observer.observe(editableElement,{attributes:!1,childList:!0,subtree:!0,characterData:!1});root.push("editableElements",[editableElement,observer])}},{key:"_generateUUID",value:function _generateUUID(){return"ss-s-s-s-sss".replace(/s/g,this._uuidPart)}},{key:"_getButtons",value:function _getButtons(config){var buttons=[],sizes=["xs","sm","md","lg","xl"];sizes.forEach(function(size){if(config[size]!==void 0&&null!==config[size])buttons.push({size:size,groups:config[size]})});return buttons}},{key:"_getMax",value:function _getMax(buttons){return buttons!==void 0&&null!==buttons?buttons[buttons.length-1].size:null}},{key:"_getRange",value:function _getRange(){var sel=window.getSelection();if(sel.getRangeAt&&sel.rangeCount){return sel.getRangeAt(0)}else if(sel){return sel}else!1}},{key:"_handleTextOperation",value:function _handleTextOperation(e){this.selection=this.editableElement.getSelection?this.editableElement.getSelection():this._getRange();if(e.detail.command!==void 0&&null!==e.detail.command){document.execCommand(e.detail.command)}else{this.dispatchEvent(new CustomEvent("rich-text-event",{detail:{button:e.detail,selection:this.selection}}))}this._updateToggleButtons()}},{key:"_toggledButton",value:function _toggledButton(){var button=0<arguments.length&&arguments[0]!==void 0?arguments[0]:null,trigger=1<arguments.length?arguments[1]:void 0,sel=window.getSelection(),state=null!==button.command&&!0===button.toggles?document.queryCommandState(button.command):!1;return state}},{key:"_toggleMore",value:function _toggleMore(e){this.collapsed=!this.collapsed}},{key:"_updateToggleButtons",value:function _updateToggleButtons(){this.__trigger=!1===this.__trigger}},{key:"_uuidPart",value:function _uuidPart(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_21a8b6502fe211e9bd7355a1480d168b())}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Rich text-editor",description:"a standalone rich text editor",icon:"icons:android",color:"green",groups:["Text"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"nikkimk",owner:"Penn State University"}},settings:{quick:[],configure:[{property:"title",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function get(){return{buttons:{name:"buttons",type:"Array",computed:"_getButtons(config)"},collapsed:{name:"collapsed",type:"Boolean",value:!0},config:{name:"config",type:"Object",value:{xs:[{group:"History",buttons:[{label:"Undo",icon:"icons:undo",event:"history-undo",command:"undo"},{label:"Redo",icon:"icons:redo",event:"history-redo",command:"redo"}]},{group:"Basic Inline Operations",buttons:[{label:"Bold",icon:"editor:format-bold",event:"text-bold",command:"bold",toggles:!0},{label:"Italics",icon:"editor:format-italic",event:"text-italic",command:"italic",toggles:!0},{label:"Erase Format",icon:"editor:format-clear",event:"text-remove-format",command:"removeFormat"}]},{group:"Links",buttons:[{label:"Link",icon:"link",command:"link",toggles:!0}]},{group:"Clipboard Operations",buttons:[{label:"Cut",icon:"icons:content-cut",event:"clipboard-cut",command:"cut"},{label:"Copy",icon:"icons:content-copy",event:"clipboard-copy",command:"copy"},{label:"Paste",icon:"icons:content-paste",event:"clipboard-paste",command:"paste"}]}],sm:[{group:"Subscript and Superscript",buttons:[{label:"Subscript",icon:"mdextra:subscript",event:"text-subscript",command:"subscript",toggles:!0},{label:"Superscript",icon:"mdextra:superscript",event:"text-superscript",command:"superscript",toggles:!0}]}],md:[{group:"Lists and Indents",buttons:[{label:"Ordered List",icon:"editor:format-list-numbered",event:"text-list-numbered",command:"insertOrderedList",toggles:!0},{label:"Unordered List",icon:"editor:format-list-bulleted",event:"text-list-bulleted",command:"insertUnorderedList",toggles:!0},{label:"Blockquote",icon:"editor:format-quote"},{label:"Increase Indent",icon:"editor:format-indent-increase",event:"text-indent",command:"indent"},{label:"Decrease Indent",icon:"editor:format-indent-decrease",event:"text-outdent",command:"outdent"}]}],lg:[{group:"Insertions",buttons:[{label:"Insert Inline Image",icon:"editor:insert-photo",command:"insertImage"},{label:"Insert Symbol",icon:"editor:functions"},{label:"Insert Emoji",icon:"image:tag-faces"}]}]}},controls:{name:"controls",type:"String",value:null},editableElements:{name:"editableElements",type:"Array",value:[]},editableElement:{name:"editableElement",type:"Object",value:null},responsiveSize:{name:"responsiveSize",type:"String",value:"xs",reflectToAttribute:!0},selection:{name:"selection",type:"Object",value:null},sticky:{name:"sticky",type:"Boolean",value:!1,reflectToAttribute:!0}}}},{key:"tag",get:function get(){return"rich-text-editor"}}]);return RichTextEditor}(_polymerElement.PolymerElement);_exports.RichTextEditor=RichTextEditor;window.customElements.define(RichTextEditor.tag,RichTextEditor)});