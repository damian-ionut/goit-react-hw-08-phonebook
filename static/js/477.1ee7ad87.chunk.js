"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[477],{2477:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var a=n(4420),r=n(3634),c={form:"ContactForm_form__dhl+T",inputWrapper:"ContactForm_inputWrapper__9zhfJ",formInput:"ContactForm_formInput__GszVU",formLabel:"ContactForm_formLabel__TSwxK"},s=n(3329),o=function(){var t=(0,a.I0)();return(0,s.jsxs)("form",{className:c.form,onSubmit:function(e){e.preventDefault();var n=e.currentTarget;t((0,r.uK)({name:n.elements.name.value,number:n.elements.number.value})),n.reset()},autoComplete:"off",children:[(0,s.jsxs)("div",{className:c.inputWrapper,children:[(0,s.jsx)("input",{className:c.formInput,type:"text",name:"name",placeholder:" "}),(0,s.jsx)("label",{className:c.formLabel,children:"Name"})]}),(0,s.jsxs)("div",{className:c.inputWrapper,children:[(0,s.jsx)("input",{className:c.formInput,type:"tel",name:"number",placeholder:" "}),(0,s.jsx)("label",{className:c.formLabel,children:"Number"})]}),(0,s.jsx)("button",{className:c.addContactBtn,type:"submit",children:"Add contact"})]})},l=n(2791),i=function(t){return t.contacts.items},u=function(t){return t.filter},m=function(t){return t.contacts.isLoading},f=function(t){return t.contacts.error},d="ContactList_contactListContainer__Mco5m",p="ContactList_contactList__UFVCg",x="ContactList_contactItem__ppNQ5",_="ContactList_contactText__mBjoQ",h="ContactList_contactListBtn__iwQAv",b=function(){var t=(0,a.I0)(),e=(0,a.v9)(i),n=(0,a.v9)(u).toLowerCase(),c=e.filter((function(t){return t.name.toLowerCase().includes(n)}));return(0,l.useEffect)((function(){t((0,r.yF)())}),[t]),(0,s.jsx)("div",{className:d,children:(0,s.jsx)("ul",{className:p,children:c.map((function(e){var n=e.id,a=e.name,c=e.number;return(0,s.jsxs)("li",{className:x,children:[(0,s.jsxs)("p",{className:_,children:[a,": ",c]}),(0,s.jsx)("button",{className:h,type:"button",onClick:function(){return t((0,r.GK)(n))},children:"Delete"})]},n)}))})})},v={filterContainer:"Filter_filterContainer__8G57N",label:"Filter_label__vEd1E"},j=n(1634);function C(){var t=(0,a.I0)(),e=(0,a.v9)(u);return(0,s.jsx)("div",{className:v.filterContainer,children:(0,s.jsx)("label",{className:v.label,children:(0,s.jsx)("input",{className:v.contactInput,type:"text",value:e,onChange:function(e){t((0,j.T)(e.target.value))},placeholder:"Find contacts by name"})})})}function y(){var t=(0,a.I0)(),e=(0,a.v9)(m),n=(0,a.v9)(f);return(0,l.useEffect)((function(){t((0,r.yF)())}),[t]),(0,l.useEffect)((function(){var t=document.getElementById("contacts-container");t&&(t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="center",t.style.backgroundColor="#fff",t.style.borderRadius="10px",t.style.padding="20px",t.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)",t.style.margin="20px auto",t.style.width="25%")}),[]),(0,s.jsxs)("div",{id:"contacts-container",children:[(0,s.jsx)("h2",{style:{textAlign:"center",marginBottom:"20px"},children:"Contacts"}),(0,s.jsx)(o,{}),(0,s.jsx)(C,{}),e&&!n&&(0,s.jsx)("p",{children:"Loading..."}),n&&(0,s.jsxs)("p",{children:["Error: ",n]}),(0,s.jsx)(b,{})]})}}}]);
//# sourceMappingURL=477.1ee7ad87.chunk.js.map