(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){},21:function(e,a,t){e.exports=t(47)},28:function(e,a,t){},30:function(e,a,t){},33:function(e,a,t){},37:function(e,a,t){},39:function(e,a,t){},41:function(e,a,t){},43:function(e,a,t){},45:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),s=t(19),r=t.n(s),c=t(3),i=(t(28),t(4)),m=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large","btn--large1"],u=function(e){var a=e.children,t=e.type,l=e.onClick,s=e.buttonStyle,r=e.buttonSize,c=m.includes(s)?s:m[0],u=o.includes(r)?r:o[0];return n.a.createElement(i.b,{to:"/resume-pdf",className:"btn-mobile"},n.a.createElement("button",{className:"btn ".concat(c," ").concat(u),onClick:l,type:t},a))};t(30);var d=function(){var e=Object(l.useState)(!1),a=Object(c.a)(e,2),t=a[0],s=a[1],r=Object(l.useState)(!0),m=Object(c.a)(r,2),o=m[0],d=m[1],E=function(){return s(!1)},g=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(l.useEffect)(function(){g()},[]),window.addEventListener("resize",g),window.onscroll=function(){console.log(window.innerHeight+window.scrollY)},n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{id:"navbar"},n.a.createElement("div",{className:"navbar-container"},n.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:E},"BF"),n.a.createElement("div",{className:"menu-icon",onClick:function(){return s(!t)}},n.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),n.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},n.a.createElement("li",null,n.a.createElement(i.b,{to:"/resume-pdf",className:"nav-links-mobile",onClick:E},"Resume"))),o&&n.a.createElement(u,{buttonStyle:"btn--outline"},"Resume"))))};t(8),t(33),t(35);var E=function(){return Object(l.useEffect)(function(){var e=document.getElementById("star-field"),a=window.innerWidth+10,t=.55*window.innerHeight;document.getElementById("name"),function(e,a,t,l){for(var n=document.createDocumentFragment(),s=0;s<l;s+=3){var r=document.createElement("div");r.className="star";var c=Math.floor(Math.random()*t+1),i=Math.floor(Math.random()*a+1);r.style.top=c+"px",r.style.left=i+"px",r.style.position="absolute",n.appendChild(r)}e.appendChild(n)}(e,a,t,a<960?70:200),function(e,a,t){var l=e.childNodes;function n(e,l){var n;e.className="star "+((n=l)%8===0?"red":n%10===0?"yellow":n%17===0?"blue":"white")+" "+function(e){return e%6===0?"":e%9===0?"near":e%2===0?"far":0}(l);var s=parseInt(e.style.left,10),r=parseInt(e.style.top,10),c=t+function(e){return e%6===0?1:e%9===0?2:e%2===0?-1:0}(l),i=(s-c+a)%a,m=function(e){return Math.sin(e)}(l),o=r+m;o<0?(e.style.top=window.innerHeight+20*Math.random()+"px",e.style.left=Math.floor(Math.random()*a)+"px"):(e.style.left=i+"px",e.style.top=o+"px")}!function e(){for(var a=1;a<l.length;a++)n(l[a],a);requestAnimationFrame(e)}()}(e,a,-1)},[]),n.a.createElement("div",{id:"star-field"},n.a.createElement("h1",{id:"name"},"Hello I'm Brian"))};t(18);var g=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"cards__item"},n.a.createElement(i.b,{className:"cards__item__link",to:e.path,target:"blank"},n.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},n.a.createElement("img",{className:"cards__item__img",alt:"Project Image",src:e.src})),n.a.createElement("div",{className:"cards__item__info"},n.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var p=function(){return n.a.createElement("div",{className:"cards"},n.a.createElement("h1",null,"Projects I've worked on"),n.a.createElement("div",{className:"cards__container"},n.a.createElement("div",{className:"cards__wrapper"},n.a.createElement("ul",{className:"cards__items"},n.a.createElement(g,{src:"images/AVL.jpg",text:"UF student info AVL tree",label:"C++",path:"https://github.com/BrianBFarias/Gator-AVL-Tree"}),n.a.createElement(g,{src:"images/Schedule.jpg",text:"Schedule Chomper",label:"C++/SFML/Python",path:"https://github.com/BrianBFarias/Schedule-Chomper"}),n.a.createElement(g,{src:"images/Auction.png",text:"ecommerce website",label:"HTML/CSS/Python/SQL",path:"https://github.com/BrianBFarias/ecommerce-website.git"})),n.a.createElement("ul",{className:"cards__items"},n.a.createElement(g,{src:"images/network.png",text:"Linker: Networking site",label:"Python/Javscript/HTML/CSS",path:"https://github.com/BrianBFarias/linker"}),n.a.createElement(g,{src:"images/Pakudex.jpg",text:"Pakudex: Pokemon holder",label:"Java",path:"https://github.com/BrianBFarias/Pakudex"}),n.a.createElement(g,{src:"images/Mail.jpg",text:"Mail with Mail API",label:"CSS/HTML/Javscript",path:"https://github.com/BrianBFarias/Mail-API"}),n.a.createElement(g,{src:"images/PageRank.jpg",text:"Simplified PageRank Algorithm",label:"C++",path:"https://github.com/BrianBFarias/PageRank-Algorithm"})))))},f=(t(37),t(20));t(39);function b(){var e=Object(l.useRef)();return n.a.createElement("form",{ref:e,onSubmit:function(a){a.preventDefault(),f.a.sendForm("service_8nvr5g4","website_template",e.current,"SHVR7fKbB9AkOyMWz").then(function(e){console.log(e.text)},function(e){console.log(e.text)}),e.current.reset()}},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",id:"user_name",name:"user_name",placeholder:"Name"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",id:"user_email",name:"user_email",placeholder:"Email"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{id:"message",name:"message",placeholder:"Type message"})),n.a.createElement("button",{className:"btn-send",type:"submit"},"Send"))}var h=function(){return/Mobi/.test(navigator.userAgent)?n.a.createElement("div",{className:"mobile-footer-container"},n.a.createElement("section",{className:"mobile-footer-subscription"},n.a.createElement("p",{className:"mobile-heading"},"Contact me"),n.a.createElement("div",{className:"mobile-container"},n.a.createElement(b,null))),n.a.createElement("div",{class:"mobile-footer-links"}),n.a.createElement("section",{class:"mobile-social-media"},n.a.createElement("div",{class:"mobile-media-wrap"},n.a.createElement("div",{class:"mobile-social-icons"},n.a.createElement(i.b,{class:"mobile-icon-link instagram",to:"https://www.instagram.com/brian.b.f/",target:"_blank","aria-label":"Instagram"},n.a.createElement("i",{class:"fab fa-instagram"})),n.a.createElement(i.b,{class:"mobile-icon-link LinkedIn",to:"https://www.linkedin.com/in/bbfarias/",target:"_blank","aria-label":"LinkedIn"},n.a.createElement("i",{class:"fab fa-linkedin"})))))):n.a.createElement("div",{className:"footer-container"},n.a.createElement("section",{className:"footer-subscription"},n.a.createElement("p",{className:"footer-subscription-heading"},"Reach out to me"),n.a.createElement("div",{className:"container"},n.a.createElement(b,null))),n.a.createElement("div",{class:"footer-links"}),n.a.createElement("section",{class:"social-media"},n.a.createElement("div",{class:"social-media-wrap"},n.a.createElement("div",{class:"social-icons"},n.a.createElement(i.b,{class:"social-icon-link instagram",to:"https://www.instagram.com/brian.b.f/",target:"_blank","aria-label":"Instagram"},n.a.createElement("i",{class:"fab fa-instagram"})),n.a.createElement(i.b,{class:"social-icon-link LinkedIn",to:"https://www.linkedin.com/in/bbfarias/",target:"_blank","aria-label":"LinkedIn"},n.a.createElement("i",{class:"fab fa-linkedin"}))))))};t(41);var v=function(){return/Mobi/.test(navigator.userAgent)?n.a.createElement("div",{className:"about-me-container"},n.a.createElement("div",{className:"mobile-container"},n.a.createElement("div",{className:"typewriter-container"},n.a.createElement("h3",null,"My Experience/Skills")),n.a.createElement("div",{id:"skills-mobile"},n.a.createElement("h2",{className:"title"},"Frame-Works"),n.a.createElement("div",{className:"frame-works"},n.a.createElement("li",{className:"other"},"Django"),n.a.createElement("li",{className:"other"},"React"),n.a.createElement("li",{className:"other"},"ReactJs"),n.a.createElement("li",{className:"other"},"NodeJs"),n.a.createElement("li",{className:"other"},"Strapi"))),n.a.createElement("div",{id:"skills-mobile"},n.a.createElement("h2",{className:"title"},"Languages"),n.a.createElement("div",{className:"frame-works"},n.a.createElement("li",{className:"code"},"C++"),n.a.createElement("li",{className:"code"},"HTML"),n.a.createElement("li",{className:"code"},"Java"),n.a.createElement("li",{className:"code"},"Javascript"),n.a.createElement("li",{className:"code"},"Python"),n.a.createElement("li",{className:"code"},"CSS"),n.a.createElement("li",{className:"code"},"C"),n.a.createElement("li",{className:"code"},"Arm Assembly"),n.a.createElement("li",{className:"code"},"SQL"),n.a.createElement("li",{className:"code"},"MATLAB"))))):n.a.createElement("div",{className:"about-me-container"},n.a.createElement("div",{className:"info-container"},n.a.createElement("div",{className:"typewriter-container"},n.a.createElement("h3",null,"My skills")),n.a.createElement("div",{className:"skills-container"},n.a.createElement("div",{id:"skills"},n.a.createElement("ul",{className:"scroll"},n.a.createElement("img",{src:"/images/skills/C++.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/SQL.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/HTML.svg",className:"skill"}),n.a.createElement("img",{src:"/images/skills/CSS.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/JS.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/Java.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/Python.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/Django.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/React.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/SFML.png",className:"skill"})),n.a.createElement("ul",{className:"scroll2"},n.a.createElement("img",{src:"/images/skills/C++.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/SQL.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/HTML.svg",className:"skill"}),n.a.createElement("img",{src:"/images/skills/CSS.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/JS.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/Java.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/Python.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/Django.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/React.png",className:"skill"}),n.a.createElement("img",{src:"/images/skills/SFML.png",className:"skill"}))))))};t(43);var N=function(){return document.addEventListener("DOMContentLoaded",function(){try{document.querySelector(".Me-title").style.animationPlayState="paused"}catch(l){return!0}for(var e=document.querySelectorAll("#tile1"),a=document.querySelectorAll("#tile2"),t=0;t<a.length;t++)e[t].style.animationPlayState="paused",a[t].style.animationPlayState="paused"}),n.a.createElement("div",{className:"ABMC"},n.a.createElement("h1",{className:"Me-title"},"A little About Me"),n.a.createElement("div",{id:"tile1"},n.a.createElement("h2",null,"Class of 2025 at the University of Florida")),n.a.createElement("div",{id:"tile2"},n.a.createElement("h2",null,"Studying a Bachelors in Computer Science ")),n.a.createElement("div",{id:"tile1"},n.a.createElement("h2",null," Upper Division GPA: ",n.a.createElement("strong",null,"3.61"))),n.a.createElement("div",{id:"tile2"},n.a.createElement("h2",null," I ",n.a.createElement("i",{class:"fa-regular fa-heart"})," Working out, Software Engineering, and dogs")))};t(45);var k=function(){return/Mobi/.test(navigator.userAgent)?n.a.createElement("section",{id:"live-proj"},n.a.createElement("h2",null,"Live Projects"),n.a.createElement("div",null),n.a.createElement("div",{className:"cards_container"},n.a.createElement(g,{src:"images/SR.png",text:"(Beta) Hot Sauce rating site",label:"Python/JS/HTML/CSS/SQL",path:"https://saucer-roster.up.railway.app/"}))):n.a.createElement("section",{id:"live-proj"},n.a.createElement("h2",null,"Live Projects"),n.a.createElement("div",null),n.a.createElement("div",{className:"cards_container"},n.a.createElement(g,{src:"images/SR.png",text:"(Beta) Hot Sauce rating site",label:"Python/JS/HTML/CSS",path:"https://saucer-roster.up.railway.app/"})))};var y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(E,null),n.a.createElement(p,null),n.a.createElement(v,null),n.a.createElement(k,null),n.a.createElement(N,null),n.a.createElement(h,null))},w=t(0);function S(){return n.a.createElement("iframe",{className:"resume-pdf",src:"../images/Resume.pdf"})}var _=function(){return window.addEventListener("scroll",function(){window.onscroll=function(){var e=document.querySelectorAll("#tile1"),a=document.querySelectorAll("#tile2"),t=document.getElementById("stat"),l=document.getElementById("navbar"),n=document.querySelector(".cards"),s=(document.querySelector(".about-me-container"),document.getElementById("live-proj")),r=document.querySelector(".ABMC");if(window.innerHeight+window.scrollY>=document.body.offsetHeight-750){document.querySelector(".Me-title").style.animationPlayState="running";for(var c=0;c<a.length;c++)e[c].style.animationPlayState="running",a[c].style.animationPlayState="running"}if(window.scrollY<340&&(l.style.top="0px"),window.scrollY>340){var i=339-window.scrollY;l.style.top="".concat(i,"px"),t.className="status"}else t.className="status-gone";var m=window.scrollY,o=l.offsetHeight,u=o+n.offsetHeight,d=u+s.offsetHeight,E=d+r.offsetHeight;m>o&&m<u?(console.log("entered"),document.getElementById("myBar").style.width="25%"):document.getElementById("myBar").style.width=m>u&&m<d?"50%":m>d&&m<E?"75%":m>E?"100%":"0%"}}),n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null,n.a.createElement(d,null),n.a.createElement("div",{id:"stat",className:"status"},n.a.createElement("div",{class:"progress-bar",id:"myBar"})),n.a.createElement(w.c,null,n.a.createElement(w.a,{path:"/",element:n.a.createElement(y,null)}),n.a.createElement(w.a,{path:"/resume-pdf",element:n.a.createElement(S,null)}),n.a.createElement(w.a,{path:"/intro",element:n.a.createElement(v,null)}))))};r.a.render(n.a.createElement(_,null),document.getElementById("root"))},8:function(e,a,t){}},[[21,2,1]]]);
//# sourceMappingURL=main.16646f84.chunk.js.map