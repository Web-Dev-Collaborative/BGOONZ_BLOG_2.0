// install: "npm install pdfcrowd"
let currentUrl = window.location.href;
<<<<<<< HEAD
<<<<<<< HEAD
import {
    HtmlToPdfClient
} from 'pdfcrowd';
let api = new HtmlToPdfClient('demo', 'ce544b6ea52a5621fb9d55f8b542d14d');
api.convertUrlToFile('currentUrl', 'document.pdf', function(err, fileName) {
    /* done */
});
('use strict');
!(function() {
=======
import { HtmlToPdfClient } from 'pdfcrowd';
let api = new HtmlToPdfClient('demo', 'ce544b6ea52a5621fb9d55f8b542d14d');
api.convertUrlToFile('currentUrl', 'document.pdf', function (err, fileName) {
    /* done */
});
('use strict');
!(function () {
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
    var t =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTQzZmFlY2I2NjkwNWMyZGJkMGVmZCIsInRva2VuVHlwZSI6InB1YmxpYyIsImlhdCI6MTY0MjM0ODUyNiwiZXhwIjoxNDI1Njc0ODUyNn0.VD7Lxgh5cWuOzOhV9KH51TZVdPVXvsIJgRUx-oacfVM';

=======
let pdfcrowd = require('pdfcrowd');
let api = new pdfcrowd.HtmlToPdfClient('demo', 'ce544b6ea52a5621fb9d55f8b542d14d');
api.convertUrlToFile('currentUrl', 'document.pdf', function (err, fileName) {
    /* done */
});

('use strict');

!(function () {
    var t =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTQzZmFlY2I2NjkwNWMyZGJkMGVmZCIsInRva2VuVHlwZSI6InB1YmxpYyIsImlhdCI6MTY0MjM0ODUyNiwiZXhwIjoxNDI1Njc0ODUyNn0.VD7Lxgh5cWuOzOhV9KH51TZVdPVXvsIJgRUx-oacfVM';
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
    function e() {
        var e = document.createElement('script'),
            a = navigator.language || navigator.userLanguage;
        (e.type = 'text/javascript'), (e.async = !0), (e.src = 'https://api.searchbar.org/v1/widget/' + t + '/' + a);
        var n = document.getElementsByTagName('script')[0];
        n.parentNode.insertBefore(e, n);
    }
    'complete' === document.readyState ? e() : window.attachEvent ? window.attachEvent('onload', e) : window.addEventListener('load', e, !1);
<<<<<<< HEAD
<<<<<<< HEAD
})();
=======
})();
//---------------------------------Search---------------------------------
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
=======
})();
>>>>>>> 82af54be39033a629965b16189f8db2cb842f1d2
