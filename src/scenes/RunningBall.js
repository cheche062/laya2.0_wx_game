/**
 * 游戏控制脚本。定义了几个dropBox，bullet，createBoxInterval等变量，能够在IDE显示及设置该变量
 * 更多类型定义，请参考官方文档
 */
export default class RunningBall extends Laya.Script {
    /** @prop {name:angle,tips:"每次增加多少度",type:number,default:0.1}*/
    /** @prop {name:item,tips:"子项小三角",type:Prefab}*/

    constructor() { super(); }
    onEnable() {
        this._stop = false;
        this._btn = this.owner.getChildByName("btn_start");
        this._box = this.owner.getChildByName("dom_box");
        this._btn.on(Laya.Event.CLICK, this, this.clickHandler);
    }

    clickHandler() {
        this._stop = !this._stop;
        // let _item = Laya.Pool.getItemByCreateFun("item", this.item.create, this.item);
        // _item.x = 50 * this._box.numChildren;
        // _item.getChildByName("dom_text").text = this._btn.rotation;
        // this._box.addChild(_item);
    }

    onUpdate() {
        if (!this._stop) {
            this._btn.rotation += this.angle;
        }
    }

    onStageClick(e) {
        //停止事件冒泡，提高性能，当然也可以不要
        e.stopPropagation();

        // console.log("click666")
        
    }

   
}