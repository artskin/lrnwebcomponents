import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "./lib/lrndesign-animationctrl-button.js";
/**
`lrndesign-animationctrl`
A LRN element

@demo demo/index.html
*/
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        background: var(--animationctrl-bg-color);
        --animationctrl-bg-color: #f5f5f5;
      }
      .buttons {
        padding: 1em;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: stretch;
        @apply --animationctrl-buttons;
      }
      :host ::shadow lrndesign-animationctrl-button {
        display: flex;
      }
    </style>
    <div class="buttons">
      <slot></slot>
    </div>
`,

  is: "lrndesign-animationctrl",

  properties: {},

  listeners: {
    "lrndesign-animationctrl-button-click": "_buttonClicked"
  },

  _buttonClicked: function(e) {},

  ready: function() {}
});
