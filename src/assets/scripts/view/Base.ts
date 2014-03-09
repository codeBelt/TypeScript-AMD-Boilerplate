import $ = require("jquery");

/**
 * YUIDoc_comment
 *
 * @class TestApp
 * @module namespace
 * @constructor
 **/
class Base {

    private _parent:JQuery = null;

    constructor() {
    }

    /**
     * YUIDoc_comment
     *
     * @method createChildren
     * @protected
     */
    public createChildren():void {

    }

    /**
     * YUIDoc_comment
     *
     * @method appendTo
     * @param selector {string}
     * @public
     */
    public appendTo(selector:string):void {
        this._parent = $(selector);
        this.createChildren();
    }

    /**
     * YUIDoc_comment
     *
     * @method addChild
     * @public
     */
    public addChild(template:string):void {
        this._parent.append(template);
    }

}

export = Base;