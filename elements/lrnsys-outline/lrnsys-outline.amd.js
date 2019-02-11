define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/polymer/lib/utils/async.js","./node_modules/@polymer/paper-input/paper-input.js","./node_modules/@polymer/paper-dialog/paper-dialog.js","./node_modules/@lrnwebcomponents/simple-modal/simple-modal.js","./node_modules/@polymer/paper-icon-button/paper-icon-button.js","./node_modules/@polymer/paper-button/paper-button.js","./lib/lrnsys-outline-item.js"],function(_exports,_polymerLegacy,async,_paperInput,_paperDialog,_simpleModal,_paperIconButton,_paperButton,_lrnsysOutlineItem){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrnsysOutline=void 0;async=babelHelpers.interopRequireWildcard(async);var _listeners,_Polymer;function _templateObject_e89a70d029d111e9bd2f8d16adfeba95(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n      :host kbd {\n        display: inline-block;\n        background: #333;\n        color: white;\n        border-radius: 4px;\n        margin: 4px 4px 4px 0;\n        padding: 8px;\n        font-family: Verdana, Geneva, Tahoma, sans-serif;\n        font-size: 85%;\n      }\n    </style>\n    <paper-icon-button\n      title=\"Keyboard directions\"\n      id=\"dialogtrigger\"\n      icon=\"icons:help\"\n      on-tap=\"openDirections\"\n    ></paper-icon-button>\n    <paper-dialog id=\"modal\" with-backdrop=\"\">\n      <h2>Keyboard shortcuts</h2>\n      <div>\n        <paper-icon-button\n          title=\"close directions\"\n          style=\"position: absolute;top: 0; right:0;\"\n          icon=\"icons:cancel\"\n          on-tap=\"closeDirections\"\n        ></paper-icon-button>\n        <ul>\n          <li><kbd>Enter</kbd> to <strong>add</strong> an item</li>\n          <li>\n            <kbd>Backspace</kbd> <em>with entire item selected</em> to\n            <strong>delete</strong> an item.\n          </li>\n          <li>\n            <kbd>\u2191</kbd> / <kbd>\u2193</kbd> / <kbd>\u2190</kbd> / <kbd>\u2192</kbd> to\n            <strong>navigate</strong> through items\n          </li>\n          <li>\n            <kbd>Tab</kbd> / <kbd>Shift+Tab</kbd>\n            <em>at the beginning of a line</em> to\n            <strong>indent/outdent</strong>\n          </li>\n          <li><kbd>Shift+\u2191</kbd> / <kbd>Shift+\u2193</kbd> to items up/down</li>\n        </ul>\n      </div>\n    </paper-dialog>\n    <div id=\"itemslist\">\n      <template is=\"dom-repeat\" items=\"{{items}}\" as=\"item\">\n        <lrnsys-outline-item\n          disable-down=\"[[item.disableDown]]\"\n          disable-left=\"[[item.disableLeft]]\"\n          disable-right=\"[[item.disableRight]]\"\n          disable-up=\"[[item.disableUp]]\"\n          id$=\"[[item.id]]\"\n          index$=\"[[item.index]]\"\n          indent-level=\"{{item.indent}}\"\n          parent=\"{{item.parent}}\"\n          title=\"{{item.title}}\"\n        >\n        </lrnsys-outline-item>\n      </template>\n    </div>\n  "]);_templateObject_e89a70d029d111e9bd2f8d16adfeba95=function _templateObject_e89a70d029d111e9bd2f8d16adfeba95(){return data};return data}var LrnsysOutline=(0,_polymerLegacy.Polymer)((_Polymer={_template:(0,_polymerLegacy.html)(_templateObject_e89a70d029d111e9bd2f8d16adfeba95()),is:"lrnsys-outline",listeners:(_listeners={"delete-item":"_handleRemoveItem","indent-item":"_handleIndentItem","focus-item":"_handleFocusItem","add-item":"_handleAddItem","move-item":"_handleMoveItem","change-item":"_handleChangeItem"},babelHelpers.defineProperty(_listeners,"focus-item","_handleFocusItem"),babelHelpers.defineProperty(_listeners,"blur-item","_handleBlurItem"),_listeners),properties:{data:{type:Array,value:null},items:{type:Array,value:null,notify:!0},activeItem:{type:Object,notify:!0}},openDirections:function openDirections(e){this.$.modal.opened=!0},closeDirections:function closeDirections(e){var _this=this;this.$.modal.opened=!1;async.microTask.run(function(){setTimeout(function(){_this.$.dialogtrigger.focus()},50)})},attached:function attached(){window.SimpleModal.requestAvailability();this.__modal=this.$.modal;document.body.addEventListener("iron-overlay-canceled",this._accessibleFocus.bind(this));document.body.appendChild(this.$.modal)},_accessibleFocus:function _accessibleFocus(e){var _this2=this;if(e.detail===this.__modal){async.microTask.run(function(){setTimeout(function(){_this2.$.dialogtrigger.focus()},50)})}},ready:function ready(){if(null===this.data||1>this.data.length){this.__tempid=this.__tempid===void 0?0:this.__tempid+1;this.data=[{id:"outline-item-"+this.__tempid,title:"",order:0,parent:null}]}this.setData(this.data)},setData:function setData(data){if(data!==void 0&&0<data.length){var prevIndent=-1;for(var i in data){var indent=parseInt(this._getIndent(data,i));this.__tempid=this.__tempid===void 0?0:this.__tempid+1;data[i].index=parseInt(i);data[i].indent=indent;data[i].prevSibling=this._getSibling(parseInt(i),indent,!0);data[i].nextSibling=this._getSibling(parseInt(i),indent,!1);data[i].disableUp=null===data[i].prevSibling;data[i].disableDown=null===data[i].nextSibling;data[i].disableLeft=0===indent;data[i].disableRight=indent>prevIndent;data[i].id=data[i].id===void 0?"outline-item-"+this.__tempid:data[i].id;prevIndent=indent}}this.set("items",[]);this.set("items",data)},getData:function getData(){for(var i in this.items){this.items[i].order=this._getOrder(this.items[i]);this.notifyPath("items.".concat(i,".order"))}return this.items},addItem:function addItem(detail){var _this3=this,item=detail.item,title=detail.new,spliceIndex=this.items.findIndex(function(j){return j.id===item.id})+1;this.__tempid=this.__tempid+1;this.splice("items",spliceIndex,0,{id:"outline-item-"+this.__tempid,title:title,indent:item.indent,parent:item.parent});this.items[spliceIndex].indentLevel=item.indent;this.notifyPath("items.".concat(spliceIndex,".indentLevel"));this.setData(this.items);if(this.__focusedItem!==void 0&&null!==this.__focusedItem){async.microTask.run(function(){setTimeout(function(){_this3.__focusedItem=item.nextElementSibling;_this3.__focusedItem.focus()},50)})}},removeItem:function removeItem(item){var i=this.items.findIndex(function(j){return j.id===item.id}),b=document.createElement("paper-button");b.raised=!0;b.addEventListener("click",this._deleteItemConfirm.bind(this));b.appendChild(document.createTextNode("Yes, delete"));var evt=new CustomEvent("simple-modal-show",{bubbles:!0,cancelable:!0,detail:{title:"Do you really want to delete ".concat(this.items[i].title,"?"),elements:{buttons:b},invokedBy:item.$.delete,clone:!1}});this.dispatchEvent(evt)},_deleteItemConfirm:function _deleteItemConfirm(e){var _this4=this,i=this.items.findIndex(function(j){return j.id===_this4.activeItem.id});this.activeItem.classList.add("collapse-to-remove");var evt=new CustomEvent("simple-modal-hide",{bubbles:!0,cancelable:!0,detail:{}});this.dispatchEvent(evt);setTimeout(function(){_this4.__focusedItem=_this4.activeItem.previousElementSibling;for(var k in _this4.items){if(_this4.items[k].parent==_this4.items[i].id){_this4.items[k].parent=_this4.items[i].parent}}_this4.activeItem.classList.remove("collapse-to-remove");_this4.splice("items",i,1);if(_this4.__focusedItem!==void 0&&null!==_this4.__focusedItem){async.microTask.run(function(){setTimeout(function(){_this4.__focusedItem.focus()},50)})}},300)},moveItem:function moveItem(item,moveUp){var _this5=this,sourceStart=item.index,sourceEnd=this._getLastChild(item),sourceCount=sourceEnd-sourceStart+1,target=moveUp?this.items[sourceStart].prevSibling:this._getLastChild(this.items[sourceEnd+1])-sourceCount+1;if(-1<target&&target<this.items.length){if(moveUp&&!item.disableUp||!moveUp&&!item.disableDown){var item2=this.splice("items",sourceStart,sourceCount);this.splice("items",target,0,item2);this.__focusedItem=this.$.itemslist.querySelectorAll("lrnsys-outline-item")[target];this.setData(this.items);if(this.__focusedItem!==void 0&&null!==this.__focusedItem){async.microTask.run(function(){setTimeout(function(){_this5.__focusedItem.focus()},50)})}}}},_adjustIndent:function _adjustIndent(item,amount){if(0<amount&&!item.disableRight||0>amount&&!item.disableLeft){var i=parseInt(item.index),oldIndent=item.indent,indent=item.indent+amount,n=i+1,prevParent=null!==item.prevSibling&&babelHelpers.typeof(item.prevSibling)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))?item.prevSibling.id:null,grandParent=this._getItemById(item.parent)&&this._getItemById(item.parent).parent?this._getItemById(item.parent).parent.id:null;item.indent=indent;item.parent=0<amount?prevParent:grandParent;item.prevSibling=this._getSibling(i,indent,!0);item.nextSibling=this._getSibling(i,indent,!1);item.disableUp=null===item.prevSibling;item.disableDown=null===item.nextSibling;item.disableLeft=0===indent;item.disableRight=null===this.items[i-1]||babelHelpers.typeof(this.items[i-1])===("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))||indent>this.items[i-1].indentLevel;this.set("items.".concat(i),item);this.notifyPath("items.".concat(i,".*"));while(null!==this.items[n]&&this.items[n]!==void 0&&oldIndent<this.items[n].indentLevel){this.items[n].indentLevel=this.items[n].indentLevel+amount;this.notifyPath("items.".concat(n,".indentLevel"));n++;next=this.items[n]}}},_getLastChild:function _getLastChild(item){var next=item!==void 0&&null!==item?this._getSibling(item.index,item.indent,!1):null;if(null!==next&&next!==void 0){return next-1}else if(babelHelpers.typeof(item)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&null!==item.parent&&null!==item.parent&&null!==this._getItemById(item.parent)){return this._getLastChild(this._getItemById(item.parent))}else{return this.items.length-1}},_getIndent:function _getIndent(data,i){if(babelHelpers.typeof(data[i].parent)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){var k=data.findIndex(function(j){return j.id===data[i].parent});if(-1!==k&&babelHelpers.typeof(data[k])!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&data[k].indent!==void 0){return data[k].indent+1}}return 0},_getOrder:function _getOrder(item){var ctr=0,order=0;for(var i in this.items){if(this.items[i].parent==item.parent&&this.items[i].id==item.id){order=ctr}else if(this.items[i].parent==item.parent){ctr++}}return order},_getSibling:function _getSibling(index,indent,prev){var inc=prev?-1:1,i=index+inc,sib=null;if(null!==this.items){while(i<this.items.length&&-1<i){if(null===sib&&babelHelpers.typeof(this.items[i])!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&babelHelpers.typeof(this.items[index])!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&this.items[i].parent===this.items[index].parent){sib=i}i+=inc}}return sib},_getItemById:function _getItemById(id,offset){var i=this.items.findIndex(function(j){return j.id===id});offset=offset===void 0?0:offset;if(this.items[i+offset]!==void 0){return this.items[i+offset]}else{return null}},_handleAddItem:function _handleAddItem(e){this.addItem(e.detail)},_handleRemoveItem:function _handleRemoveItem(e){this.activeItem=e.detail.item;this.removeItem(e.detail.item)},_handleMoveItem:function _handleMoveItem(e){this.activeItem=e.detail.item;this.moveItem(e.detail.item,e.detail.moveUp,e.detail.byGroup)},_handleFocusItem:function _handleFocusItem(e){var item=e.detail.moveUp?e.detail.item.previousElementSibling:e.detail.item.nextElementSibling;item.setSelection()},_handleIndentItem:function _handleIndentItem(e){var amt=e.detail.increase?1:-1;this._adjustIndent(this._getItemById(e.detail.item.id),amt);this.setData(this.items)},_handleChangeItem:function _handleChangeItem(e){if(null!=this._getItemById(e.detail.item.id)){var i=this.items.findIndex(function(j){return j.id===e.detail.item.id});if(babelHelpers.typeof(this.items[i])!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){this.items[i].title=e.detail.value;this.notifyPath("items.".concat(i,".title"))}}}},babelHelpers.defineProperty(_Polymer,"_handleFocusItem",function _handleFocusItem(e){this.__focusedItem=e.srcElement}),babelHelpers.defineProperty(_Polymer,"_handleBlurItem",function _handleBlurItem(e){}),_Polymer));_exports.LrnsysOutline=LrnsysOutline});