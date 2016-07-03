var  cookie_alert = {
    options: {
        color: '#000',
        text_color: '#fff',
        position: 'bottom',
        text: 'Niniejsza strona krzysta z plików cookies, korzystając ze strony wyrażasz zgodę na używanie cookies, zgodnie z ustawieniami przeglądarki!',
        info_cookie: 'http://wszystkoociasteczkach.pl/'
    },
    closedAlert: function () {
        'use strict';
        if (localStorage.getItem("close-alert") === null) {//test
            return false;
        } else {
            return true;
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
            localStorage.setItem("close-alert", true);
        }, false);
    },
    init: function (event) {
        'use strict';
        /* line test - start */
        document.cookie = 'test=txt; expires=Sun, 16 Jul 3567 06:23:41 GMT; path=/;'; // line test
        /* line test - end */
        for (var i in event) {
            this.options[i] = event[i];
        }
        if (this.checkCookie()) {
            if (!this.closedAlert()) {
                var styleElement = document.createElement("style"),
                    blockElement = document.createElement("div");
                styleElement.innerHTML=".cookie-alert{background: " + this.options.color + "; color: " + this.options.text_color + "; " + this.options.position + ": 0;}";
                document.head.appendChild(styleElement);
                
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