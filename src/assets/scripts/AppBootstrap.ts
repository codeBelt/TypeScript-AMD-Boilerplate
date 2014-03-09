/// <reference path="_declare/require.d.ts" />

///<reference path='AppConfig.ts'/>
///<reference path='TestApp.ts'/>

/**
 * Main entry point for RequireJS
 */
require(
    [
        'TestApp',
        'jquery'
    ],
    (TestApp, $) => {
        'use strict';

        $(document).ready(function () {
            var app = new TestApp();
            app.appendTo('body');
        });
    }
);