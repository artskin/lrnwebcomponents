import "@polymer/polymer/polymer.js";
import "iron-data-table/iron-data-table.js";
import "@polymer/iron-ajax/iron-ajax.js";
const $_documentContainer = document.createElement("div");
$_documentContainer.setAttribute("style", "display: none;");

$_documentContainer.innerHTML = `<dom-module id="lrn-gradebook">
<style>
  data-table-row {
    border: 10px solid black;
  }
</style>
  <template>
    <iron-ajax url="demo/data.json" last-response="{{data}}" auto=""></iron-ajax>
		  <iron-data-table items="[[data]]">
		    <data-table-column name="First Name">
		      <template>[[item.name.first]]</template>
		    </data-table-column>
		    <data-table-column name="Last Name">
		      <template>[[item.name.last]]</template>
		    </data-table-column>
		  </iron-data-table>
  </template>

  
</dom-module>`;

document.head.appendChild($_documentContainer);
/**
`lrn-gradebook`
A LRN element

@demo demo/index.html 
*/
Polymer({
  is: "lrn-gradebook",
  properties: {
    data: {
      type: Object
    }
  }
});