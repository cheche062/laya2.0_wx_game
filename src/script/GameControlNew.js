import UTILS from "../utils/utils";
import Column from "../script/Column";
import GameScene from "../scenes/GameScene";

/**
 * 游戏控制脚本。定义了几个dropBox，bullet，createBoxInterval等变量，能够在IDE显示及设置该变量
 * 更多类型定义，请参考官方文档
 */
/**起始横坐标*/
const ORIGIN_X = 50;
let gameStart = false;

export default class GameControl extends Laya.Script {
    /** @prop {name:column,tips:"生成的柱子",type:Prefab}*/

    constructor() { super(); }
    onEnable() {
        this._dom_gameBox = this.owner.getChildByName("dom_gamebox");
        this._dom_gameBox.destroyChildren();

        // 当前所在的柱子索引
        this.currentIndex = 0;
        // 当前是否可操控游戏
        this.enabledGame = true;

        // 初始化两个柱子
        this.createColumn();
        this.createColumn();
    }

    onUpdate() {
        
    }

    createColumn() {
        //使用对象池创建盒子
        let box = Laya.Pool.getItemByCreateFun("column", this.column.create, this.column);
        let index = this._dom_gameBox.numChildren;
        if (index) {
            let last_box = this._dom_gameBox.getChildAt(index - 1);
            box.x = last_box.x + last_box.width + UTILS.randomNumber(80, 250);
        }
        let instance = box.getComponent(Column);
        // console.log(instance)
        instance.initConfig(index, this);

        this._dom_gameBox.addChild(box);
        // console.log(box)
    }

    addColumn() {
        let targetX = 0;
        if (this._dom_gameBox.numChildren) {
            let last_box = this._dom_gameBox.getChildAt(this._dom_gameBox.numChildren - 1);
            let randomDis = UTILS.randomNumber(-20, 100);
            targetX = Math.min(last_box.x * -1 + randomDis, 0);
        }
        new Promise((resolve, reject) => {
            Laya.Tween.to(this._dom_gameBox, { x: targetX }, 300, Laya.Ease.linearIn, Laya.Handler.create(this, resolve))
        }).then(() => {
            this.createColumn();
        }).then(() => {
            console.log(this._dom_gameBox.numChildren);
            this.currentIndex = this._dom_gameBox.numChildren - 2;
            GameScene.instance.addScore(1);
            this.enabledGame = true;
        })
    }

}