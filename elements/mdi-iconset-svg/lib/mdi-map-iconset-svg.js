/**
 * Material design: [Icons](https://material.io/guidelines/style/icons.html)
 * `mdi-map-iconset-svg`
 * @customElement mdi-map-iconset-svg is a iconset for the Material Design Icons collection with the "map" tag
 *
 * Example:
 *   <iron-icon icon="mdi-map:map-marker"></iron-icon>
 *
 * @demo demo/index.html
 */
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";

import { html } from "@polymer/polymer/lib/utils/html-tag.js";

const template = html`
  <iron-iconset-svg name="mdi-map" size="24">
    <svg>
      <g id="crosshair">
        <path
          d="M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z"
        ></path>
      </g>

      <g id="crosshair-gps">
        <path
          d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M3.05,13H1V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1H13V3.05C17.17,3.5 20.5,6.83 20.95,11H23V13H20.95C20.5,17.17 17.17,20.5 13,20.95V23H11V20.95C6.83,20.5 3.5,17.17 3.05,13M12,5A7,7 0 0,0 5,12A7,7 0 0,0 12,19A7,7 0 0,0 19,12A7,7 0 0,0 12,5Z"
        ></path>
      </g>

      <g id="map">
        <path
          d="M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z"
        ></path>
      </g>

      <g id="map-marker">
        <path
          d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
        ></path>
      </g>

      <g id="map-marker-circle">
        <path
          d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,12.5A1.5,1.5 0 0,1 10.5,11A1.5,1.5 0 0,1 12,9.5A1.5,1.5 0 0,1 13.5,11A1.5,1.5 0 0,1 12,12.5M12,7.2C9.9,7.2 8.2,8.9 8.2,11C8.2,14 12,17.5 12,17.5C12,17.5 15.8,14 15.8,11C15.8,8.9 14.1,7.2 12,7.2Z"
        ></path>
      </g>

      <g id="map-marker-off">
        <path
          d="M16.37,16.1L11.75,11.47L11.64,11.36L3.27,3L2,4.27L5.18,7.45C5.06,7.95 5,8.46 5,9C5,14.25 12,22 12,22C12,22 13.67,20.15 15.37,17.65L18.73,21L20,19.72M12,6.5A2.5,2.5 0 0,1 14.5,9C14.5,9.73 14.17,10.39 13.67,10.85L17.3,14.5C18.28,12.62 19,10.68 19,9A7,7 0 0,0 12,2C10,2 8.24,2.82 6.96,4.14L10.15,7.33C10.61,6.82 11.26,6.5 12,6.5Z"
        ></path>
      </g>
    </svg>
  </iron-iconset-svg>
`;

document.head.appendChild(template.content);
