"use strict";(()=>{var u=async()=>await fetch("https://restcountries.com/v3.1/all",{method:"GET"}).then(n=>n.json());async function i(){let s=await u(),t=document.querySelector('[data-element="list"]'),n=document.querySelector('[data-element="item"]'),p=document.querySelector("#w-dropdown-toggle-0");t==null||t.removeChild(n),s.forEach(c=>{var e,m;let o=n==null?void 0:n.cloneNode(!0),l=c.name.common;o.setAttribute("aria-label",l),o.setAttribute("title",l),(e=o.querySelector('[data-element="flag"]'))==null||e.setAttribute("src",c.flags.svg),(m=o.querySelector('[data-element="flag"]'))==null||m.setAttribute("alt",l+" flag"),o.querySelector('[data-element="value"]').innerText=c.cca2,t==null||t.appendChild(o)});let f=document.querySelectorAll('[data-element="item"]'),r=document.querySelector('[aria-label="Phone Prefix"]'),a=document.querySelector('[data-element="flag"].prefix-dropdown_flag'),d=document.querySelector('[name="countryCode"]');f.forEach(c=>{c.addEventListener("click",o=>{var l;(l=r==null?void 0:r.firstChild)==null||l.remove(),s.forEach(e=>{let m=e.idd.root+e.idd.suffixes[0],g=document.createTextNode(m);e.name.common===c.getAttribute("title")&&(r==null||r.appendChild(g),a==null||a.setAttribute("src",e.flags.svg),a==null||a.setAttribute("alt",e.name.common+" flag"),d==null||d.setAttribute("value",e.cca2))})})})}window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{i()});})();
