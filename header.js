var self=document.currentScript;
var header_div_bottom=document.createElement("div");
self.parentNode.appendChild(header_div_bottom);
header_div_bottom.id="header";
header_div_bottom.setAttribute("style",`
padding:20px;
font-size:20px;
font-family:sans-serif;
text-align:center;
margin-bottom:0px;
height:100px;
`)
header_div_bottom.innerHTML=`

<img src="mycon.ico" height=100% style="float:left; padding-left:50px;"/>
<div id="navbar-wrapper" style="height:100%; display:inline-block;">
    <div id="navbar-pinks" style="display:block; position: relative; top:50%; transform:translate(0, -50%);">
        <a href="https://linuxrocks2000.github.io/" class="header-links">Home</a>
        <a href="/blog/" class="header-links">Blog</a>
        <a href="/platformer/platformer-game" class="header-links">Platformer</a>
    </div>
</div>
`;
header_div_bottom.style.backgroundColor="lightblue";
