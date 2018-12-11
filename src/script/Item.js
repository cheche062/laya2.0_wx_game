/**
 * 三角形
 */
export default class Item extends Laya.Script {
    constructor() { super(); }
    onEnable() {
       
        this._text = this.owner.getChildByName("dom_text");
    }

    onUpdate() {
        // this._text.text  = "2222"
    }

    setText(str) {
        this._text = str;
    }
}