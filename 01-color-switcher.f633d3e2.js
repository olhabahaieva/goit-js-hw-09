!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),a=null;t.addEventListener("click",(function(o){o.preventDefault(),t.disabled=!0,e.disabled=!1,a=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(n){n.preventDefault(),e.disabled=!0,t.disabled=!1,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.f633d3e2.js.map
