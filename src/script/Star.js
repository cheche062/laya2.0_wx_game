/**
 * 三角形
 */
export default class Star extends Laya.Script {
    /** @prop {name:num,tips:"每次旋转的角度",type:int}*/

    constructor() { super(); }
    onEnable() {
       
    }

    onUpdate() {
        this.owner.rotation += this.num;
    }

   
}