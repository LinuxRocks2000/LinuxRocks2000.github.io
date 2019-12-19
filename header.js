self=document.currentScript;
header_div_bottom=document.createElement("div");
self.parentNode.appendChild(header_div_bottom);
header_div_bottom.id="header";
header_div_bottom.innerHTML=`
This site is under repair. This banner will improve (hopefully).
`;
header_div_bottom.style.backgroundColor="lightblue";
