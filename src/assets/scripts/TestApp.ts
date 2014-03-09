///<reference path='_declare/external.d.ts'/>
///<reference path='_declare/jquery.d.ts'/>

/// <amd-dependency path="hbs!../templates/topbar/TopNavigationTemplate" />
declare var require:(moduleId:string) => any;
var TopNavigationTemplate:Function = require('hbs!../templates/topbar/TopNavigationTemplate');

import TemplateFactory = require("util/TemplateFactory");
import Base = require("view/Base");
import AnotherNamespaceClass = require("view/AnotherNamespaceClass");
import $ = require("jquery");


/**
 * YUIDoc_comment
 *
 * @class TestApp
 * @module namespace
 * @constructor
 **/
class TestApp extends Base {

    private _title:string = 'TypeScript AMD Boilerplate';
    private _anotherClass:AnotherNamespaceClass = null;

    constructor() {
        super();
        //http://ronemous.com/?p=101

    }

    /**
     * @overridden Base.createChildren
     */
    public createChildren():void {
        var template:string = TopNavigationTemplate();
        this.addChild(template);

//        template = TemplateFactory.create('templates/login/LoginTemplate.hbs', {title: this._title});
//        this.addChild(template);

        this._anotherClass = new AnotherNamespaceClass();
        this._anotherClass.sayHi();
    }

}

export = TestApp;