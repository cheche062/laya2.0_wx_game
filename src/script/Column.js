import UTILS from "../utils/utils";
import GameScene from "../scenes/GameScene";

/**
 * 柱子
 */
const COLUMN_HEIGTH = 300;
export default class Column extends Laya.Script {
    constructor() { super(); }
    
    onEnable() {
        //桥长度
        this._brigeHeight = 0;
        // 背景柱子
        this.dom_bg = this.owner.getChildByName("dom_bg");
        // 红心
        this.dom_red = this.owner.getChildByName("dom_red");
        
        // 随机取柱子宽度
        this.owner.width = UTILS.randomNumber(70, 120);
        this.dom_bg.width = this.owner.width;
        this.dom_bg.height = COLUMN_HEIGTH;
        
        this.dom_red.pos((this.dom_bg.width - this.dom_red.width) / 2, 3);
        
        // console.log(this.owner, this.owner.width)
        this.dom_brige = this.owner.getChildByName("dom_brige");

        this.setBrigeHeight(0);
    }

    initConfig(idIndex, gameControl) {
        this._idIndex = idIndex;
        this._gameControl = gameControl;
    }

    setBrigeHeight(height) {
        this.dom_brige.graphics.clear();
        if (height == 0) return;
        
        this.dom_brige.pivotX = 8;
        this.dom_brige.pivotY = height - 2;
        this.dom_brige.x = this.owner.width - 2;
        this.dom_brige.y = 0;
        this.dom_brige.graphics.drawRect(0, 0, 8, height, "#e59871", "#33241c", 2);
    }

    changeLong() {
        this._brigeHeight += 5;
        this.setBrigeHeight(this._brigeHeight);
    }

    onStageMouseDown() {
        if (this._gameControl.currentIndex !== this._idIndex) return;
        if (!this._gameControl.enabledGame) return;
        this._gameControl.enabledGame = false;

        this.changeLong();
        Laya.timer.frameLoop(1, this, this.changeLong);
    }
    
    onStageMouseUp() {
        if (this._gameControl.currentIndex !== this._idIndex) return;
        Laya.timer.clear(this, this.changeLong);

        this._brigeHeight

        new Promise((resolve, reject) => {
            Laya.Tween.to(this.dom_brige, { rotation: 90 }, 350, Laya.Ease.circOut, Laya.Handler.create(null, resolve), 100);
        }).then(() => {
            this._gameControl.addColumn();
        })
    }

    onUpdate() {
       
    }

    onDisable() {
        //柱子被移除时，回收柱子到对象池
        Laya.Pool.recover("column", this.owner);
    }
}