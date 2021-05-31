(this["webpackJsonpmarkdown-editor"]=this["webpackJsonpmarkdown-editor"]||[]).push([[0],{37:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(19),i=c.n(a),r=c(17),l=c(20),j=c(8),d=c(22),b=c(13),o=c(28),x=c(40),h=c(2),O=function(){return Object(h.jsx)(b.a,{fluid:"true",children:Object(h.jsxs)(d.a,{variant:"dark",expand:"lg",className:"Navbar",children:[Object(h.jsxs)(d.a.Brand,{children:[Object(h.jsx)(x.a,{className:"mr-2"}),Object(h.jsx)(l.b,{to:"/",className:"text-light",children:"Markdown Editor"})]}),Object(h.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(o.a,{className:"mr-auto",children:[Object(h.jsx)(o.a.Link,{children:Object(h.jsx)(l.b,{to:"/",className:"text-light",children:"Home"})}),Object(h.jsx)(o.a.Link,{children:Object(h.jsx)(l.b,{to:"/about",className:"text-light",children:"About"})})]})})]})})},m=c(44),u=c(21),p=c(35),f=c(24),w=function(e){var t="Editor"===e.title?Object(h.jsx)(f.b,{className:"mr-2 ml-2"}):Object(h.jsx)(f.a,{className:"mr-2 ml-2"});return Object(h.jsxs)(b.a,{fluid:"true",className:"head text-white",children:[t,e.title]})},g=function(e){return Object(h.jsxs)("div",{id:"editor",children:[Object(h.jsx)(w,{title:"Editor"}),Object(h.jsx)(p.a,{className:"d-flex flex-column",children:Object(h.jsx)(p.a.Control,{as:"textarea",id:"form-editor",className:"text-white",onChange:function(t){return e.handleChange(t)},value:e.editorText})})]})},v=c(42),N=c.n(v),T=c(43),k=c.n(T),y=function(e){var t=Object(n.useState)(""),c=Object(r.a)(t,2),s=c[0],a=c[1];return Object(n.useEffect)((function(){a(N()(k.a.sanitize(e.previewText)))}),[e.previewText]),Object(h.jsxs)("div",{id:"previewer",children:[Object(h.jsx)(w,{title:"Previewer",id:"previewer"}),Object(h.jsx)(b.a,{className:"text-white form-control overflow-auto",id:"form-previewer",dangerouslySetInnerHTML:{__html:s},fluid:!0})]})},C=function(){return Object(h.jsx)(b.a,{fluid:!0,className:"fixed-bottom d-flex justify-content-center align-items-center",id:"container-footer",children:Object(h.jsx)("p",{className:"text-light text-center font-weight-light",children:"Created by Sean Mitchell"})})},_=function(e){return Object(h.jsxs)(b.a,{fluid:"true",className:"d-flex flex-column flex-grow",children:[Object(h.jsxs)(m.a,{noGutters:"true",xs:1,sm:1,md:1,lg:2,xl:2,children:[Object(h.jsx)(u.a,{children:Object(h.jsx)(g,{handleChange:e.handleChange,editorText:e.text})}),Object(h.jsx)(u.a,{children:Object(h.jsx)(y,{previewText:e.text})})]}),Object(h.jsx)(C,{})]})},I=c(45),S=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),i=Object(r.a)(a,2),l=i[0],j=i[1],d=Object(n.useState)(null),o=Object(r.a)(d,2),x=o[0],O=o[1];return Object(n.useEffect)((function(){fetch("https://api.github.com/users/slimsloth").then((function(e){return e.json()})).then(s).then((function(){return j(!1)})).catch(O)}),[]),l?Object(h.jsx)("h1",{children:"Loading data..."}):x?Object(h.jsx)("pre",{children:JSON.stringify(x,null,2)}):c?Object(h.jsxs)(b.a,{children:[Object(h.jsx)("h1",{className:"display-4 text-center",children:"Real-Time Markdown Previewer"}),Object(h.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(h.jsx)(I.a,{alt:c.login,src:c.avatar_url,roundedCircle:!0,className:"align-self-center"}),Object(h.jsx)("p",{className:"lead",children:"Created by Sean Mitchell"})]}),Object(h.jsx)("p",{className:"text-center font-weight-lighter",children:"Simply type your markdown into the editor window. The preview window will automatically display your markdown in real-time."}),Object(h.jsx)("h1",{children:"Syntax Guide"}),Object(h.jsx)("h3",{children:"Headers"}),Object(h.jsx)("div",{className:"code-example",children:Object(h.jsxs)("code",{className:"text-white",children:["# This is an <h1> tag",Object(h.jsx)("br",{}),"## This is an <h2> tag",Object(h.jsx)("br",{}),"###### This is an <h6> tag",Object(h.jsx)("br",{})]})}),Object(h.jsx)("h3",{children:"Emphasis"}),Object(h.jsx)("div",{className:"code-example",children:Object(h.jsxs)("code",{className:"text-white",children:["*This text will be italic*",Object(h.jsx)("br",{}),"_This will also be italic_",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"**This text will be bold**",Object(h.jsx)("br",{}),"__This will also be bold__",Object(h.jsx)("br",{}),"_You **can** combine them_",Object(h.jsx)("br",{})]})}),Object(h.jsx)("h3",{children:"Lists"}),Object(h.jsx)("h4",{children:"Unordered"}),Object(h.jsx)("div",{className:"code-example",children:Object(h.jsxs)("code",{className:"text-white",children:["* Item 1 ",Object(h.jsx)("br",{}),"* Item 2 ",Object(h.jsx)("br",{}),"\u2003* Item 2a ",Object(h.jsx)("br",{}),"\u2003* Item 2b ",Object(h.jsx)("br",{})]})}),Object(h.jsx)("h4",{children:"Ordered"}),Object(h.jsx)("div",{className:"code-example",children:Object(h.jsxs)("code",{className:"text-white",children:["1. Item 1 1. Item 2 ",Object(h.jsx)("br",{}),"1. Item 3 ",Object(h.jsx)("br",{}),"\u20031. Item 3a ",Object(h.jsx)("br",{}),"\u20031. Item 3b ",Object(h.jsx)("br",{})]})}),Object(h.jsx)("h3",{children:"Images"}),Object(h.jsx)("div",{className:"code-example",children:Object(h.jsxs)("code",{className:"text-white",children:["![GitHub Logo](/images/logo.png)",Object(h.jsx)("br",{})," Format: ![Alt Text](url)"]})}),Object(h.jsx)("h3",{children:"Links"}),Object(h.jsx)("div",{className:"code-example",children:Object(h.jsxs)("code",{className:"text-white",children:["http://github.com - automatic! ",Object(h.jsx)("br",{}),"[GitHub](http://github.com)"]})}),Object(h.jsx)("h3",{children:"Blockquotes"}),Object(h.jsx)("div",{className:"code-example",children:Object(h.jsxs)("code",{className:"text-white",children:["As Kanye West said: ",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"> We're living the future so ",Object(h.jsx)("br",{}),"> the present is our past."]})}),Object(h.jsx)("h3",{children:"Inline code"}),Object(h.jsx)("div",{className:"code-example",children:Object(h.jsxs)("code",{className:"text-white",children:["I think you should use an ",Object(h.jsx)("br",{}),"`<addr>` element here instead."]})})]}):null},H=function(){return Object(h.jsx)(b.a,{children:Object(h.jsxs)("div",{className:"border page-not-found d-flex flex-column justify-content-center align-items-center",children:[Object(h.jsx)("h1",{className:"display-1 ",children:"404"}),Object(h.jsx)("p",{className:"",children:"Page not found!"})]})})};c(37);var R="# Real-time Markdown Previewer\n\n## This is an h2 heading\n### This is an h3 heading\n\nYou can insert code `<div></div>` with 2 backticks.\n\n```\n// This is a code block:\n\nfunction beepBoop(beep) {\n  if (beep) {\n    return boop;\n  }\n}\n```\n\nYou can insert **bold** text\nor _italic_ text.\nYou can even do **_bold and italic text_**.\nThis is an example of ~~strike through text~~.\n\nHere is an example of a [link](https://www.reddit.com/r/TVTooHigh/), and\n> Block Quotes!\n\nHere is an example of a table:\n\nHeader 1 | Header 2 | Header 3\n------------ | ------------- | -------------\nRow content | Row Content | Row Content\nRow Content | Row Content | Row Content\n\n- Here is a list.\n  - You can\n     - Keep indenting\n        - The list.\n\n\n1. This is\n1. a numbered\n1. list.\n\nAnd lastly, here is an example of an embedded picture:\n![hide the pain](https://i.imgur.com/iojvSeD.jpg)",E=function(){var e=Object(n.useState)(R),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(h.jsxs)(l.a,{children:[Object(h.jsx)(O,{}),Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{exact:!0,path:"/",children:Object(h.jsx)(_,{handleChange:function(e){s(e.target.value)},text:c,className:"home-page"})}),Object(h.jsx)(j.a,{path:"/about",children:Object(h.jsx)(S,{})}),Object(h.jsx)(j.a,{children:Object(h.jsx)(H,{})})]})]})};c(57);i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.3c26964b.chunk.js.map