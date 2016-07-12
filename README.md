# Cookie Alert
Wersja demonstracyjna: [Cookie Alert | Demo](https://xmentor.github.io/cookie_alert)

# Instalacja
* Pobierz pliki [Cookie Alert](https://github.com/xmentor/cookie_alert/archive/master.zip)

* Plik `cookie-alert.min.css` zalinkuj w sekcji head:
    ```
    <head>
        // some code
        <link rel="stylesheet" href="scieżka_dostępu/cookie-alert.min.css">
        // some code
    </head>
    ```
* Plik `cookie-alert.min.js` podepnij w sekcji body przed zamknięciem tego znacznika:

    ```
    <body>
        // some code
        <script src="scieżka_dostępu/cookie-alert.min.js"></script>
    </body>
    ```    
    
# Ustawienia
* Ustawienia są opcjonalne
* Ustawienia dodajemy pod podpiętym skryptem `cookie-alert.min.js`:

    ```
    <script>
        cookie_alert.init({
            color: 'rgba(155,115,151,.7)', //domyślnie '#000'
            text_color: '#fff',            //domyślnie '#fff'
            position: 'bottom',            //domyślnie 'bottom'
            text: 'Niniejsza strona krzysta z plików cookies, korzystając ze strony wyrażasz zgodę na używanie cookies, zgodnie z ustawieniami przeglądarki!',   //domyślnie
            info_cookie: 'http://wszystkoociasteczkach.pl/' //domyślnie
        });
    </script>
    ```
    
# Licencja
[Licencja MIT](https://github.com/xmentor/cookie_alert/blob/master/LICENSE)
