(function(e){function t(t){for(var l,c,r=t[0],d=t[1],u=t[2],m=0,p=[];m<r.length;m++)c=r[m],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(l in d)Object.prototype.hasOwnProperty.call(d,l)&&(e[l]=d[l]);a&&a(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],l=!0,r=1;r<n.length;r++){var d=n[r];0!==o[d]&&(l=!1)}l&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var l={},o={app:0},i=[];function c(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=l,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)c.d(n,l,function(t){return e[t]}.bind(null,l));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var a=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var l=n("7a23");function o(e,t,n,o,i,c){var r=Object(l["i"])("employee-form"),d=Object(l["i"])("Lesson_6");return Object(l["g"])(),Object(l["d"])(l["a"],null,[Object(l["f"])(r,{"onAdd:EmployeeBtn":c.addEmployee,employeeForEdit:i.employeeForEditInApp,isEdit:i.isEditInApp,"onEditInForm:Employee":c.EditInApp,onCancle:c.cancleBth},null,8,["onAdd:EmployeeBtn","employeeForEdit","isEdit","onEditInForm:Employee","onCancle"]),Object(l["f"])(d,{employees:i.employeesInApp,"onDelete:employeeBtn":c.deleteEmployee,"onSend:Employee":c.SendToForm},null,8,["employees","onDelete:employeeBtn","onSend:Employee"])],64)}var i=n("1da1"),c=(n("96cf"),n("d3b7"),n("b0c0"),n("4de4"),n("159b"),Object(l["e"])("h1",null,"hello",-1)),r={border:"1"},d=Object(l["e"])("thead",null,[Object(l["e"])("th",null,"Id"),Object(l["e"])("th",null,"employee name"),Object(l["e"])("th",null,"employee email"),Object(l["e"])("th",{width:"50"},"edit"),Object(l["e"])("th",null,"delete")],-1),u=["id","onUpdate:modelValue"],a=["id","onUpdate:modelValue"],m=["id","onClick"],p=["id","onClick"],b=["id","onClick"];function s(e,t,n,o,i,s){var y=Object(l["i"])("center");return Object(l["g"])(),Object(l["d"])("div",null,[c,Object(l["f"])(y,null,{default:Object(l["l"])((function(){return[Object(l["e"])("table",r,[d,Object(l["e"])("tbody",null,[(Object(l["g"])(!0),Object(l["d"])(l["a"],null,Object(l["h"])(n.employees,(function(t){return Object(l["g"])(),Object(l["d"])("tr",{key:t.id},[Object(l["e"])("td",null,Object(l["j"])(t[0].id),1),Object(l["e"])("td",null,[Object(l["m"])(Object(l["e"])("input",{type:"text",id:"name"+t.id,disabled:"","onUpdate:modelValue":function(e){return t.name=e}},null,8,u),[[l["k"],t.name]])]),Object(l["e"])("td",null,[Object(l["m"])(Object(l["e"])("input",{type:"text",id:"email"+t.id,disabled:"","onUpdate:modelValue":function(e){return t.email=e}},null,8,a),[[l["k"],t.email]])]),Object(l["e"])("td",null,[Object(l["f"])(y,null,{default:Object(l["l"])((function(){return[Object(l["e"])("button",{id:"EditBtn"+t.id,onClick:function(e){return s.sendEmployeeToEdit(t)}},"edit",8,m)]})),_:2},1024)]),Object(l["e"])("td",null,[Object(l["f"])(y,null,{default:Object(l["l"])((function(){return[e.editModeId!=t.id?(Object(l["g"])(),Object(l["d"])("button",{key:0,id:"DeleteBtn"+t.id,onClick:function(n){return e.$emit("delete:employeeBtn",t)}},"delete",8,p)):Object(l["c"])("",!0),e.editModeId==t.id?(Object(l["g"])(),Object(l["d"])("button",{key:1,id:"CancleBtn"+t.id,onClick:function(n){return e.cancleSave(t.id)}},"Cancle",8,b)):Object(l["c"])("",!0)]})),_:2},1024)])])})),128))])])]})),_:1})])}var y={name:"Lesson_6",props:{employees:Array},data:function(){return{editModeId:!1}},methods:{sendEmployeeToEdit:function(e){this.$emit("send:Employee",e)}}},f=n("6b0d"),j=n.n(f);const O=j()(y,[["render",s]]);var E=O,h=Object(l["e"])("div",{id:"employee-form"},null,-1),v=Object(l["e"])("h1",null,"form",-1),I=Object(l["e"])("label",null,"Employee name",-1),g=Object(l["e"])("br",null,null,-1),k=Object(l["e"])("br",null,null,-1),B=Object(l["e"])("label",null,"Employee email",-1),A=Object(l["e"])("br",null,null,-1),F=Object(l["e"])("br",null,null,-1),w=Object(l["e"])("button",null,"Add Employee",-1),x=Object(l["e"])("label",null,"Employee name",-1),C=Object(l["e"])("br",null,null,-1),S=["value"],_=Object(l["e"])("br",null,null,-1),M=Object(l["e"])("label",null,"Employee email",-1),P=Object(l["e"])("br",null,null,-1),T=["value"],N=Object(l["e"])("br",null,null,-1);function U(e,t,n,o,i,c){return Object(l["g"])(),Object(l["d"])(l["a"],null,[h,v,n.isEdit?Object(l["c"])("",!0):(Object(l["g"])(),Object(l["d"])("form",{key:0,onSubmit:t[2]||(t[2]=Object(l["n"])((function(){return c.addEmployeeBtn&&c.addEmployeeBtn.apply(c,arguments)}),["prevent"]))},[I,g,Object(l["m"])(Object(l["e"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.employee.name=t}),type:"text"},null,512),[[l["k"],e.employee.name]]),k,B,A,Object(l["m"])(Object(l["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.employee.email=t}),type:"text"},null,512),[[l["k"],e.employee.email]]),F,w],32)),n.isEdit?(Object(l["g"])(),Object(l["d"])("form",{key:1,onSubmit:t[5]||(t[5]=Object(l["n"])((function(){}),["prevent"]))},[x,C,Object(l["e"])("input",{id:"EditName",value:n.employeeForEdit.name,type:"text"},null,8,S),_,M,P,Object(l["e"])("input",{id:"EditEmail",value:n.employeeForEdit.email,type:"text"},null,8,T),N,Object(l["e"])("button",{onClick:t[3]||(t[3]=function(e){return c.EditEmployeeBtn()})},"save"),Object(l["e"])("button",{onClick:t[4]||(t[4]=function(e){return c.cancleBtn()})},"cancle")],32)):Object(l["c"])("",!0)],64)}var V={name:"employee-form",props:{employeeForEdit:Object,isEdit:Boolean},data:function(){return{employee:{name:"",email:""},forEdit:{name:this.employeeForEdit.name,email:this.employeeForEdit.email}}},methods:{addEmployeeBtn:function(){this.$emit("add:EmployeeBtn",this.employee),this.employee.name="",this.employee.email=""},EditEmployeeBtn:function(){var e={id:this.employeeForEdit.id,name:document.getElementById("EditName").value,email:document.getElementById("EditEmail").value};this.$emit("editInForm:Employee",e),document.getElementById("EditName").value="",document.getElementById("EditEmail").value=""},cancleBtn:function(){document.getElementById("EditName").value="",document.getElementById("EditEmail").value="",this.$emit("cancle")}}};const $=j()(V,[["render",U]]);var D=$,L={name:"App",components:{Lesson_6:E,EmployeeForm:D},data:function(){return{employeesInApp:[{id:1,name:"Richard Hendricks",email:"richard@email.com"},{id:2,name:"Bertram Gilfoyle",email:"berram@email.com"},{id:3,name:"Kittisak Thamwattana",email:"kittisak@email.com"}],employeeForEditInApp:{},isEditInApp:!1}},mounted:function(){this.getEmployees()},methods:{getEmployees:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:3000/parking");case 3:return n=t.sent,t.next=6,n.json();case 6:l=t.sent,e.employeesInApp=l,console.log(l),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log("Error");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},addEmployee:function(e){var t={id:this.findNewId(this.employeesInApp),name:e.name,email:e.email};this.employeesInApp.push(t)},deleteEmployee:function(e){this.employeesInApp=this.employeesInApp.filter((function(t){return t.id!==e.id}))},findNewId:function(e){var t=0;return e.forEach((function(e){e.id>t&&(t=e.id)})),t+1},SendToForm:function(e){this.employeeForEditInApp.id=e.id,this.employeeForEditInApp.name=e.name,this.employeeForEditInApp.email=e.email,this.isEditInApp=!0},EditInApp:function(e){this.employeesInApp.forEach((function(t){t.id==e.id&&(t.name=e.name,t.email=e.email)})),this.isEditInApp=!1},cancleBth:function(){this.isEditInApp=!1}}};n("e960");const R=j()(L,[["render",o]]);var J=R;Object(l["b"])(J).mount("#app")},"64e7":function(e,t,n){},e960:function(e,t,n){"use strict";n("64e7")}});
//# sourceMappingURL=app.d472a3a0.js.map