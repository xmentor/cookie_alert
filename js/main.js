var  cookie_alert = {
    options: {
        font: 'Arial, sans-serif',
        color: '#000',
        text_color: '#fff',
        position: 'bottom',
        text: 'Ta strona wykorzystuje ciasteczka!',
        info_cookie: 'http://wszystkoociasteczkach.pl/'
    },
    displayed: function () {
        'use strict';
        alert(localStorage.getItem("displayed6"));
        alert(localStorage.getItem("displayed6") === null);
        if (localStorage.getItem("displayed6") === null) {//test
            return true;
        } else {
            return false;
            //document.querySelector(".cookie-alert").remove();
        }
    },
    checkCookie: function () {
        'use strict';
        if (document.cookie === "") {
            return false;
        } else {
            return true;
        }
    },
    closeAlert: function () {
        'use strict';
        document.querySelector(".cookie-alert").addEventListener("click", function () {
            this.remove();
            if (localStorage.getItem("displayed6") === null)  localStorage.setItem("displayed6", true);
        }, false);
    },
    init: function (event) {
        'use strict';
        for (var i in event) {
            this.options[i] = event[i];
        }
        //alert(document.cookie = "dupa;");
        //localStorage.setItem("displayed", null);
        if (this.displayed()) {
            if (this.checkCookie()) {
                var styleElement = document.createElement("style");
                styleElement.innerHTML=".cookie-alert{background: " + this.options.color + "; color: " + this.options.text_color + "; font-family: " + this.options.font + "; " + this.options.position + ": 0;}";
                document.head.appendChild(styleElement);
                
                var blockElement = document.createElement("div");
                blockElement.classList.add("cookie-alert");
                blockElement.setAttribute("title","Kliknij by zamknąć!");
                blockElement.innerHTML = "<div class='alert-content'>" + this.options.text + " | <a href='" + this.options.info_cookie + "' title='Więcej informacji o ciasteczkach' class='info-cookie' target='_blank'>Więcej o ciasteczkach</a></div>";
                document.body.appendChild(blockElement);
                document.body.insertBefore(blockElement, document.body.firstChild);
                //alert(document.cookie);
                this.closeAlert();
            }
        }
    }
};