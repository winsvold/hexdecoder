(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t(31)},18:function(e,a,t){},20:function(e,a,t){},22:function(e,a,t){},26:function(e,a,t){},28:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(6),s=t.n(r),c=(t(18),t(2)),i=(t(20),t(22),t(1)),o=t.n(i);var u=function(e){return n.a.createElement("div",{className:"Input__flex"},n.a.createElement("span",{className:"Input__label"},"#"),n.a.createElement("input",{value:e.hex,spellCheck:!1,type:"text",onChange:function(a){var t=a.target.value.slice(0,6).replace(/[^0-9A-Fa-f]+/,"");e.setHsl(o.a.hex.hsl(t)),e.setHex(t)},className:"Input__field"}))},m=t(7),h=t(8),E=t(10),p=t(9),d=t(11),g=(t(26),function(e){function a(){var e,t;Object(m.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(E.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(n)))).calculateBarValue=function(e){return 101-Math.floor(e/255*100)},t}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=document.getElementById("Bar-r"),a=document.getElementById("Bar-g"),t=document.getElementById("Bar-b"),l=this.calculateBarValue(this.props.rgb[0]),r=this.calculateBarValue(this.props.rgb[1]),s=this.calculateBarValue(this.props.rgb[2]);return e&&e.style.setProperty("grid-row-start",l),a&&a.style.setProperty("grid-row-start",r),t&&t.style.setProperty("grid-row-start",s),n.a.createElement("div",{className:"BarChart"},n.a.createElement("div",{id:"Bar-r"}),n.a.createElement("div",{id:"Bar-g"}),n.a.createElement("div",{id:"Bar-b"}))}}]),a}(n.a.Component));t(28);var v=function(e){var a=e.hsl[0],t={transform:"rotate(".concat(a-90,"deg) translateX(6em) ")},l=function(a){return function(){e.setHsl([a,e.hsl[1],e.hsl[2]]),console.log(e.hsl,o.a.hsl.hex(60,0,0)),e.setHex(o.a.hsl.hex(e.hsl[0],e.hsl[1],e.hsl[2]))}};return n.a.createElement("ul",{className:"hslwheel"},n.a.createElement("div",{className:"needle",style:t}),n.a.createElement("li",{className:"red",onClick:l(0)},n.a.createElement("span",null,"Red")),n.a.createElement("li",{className:"orange",onClick:l(30)},n.a.createElement("span",null,"Orange")),n.a.createElement("li",{className:"yellow",onClick:l(60)},n.a.createElement("span",null,"Yellow")),n.a.createElement("li",{className:"chartreuse",onClick:l(90)},n.a.createElement("span",null,"Chartreuse")),n.a.createElement("li",{className:"green",onClick:l(120)},n.a.createElement("span",null,"Green")),n.a.createElement("li",{className:"springgreen",onClick:l(150)},n.a.createElement("span",null,"Spring Green")),n.a.createElement("li",{className:"cyan",onClick:l(180)},n.a.createElement("span",null,"Cyan")),n.a.createElement("li",{className:"azure",onClick:l(210)},n.a.createElement("span",null,"Azure")),n.a.createElement("li",{className:"blue",onClick:l(240)},n.a.createElement("span",null,"Blue")),n.a.createElement("li",{className:"purple",onClick:l(270)},n.a.createElement("span",null,"Purple")),n.a.createElement("li",{className:"magenta",onClick:l(300)},n.a.createElement("span",null,"Magenta")),n.a.createElement("li",{className:"rose",onClick:l(330)},n.a.createElement("span",null,"Rose")))};t(5);var f=function(e){var a=e.hsl[0],t=e.hsl[1],l=e.hsl[2],r="hsl("+a+","+t+"%,"+l+"%)";return n.a.createElement("div",{className:"LightnessAndSaturation"},n.a.createElement("span",null,"Lightness: "),n.a.createElement("input",{type:"range",min:"0",max:"100",value:e.hsl[2],onChange:function(l){e.setHsl([a,t,l.target.value]);var n=o.a.hsl.hex(a,t,l.target.value);e.setHex(n)},step:"1",className:"slider"}),n.a.createElement("svg",{height:"100",width:"100"},n.a.createElement("circle",{cx:"50",cy:"50",r:"30",fill:r})),n.a.createElement("div",null,l<33.33?"Dark":l<66.66?"Middle":"Light"),n.a.createElement("span",null,"Saturation: "),n.a.createElement("input",{type:"range",min:"0",max:"100",value:e.hsl[1],onChange:function(n){var r=o.a.hsl.hex(a,t,n.target.value);e.setHex(r),e.setHsl([a,n.target.value,l])},step:"1",className:"slider"}),n.a.createElement("svg",{height:"100",width:"100"},n.a.createElement("circle",{cx:"50",cy:"50",r:"30",fill:r})),n.a.createElement("div",null,t<25?"Grey":t<50?"Muted":t<75?"Washed":"Saturated"))};var y=function(){var e=Object(l.useState)([0,0,0]),a=Object(c.a)(e,2),t=a[0],r=a[1],s=Object(l.useState)(""),i=Object(c.a)(s,2),m=i[0],h=i[1],E=o.a.hsl.rgb(t),p=function(e){var a="";return e&&6===e.length&&(a=(a=e.charAt(0)+e.charAt(2)+e.charAt(4)).toUpperCase()),a}(m);return n.a.createElement("div",{className:"App"},n.a.createElement(u,{hex:m,setHex:h,setHsl:r}),n.a.createElement("div",null,n.a.createElement("p",null,"hue: ",t[0]," saturation: ",t[1]," lightness: ",t[2]),n.a.createElement("p",null,"shorthand: #",p)),n.a.createElement("div",{className:"oneline"},n.a.createElement(g,{rgb:E}),n.a.createElement(v,{hsl:t,setHsl:r,setHex:h})),n.a.createElement(f,{hsl:t,setHex:h,setHsl:r}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,a,t){}},[[12,2,1]]]);
//# sourceMappingURL=main.d8b46b96.chunk.js.map