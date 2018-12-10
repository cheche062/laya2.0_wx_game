
/**
 * 游戏控制脚本。定义了几个dropBox，bullet，createBoxInterval等变量，能够在IDE显示及设置该变量
 * 更多类型定义，请参考官方文档
 */
export default class RunningBall extends Laya.Script {
    /** @prop {name:angle,tips:"每次增加多少度",type:number,default:0.1}*/

    constructor() { super(); }
    onEnable() {
        this._stop = false;
        this._btn = this.owner.getChildByName("btn_start");
        this._btn.on(Laya.Event.CLICK, this, ()=>{
            this._stop = !this._stop;

         });
    }

    onUpdate() {
        if (!this._stop) {
            this._btn.rotation++;
        }
    }

    onStageClick(e) {
        //停止事件冒泡，提高性能，当然也可以不要
        e.stopPropagation();

        console.log("click")
        
    }

   
}