import RunningBall from "./RunningBall";

export default class StartScene extends Laya.Scene {
    constructor() {
        super();
        //设置单例的引用方式，方便其他类引用
        StartScene.instance = this;
        //关闭多点触控，否则就无敌了
        Laya.MouseManager.multiTouchEnabled = false;
        //加载场景文件
        this.loadScene("test/StartScene.scene");
    }

    onEnable() {
        // this._runningBall = this.getComponent(RunningBall);
        console.log(99988800)
    }
}