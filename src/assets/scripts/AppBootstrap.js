/**
 * Main entry point for RequireJS
 */
require(
    [
        'TestApp',
        'jquery'
    ],
    function(
        TestApp,
        $
    ) {
        'use strict';

        $(document).ready(function () {
            var app = new TestApp();
            app.appendTo('body');
        });
    }
);