import GameControlNew from "../script/GameControlNew";


export default class GameScene extends Laya.Scene {
    constructor() {
        super();
        //设置单例的引用方式，方便其他类引用
        GameScene.instance = this;
        
        //加载场景文件
        this.loadScene("test/GameScene.scene");
    }

    onEnable() {
        this.graphics.drawRect(0, 0, this.width, this.height, "#9bdbea");

        this._score = 0;
        this._control = this.getComponent(GameControlNew);



        console.log("GameScene  ok");
    }

    addScore(value) {
        this._score += value;
        this.dom_score.text = String(this._score);
        
    }


}