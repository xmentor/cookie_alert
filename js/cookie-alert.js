var cookie_alert={options:{color:"#000",text_color:"#fff",position:"bottom",text:"Ta strona wykorzystuje pliki cookies!",info_cookie:"http://wszystkoociasteczkach.pl/"},displayed:function(){"use strict";return null===localStorage.getItem("displayed-alert")?!0:!1},checkCookie:function(){"use strict";return""===document.cookie?!1:!0},closeAlert:function(){"use strict";document.querySelector(".cookie-alert").addEventListener("click",function(){this.remove(),localStorage.setItem("displayed-alert",!0)},!1)},init:function(t){"use strict";document.cookie="test=true";for(var e in t)this.options[e]=t[e];if(this.checkCookie()&&this.displayed()){var o=document.createElement("style");o.innerHTML=".cookie-alert{background: "+this.options.color+"; color: "+this.options.text_color+"; "+this.options.position+": 0;}",document.head.appendChild(o);var i=document.createElement("div");i.classList.add("cookie-alert"),i.setAttribute("title","Kliknij by zamknąć!"),i.innerHTML="<div class='alert-content'>"+this.options.text+" | <a href='"+this.options.info_cookie+"' title='Więcej informacji o ciasteczkach' class='info-cookie' target='_blank'>Więcej o ciasteczkach</a></div>",document.body.appendChild(i),document.body.insertBefore(i,document.body.firstChild),this.closeAlert()}}};