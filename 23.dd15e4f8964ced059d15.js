(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{202:function(e,t,s){},218:function(e,t,s){"use strict";var l=s(202);s.n(l).a},234:function(e,t,s){"use strict";s.r(t);var l={data:()=>({selectedType:void 0,selectedValue:void 0,food:{Vegetables:["Spinach","Carrots","Onions","Broccoli"],Meat:["Eggs","Chicken","Fish","Turkey","Pork","Beef"],Fruits:["Apples","Oranges","Bananas","Berries","Lemons"]}}),computed:{types(){return Object.keys(this.food)},options(){return this.selectedType?this.food[this.selectedType]:[]}}},o=(s(218),s(6)),c=Object(o.a)(l,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mcw-demo"},[s("div",{staticClass:"mcw-demo mcw-demo--container"},[s("div",[s("mcw-select",{attrs:{label:"Food",helptext:"Pick a food group"},model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}},e._l(e.types,function(t){return s("option",{key:t,domProps:{value:t}},[e._v("\n          "+e._s(t)+"\n        ")])}),0),e._v(" "),s("br"),e._v(" "),e.selectedType?s("mcw-select",{attrs:{outlined:"",label:"Kind"},model:{value:e.selectedValue,callback:function(t){e.selectedValue=t},expression:"selectedValue"}},e._l(e.options,function(t){return s("option",{key:t,domProps:{value:t.toLowerCase()}},[e._v(e._s(t))])}),0):e._e()],1)]),e._v(" "),e.selectedType?s("mcw-caption",{attrs:{tag:"p"}},[e._v("Selected Type: "+e._s(e.selectedType))]):e._e(),e._v(" "),e.selectedValue?s("mcw-caption",{attrs:{tag:"p"}},[e._v("Selected Value: "+e._s(e.selectedValue))]):e._e()],1)},[],!1,null,null,null);t.default=c.exports}}]);
//# sourceMappingURL=23.dd15e4f8964ced059d15.js.map