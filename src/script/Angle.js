/**
 * 三角形
 */
export default class Angle extends Laya.Script {
    /** @prop {name:shape,tips:"图形地址",type:String}*/
    /** @prop {name:des,tips:"内容说明",type:String}*/


    constructor() { super(); }
    onEnable() {
        this._text = this.owner.getChildByName("dom_text");
        this._text.text = this.des;
        
        this._angle = this.owner.getChildByName("dom_angle");
        this._angle.skin = this.shape;

        this.owner.on("click", this, this.showLog)
    }

    onUpdate() {
        // this._text.text  = "2222"
    }

    setText(str) {
        this._text = str;
    }

    showLog(e) {
        //停止事件冒泡，提高性能，当然也可以不要
        e.stopPropagation();

        console.log(this.des);

    }
}