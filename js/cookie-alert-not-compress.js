var  cookie_alert = {
    options: {
        color: '#000',
        text_color: '#fff',
        position: 'bottom',
        text: 'Ta strona wykorzystuje pliki cookies!',
        info_cookie: 'http://wszystkoociasteczkach.pl/'
    },
    displayed: function () {
        'use strict';
        if (localStorage.getItem("displayed-alert") === null) {//test
            return true;
        } else {
            return false;
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
            localStorage.setItem("displayed-alert", true);
        }, false);
    },
    init: function (event) {
        'use strict';
        for (var i in event) {
            this.options[i] = event[i];
        }
        if (this.checkCookie()) {
            if (this.displayed()) {
                var styleElement = document.createElement("style");
                styleElement.innerHTML=".cookie-alert{background: " + this.options.color + "; color: " + this.options.text_color + "; " + this.options.position + ": 0;}";
                document.head.appendChild(styleElement);
                
                var blockElement = document.createElement("div");
                blockElement.classList.add("cookie-alert");
                blockElement.setAttribute("title","Kliknij by zamknąć!");
                blockElement.innerHTML = "<div class='alert-content'>" + this.options.text + " | <a href='" + this.options.info_cookie + "' title='Więcej informacji o ciasteczkach' class='info-cookie' target='_blank'>Więcej o ciasteczkach</a></div>";
                document.body.appendChild(blockElement);
                document.body.insertBefore(blockElement, document.body.firstChild);
                
                this.closeAlert();
            }/* else {
                window.console.log("Komunikat był wczesniej wyświetlony");
            }*/
        }/* else {
            window.console.log("Brak plików cookies");
        }*/
    }
};