/**
 * 人物
 */
export default class People extends Laya.Script {
    constructor() { super(); }
    onEnable() {
        this.num = 0;
        this.owner.on(Laya.Event.CLICK, this, this.addText)
    }

    addText() {
        this.num++;
        this.owner.getChildByName("dom_text").index = String(this.num % 10);
        console.log("click");
    }

}