self=document.currentScript;
header_div_bottom=document.createElement("div");
self.parentNode.appendChild(header_div_bottom);
header_div_bottom.id="header";
header_div_bottom.setAttribute("style",`
padding:20px;
font-size:20px;
font-family:sans-serif;
text-align:center;
margin-bottom:0px;
`)
header_div_bottom.innerHTML=`
This site is currently under maintenance. Current functionality is limited and some features may fail randomly without reason.
`;
header_div_bottom.style.backgroundColor="lightblue";
