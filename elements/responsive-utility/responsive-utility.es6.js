import{html,Polymer}from"./node_modules/@polymer/polymer/polymer-legacy.js";import*as async from"./node_modules/@polymer/polymer/lib/utils/async.js";import{IronResizableBehavior}from"./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js";window.ResponsiveUtility={};window.ResponsiveUtility.instance=null;let ResponsiveUtility=Polymer({_template:html`
    <style>
      :host {
        display: inline;
      }
    </style>
    <slot></slot>
  `,is:"responsive-utility",behaviors:[IronResizableBehavior],listeners:{"iron-resize":"_onIronResize"},properties:{details:{type:Array,value:[]}},created:function(){let root=this;if(null==window.ResponsiveUtility.instance){window.ResponsiveUtility.instance=root}window.addEventListener("responsive-element",function(e){let detail={element:e.detail.element,attribute:e.detail.attribute!==void 0&&null!==e.detail.attribute?e.detail.attribute:"responsive-size",relativeToParent:e.detail.relativeToParent!==void 0&&null!==e.detail.relativeToParent?e.detail.relativeToParent:!0,xs:e.detail.xs!==void 0&&null!==e.detail.xs?e.detail.xs:600,sm:e.detail.sm!==void 0&&null!==e.detail.sm?e.detail.sm:900,md:e.detail.md!==void 0&&null!==e.detail.md?e.detail.md:1200,lg:e.detail.lg!==void 0&&null!==e.detail.lg?e.detail.lg:1500,xl:e.detail.xl!==void 0&&null!==e.detail.xl?e.detail.xl:1800};if("ResizeObserver"in window&&!0===detail.relativeToParent){let resize=new ResizeObserver(function(){window.ResponsiveUtility.setSize(detail)}),observable=e.detail.parentNode!==void 0&&null!==e.detail.parentNode?e.detail.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.detail.element.parentNode.host:e.detail.element.parentNode:e.detail.element;resize.observe(observable)}root.push("details",detail);window.ResponsiveUtility.setSize(detail)});window.addEventListener("delete-responsive-element",function(e){for(let i=0;i<this.details.length;i++){if(e.detail===detail[i])root.splice("details",i,1)}})},_onIronResize:function(){for(let i=0;i<this.details.length;i++){window.ResponsiveUtility.setSize(this.details[i])}}});window.ResponsiveUtility.requestAvailability=function(){if(null==window.ResponsiveUtility.instance){window.ResponsiveUtility.instance=document.createElement("responsive-utility")}document.body.appendChild(window.ResponsiveUtility.instance)};window.ResponsiveUtility.setSize=function(detail){let size,width=window.ResponsiveUtility._getWidth(detail);if(width<detail.sm){size="xs"}else if(width<detail.md){size="sm"}else if(width<detail.lg){size="md"}else if(width<detail.xl){size="lg"}else{size="xl"}if(detail.element.getAttribute(detail.attribute)===void 0||size!==detail.element.getAttribute(detail.attribute)){detail.element.setAttribute(detail.attribute,size)}};window.ResponsiveUtility._getWidth=function(detail){let el=detail.element;if(!0===detail.relativeToParent){if(el.offsetWidth!==void 0&&null!==el.offsetWidth&&0<el.offsetWidth){return el.offsetWidth}else if(null!==el.parentNode){return el.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?el.parentNode.host.offsetWidth:el.parentNode.offsetWidth}}return window.outerWidth};export{ResponsiveUtility};