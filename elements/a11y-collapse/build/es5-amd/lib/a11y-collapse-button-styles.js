var $_documentContainer = document.createElement("div");
$_documentContainer.setAttribute("style", "display: none;");
$_documentContainer.innerHTML =
  '<dom-module id="a11y-collapse-button-styles">\n    <template>\n      <custom-style>\n        <style is="custom-style">\n            :host #heading {\n                display: flex;\n                justify-content: stretch;\n                align-items: center;\n                padding: 0em var(--a11y-collapse-horizontal-padding, 1em);\n                font-weight: bold;\n                @apply --a11y-collapse-heading;\n            }\n            :host #text {\n                flex-grow: 1;\n                @apply --a11y-collapse-heading-text;\n            }\n            :host #expand {\n                transition: transform 0.5s;\n                @apply --a11y-collapse-icon;\n            }\n            :host #expand[rotated] {\n                transform: rotate(-90deg);\n                @apply --a11y-collapse-icon-rotated;\n            }\n            :host [aria-controls] {\n                cursor: pointer;\n            }\n            :host[disabled] [aria-controls] {\n                cursor: not-allowed;\n            }\n            :host[expanded] #heading {\n                @apply --a11y-collapse-heading-expanded;\n            }\n            :host[expanded] #text {\n                @apply --a11y-collapse-heading-text-expanded;\n            }\n            :host[expanded] #expand {\n                @apply --a11y-collapse-icon-expanded;\n            }\n        </style>\n      </custom-style>\n    </template>\n  </dom-module>';
document.head.appendChild($_documentContainer);