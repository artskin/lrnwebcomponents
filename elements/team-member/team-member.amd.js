define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js","./node_modules/@polymer/iron-image/iron-image.js","./node_modules/@polymer/paper-icon-button/paper-icon-button.js","./node_modules/@lrnwebcomponents/mdi-iconset-svg/lib/mdi-social-iconset-svg.js"],function(_exports,_polymerLegacy,_HAXWiring,_schemaBehaviors,_ironIconsetSvg,_ironImage,_paperIconButton,_mdiSocialIconsetSvg){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.TeamMember=void 0;function _templateObject_faf9cf5029d111e9810dab75f0dc3b7c(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style is=\"custom-style\">\n      :host {\n        display: block;\n        --team-member-circle: #1e407d;\n        --team-member-border: white;\n      }\n      .team-member {\n        text-align: center;\n        padding: 8px;\n      }\n      iron-image {\n        background-color: var(--team-member-color);\n        height: 165px;\n        width: 165px;\n        margin: 0 auto;\n        border: 7px solid var(--team-member-border);\n        border-radius: 50%;\n      }\n      .name {\n        text-transform: none;\n        font-size: 16px;\n      }\n      .line1 {\n        font-size: 12px;\n        margin: 0;\n        padding: 4px 0;\n        line-height: 22px;\n      }\n      .line2 {\n        font-size: 12px;\n        margin: 0;\n        padding: 4px 0;\n        line-height: 18px;\n      }\n      .social {\n        display: inline-block;\n        padding-left: 5px;\n        padding-right: 5px;\n      }\n      paper-icon-button {\n        color: var(--team-member-color);\n      }\n    </style>\n    <div class=\"team-member\">\n      <iron-image src=\"[[image]]\" sizing=\"cover\" alt=\"\"></iron-image>\n      <div class=\"name\">[[fullName]]</div>\n      <div hidden$=\"[[!firstLine]]\" class=\"line1\">[[firstLine]]</div>\n      <div hidden$=\"[[!secondLine]]\" class=\"line2\">[[secondLine]]</div>\n      <div class=\"social\">\n        <a tabindex=\"-1\" href$=\"[[dribble]]\" hidden$=\"[[!dribble]]\"\n          ><paper-icon-button icon=\"mdi-social:dribble\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href$=\"[[facebook]]\" hidden$=\"[[!facebook]]\"\n          ><paper-icon-button icon=\"mdi-social:facebook-box\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href$=\"[[github]]\" hidden$=\"[[!github]]\"\n          ><paper-icon-button\n            icon=\"mdi-social:github-circle\"\n          ></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href$=\"[[google]]\" hidden$=\"[[!google]]\"\n          ><paper-icon-button icon=\"mdi-social:google-plus\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href$=\"[[instagram]]\" hidden$=\"[[!instagram]]\"\n          ><paper-icon-button icon=\"mdi-social:instagram\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href$=\"[[linkedin]]\" hidden$=\"[[!linkedin]]\"\n          ><paper-icon-button icon=\"mdi-social:linkedin\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href$=\"[[pinterest]]\" hidden$=\"[[!pinterest]]\"\n          ><paper-icon-button icon=\"mdi-social:pinterest\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href$=\"[[tumblr]]\" hidden$=\"[[!tumblr]]\"\n          ><paper-icon-button icon=\"mdi-social:tumblr\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href$=\"[[twitch]]\" hidden$=\"[[!twitch]]\"\n          ><paper-icon-button icon=\"mdi-social:twitch\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href$=\"[[twitter]]\" hidden$=\"[[!twitter]]\"\n          ><paper-icon-button icon=\"mdi-social:twitter\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href$=\"[[whatsapp]]\" hidden$=\"[[!whatsapp]]\"\n          ><paper-icon-button icon=\"mdi-social:whatsapp\"></paper-icon-button\n        ></a>\n      </div>\n    </div>\n  "],["\n    <style is=\"custom-style\">\n      :host {\n        display: block;\n        --team-member-circle: #1e407d;\n        --team-member-border: white;\n      }\n      .team-member {\n        text-align: center;\n        padding: 8px;\n      }\n      iron-image {\n        background-color: var(--team-member-color);\n        height: 165px;\n        width: 165px;\n        margin: 0 auto;\n        border: 7px solid var(--team-member-border);\n        border-radius: 50%;\n      }\n      .name {\n        text-transform: none;\n        font-size: 16px;\n      }\n      .line1 {\n        font-size: 12px;\n        margin: 0;\n        padding: 4px 0;\n        line-height: 22px;\n      }\n      .line2 {\n        font-size: 12px;\n        margin: 0;\n        padding: 4px 0;\n        line-height: 18px;\n      }\n      .social {\n        display: inline-block;\n        padding-left: 5px;\n        padding-right: 5px;\n      }\n      paper-icon-button {\n        color: var(--team-member-color);\n      }\n    </style>\n    <div class=\"team-member\">\n      <iron-image src=\"[[image]]\" sizing=\"cover\" alt=\"\"></iron-image>\n      <div class=\"name\">[[fullName]]</div>\n      <div hidden\\$=\"[[!firstLine]]\" class=\"line1\">[[firstLine]]</div>\n      <div hidden\\$=\"[[!secondLine]]\" class=\"line2\">[[secondLine]]</div>\n      <div class=\"social\">\n        <a tabindex=\"-1\" href\\$=\"[[dribble]]\" hidden\\$=\"[[!dribble]]\"\n          ><paper-icon-button icon=\"mdi-social:dribble\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href\\$=\"[[facebook]]\" hidden\\$=\"[[!facebook]]\"\n          ><paper-icon-button icon=\"mdi-social:facebook-box\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href\\$=\"[[github]]\" hidden\\$=\"[[!github]]\"\n          ><paper-icon-button\n            icon=\"mdi-social:github-circle\"\n          ></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href\\$=\"[[google]]\" hidden\\$=\"[[!google]]\"\n          ><paper-icon-button icon=\"mdi-social:google-plus\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href\\$=\"[[instagram]]\" hidden\\$=\"[[!instagram]]\"\n          ><paper-icon-button icon=\"mdi-social:instagram\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href\\$=\"[[linkedin]]\" hidden\\$=\"[[!linkedin]]\"\n          ><paper-icon-button icon=\"mdi-social:linkedin\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href\\$=\"[[pinterest]]\" hidden\\$=\"[[!pinterest]]\"\n          ><paper-icon-button icon=\"mdi-social:pinterest\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href\\$=\"[[tumblr]]\" hidden\\$=\"[[!tumblr]]\"\n          ><paper-icon-button icon=\"mdi-social:tumblr\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href\\$=\"[[twitch]]\" hidden\\$=\"[[!twitch]]\"\n          ><paper-icon-button icon=\"mdi-social:twitch\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href\\$=\"[[twitter]]\" hidden\\$=\"[[!twitter]]\"\n          ><paper-icon-button icon=\"mdi-social:twitter\"></paper-icon-button\n        ></a>\n        <a tabindex=\"-1\" href\\$=\"[[whatsapp]]\" hidden\\$=\"[[!whatsapp]]\"\n          ><paper-icon-button icon=\"mdi-social:whatsapp\"></paper-icon-button\n        ></a>\n      </div>\n    </div>\n  "]);_templateObject_faf9cf5029d111e9810dab75f0dc3b7c=function _templateObject_faf9cf5029d111e9810dab75f0dc3b7c(){return data};return data}var TeamMember=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_faf9cf5029d111e9810dab75f0dc3b7c()),is:"team-member",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema],properties:{image:{type:String},fullName:{type:String},firstLine:{type:String,value:!1},secondLine:{type:String,value:!1},dribble:{type:String,value:!1},facebook:{type:String,value:!1},github:{type:String,value:!1},google:{type:String,value:!1},instagram:{type:String,value:!1},linkedin:{type:String,value:!1},pinterest:{type:String,value:!1},tumblr:{type:String,value:!1},twitch:{type:String,value:!1},twitter:{type:String,value:!1},whatsapp:{type:String,value:!1}},attached:function attached(){var props={canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Sample gizmo",description:"The user will be able to see this for selection in a UI.",icon:"av:play-circle-filled",color:"grey",groups:["Video","Media"],handles:[{type:"video",url:"source"}],meta:{author:"Your organization on github"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}};this.setHaxProperties(props)}});_exports.TeamMember=TeamMember});