"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[396],{9396:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,o,i,a,s=t(2791),c=t(9434),u=t(3634),d=t(6916),l=function(n){return n.phonebook.isLoading},h=function(n){return n.phonebook.error},x=function(n){return n.phonebook.filter},p=(0,d.P1)([function(n){return n.phonebook.contacts},x],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),m=t(168),b=t(6444),f=b.ZP.ul(r||(r=(0,m.Z)(["\n padding: 0 30px;\n"]))),j=b.ZP.li(o||(o=(0,m.Z)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nwidth: 400px;\nmargin:  5px;\n"]))),g=(b.ZP.button,t(184)),v=function(){var n=(0,c.I0)(),e=(0,c.v9)(p),t=(0,c.v9)(l),r=(0,c.v9)(h),o=(0,c.v9)(x);(0,s.useEffect)((function(){n((0,u.xk)())}),[n]);return(0,g.jsxs)(f,{children:[(0,g.jsx)("h2",{children:"Contacts"}),t&&!r&&(0,g.jsx)("b",{children:"Request in progress..."}),0===e.length&&""===o&&(0,g.jsx)("b",{children:"Your phone book doesn't have any contacts"}),0===e.length&&""!==o?(0,g.jsx)("p",{children:"The contact with this name is not in your contact book."}):e.map((function(e){return(0,g.jsxs)(j,{children:[(0,g.jsxs)("p",{children:[e.name," : ",e.number]}),(0,g.jsx)("button",{onClick:function(){return t=e.id,n((0,u.GK)(t));var t},children:"Delete"})]},e.id)}))]})},k=t(1413),Z=t(5705),y=t(6727),w=t(5984),_=(0,b.ZP)(Z.gN)(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 300px;\n  box-sizing: border-box;\n  margin: 20px 0;\n  padding: 10px;\n  "]))),C=y.Ry().shape({name:y.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),number:y.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required")}),q=function(){var n=(0,c.I0)();return(0,g.jsx)(Z.J9,{initialValues:{name:"",number:""},validationSchema:C,onSubmit:function(e,t){var r;r=(0,k.Z)((0,k.Z)({},e),{},{id:(0,w.x0)()}),n((0,u.uK)(r)),t.resetForm()},children:(0,g.jsxs)(Z.l0,{children:[(0,g.jsxs)("label",{children:["Name",(0,g.jsx)(_,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,g.jsx)(Z.Bc,{name:"name",component:"span"})]}),(0,g.jsxs)("label",{children:["Number",(0,g.jsx)(_,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,g.jsx)(Z.Bc,{name:"number",component:"span"})]}),(0,g.jsx)("button",{type:"submit",children:"Add contact"})]})})},P=t(4669),A=b.ZP.input(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n"]))),T=function(){var n=(0,c.I0)(),e=(0,c.v9)(x);return(0,g.jsxs)("label",{children:[(0,g.jsx)("h3",{children:"Find contacts by name"}),(0,g.jsx)(A,{type:"text",value:e,onChange:function(e){n((0,P.Tv)(e.target.value))}})]})};function z(){var n=(0,c.I0)(),e=(0,c.v9)(l);return(0,s.useEffect)((function(){n((0,u.xk)())}),[n]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("title",{children:"Your tasks"}),(0,g.jsx)(q,{}),(0,g.jsx)(T,{}),(0,g.jsx)("div",{children:e&&"Request in progress..."}),(0,g.jsx)(v,{})]})}}}]);
//# sourceMappingURL=396.ae7c9be1.chunk.js.map