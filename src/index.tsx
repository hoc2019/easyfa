import * as React from "react";
import parseAPNG, { ErrNotAPNG } from "./apngjs/parser";
import { getImgBuffer } from "./utils/imgTool";
import { APNG } from "./apngjs/structs";
import Player from "./apngjs/player";
import "./style.css";

/**
 * [ApngComponent description]
 * @param {string} className canvas' className
 * @param {object} style canvas' style
 * @param {string} src apng's path
 * @param {number} rate apng play rate
 * @param {function} onClick bind animation's click event
 * @param {bool} autoPlay auto play apng
 * @extends React
 */

interface EasyfaProps {
  src: string[];
  flags?: string[];
  rate?: number;
  autoPlay?: boolean;
  cache?: boolean;
  trans?: boolean;
  autoPlayTimes?: number;
  showStatic?: number[] | number;
  style?: object;
  className?: string;
  canvasClassName?: string;
  canvasStyle?: object;
  onLoad?: Function;
  onEnd?: Function;
  onLoopStart?: Function;
  onLoopEnd?: Function;
  [propName: string]: any;
}
interface EasyfaState {
  src: string[];
  rate: number;
  autoPlay: boolean;
  style?: object;
  className?: string;
  staticImg?: string[];
  staticStyle?: object;
  canvasClassName?: string;
  canvasStyle?: object;
  showLayer: number;
  loadDone: boolean;
  [stateName: string]: any;
}
interface PropsObj {
  [stateName: string]: any;
}

class Easyfa extends React.Component<EasyfaProps, EasyfaState> {
  apng: APNG | Error = null;
  apngList: (APNG | Error | ErrNotAPNG)[] = [];
  canvas: HTMLCanvasElement = null;
  canvasList: HTMLCanvasElement[] = [];
  player: Player = null;
  playerList: Player[] = [];
  isPlay: boolean = false;
  isStatic: boolean;
  trans: boolean;
  hasPerformance: boolean = typeof performance !== "undefined";
  speed: number = 1000 / 24;
  isUnmount: boolean;
  flags: string[];
  constructor(props: EasyfaProps) {
    super(props);
    const {
      src = [],
      rate = 1.0,
      autoPlay = false,
      style = {},
      trans = false,
      className = "",
      canvasStyle = {},
      canvasClassName = "",
      showStatic,
      flags
    } = props;
    const srcList = typeof src === "string" ? [src] : src;
    const showStaticList =
      typeof showStatic === "number" ? [showStatic] : showStatic;
    this.state = {
      src: srcList,
      rate,
      autoPlay,
      style,
      className,
      canvasStyle,
      canvasClassName,
      staticImg: [],
      staticStyle: {},
      showLayer: 0,
      loadDone: false,
      showStatic: showStaticList
    };
    this.speed = 1000 / (rate * 24); //1000/24 每秒24帧
    this.isStatic = Array.isArray(showStaticList);
    this.isUnmount = false;
    this.flags = flags;
    if (!window.apngCache) {
      window.apngCache = {};
    }
    if (!window.apngDataCache) {
      window.apngDataCache = {};
    }
    this.trans = !!trans;
  }
  componentDidMount() {
    this.getImgData();
  }
  reset = (nextProps: EasyfaProps) => {
    const {
      src = [],
      rate = 1.0,
      autoPlay = false,
      style = {},
      className = "",
      canvasStyle = {},
      canvasClassName = ""
    } = nextProps;
    const srcList = typeof src === "string" ? [src] : src;
    this.stop();
    this.apngList = [];
    this.playerList = [];
    this.canvasList = [];
    this.player = null;
    this.isPlay = false;
    this.setState(
      {
        src: srcList,
        rate,
        autoPlay,
        style,
        className,
        canvasStyle,
        canvasClassName,
        loadDone: false,
        showLayer: 0
      },
      () => {
        this.getImgData();
      }
    );
  };
  changeLayer = (layerIndex: number) => {
    if (this.isStatic) {
      const { staticImg } = this.state;
      staticImg[layerIndex] &&
        this.setState({
          showLayer: layerIndex
        });
    } else if (this.canvasList[layerIndex]) {
      this.stop();
      this.player = this.playerList[layerIndex];
      this.setState({
        showLayer: layerIndex
      });
    }
  };
  play = (round?: number) => {
    if (!this.player) return;
    this.player.play(round);
    this.isPlay = true;
  };
  one = () => {
    this.play(1);
  };
  pause = () => {
    if (!this.player) return;
    this.player.pause();
    this.isPlay = false;
  };
  stop = () => {
    if (!this.player) return;
    this.player.stop();
    this.isPlay = false;
  };
  end = () => {
    if (!this.player) return;
    this.player.end();
  };
  getImgData = async () => {
    const {
      onLoad,
      onLoopStart,
      onLoopEnd,
      onEnd,
      autoPlayTimes,
      cache = false
    } = this.props;
    const { rate, src, autoPlay, showLayer, showStatic } = this.state;
    //纯静态img模式
    if (this.isStatic) {
      const staticImgList: string[] = [];
      const p = src.map(async (item, index) => {
        let apngItem = null;
        if (cache && window.apngCache[item]) {
          apngItem = window.apngCache[item];
        } else {
          const data = await getImgBuffer(item);
          apngItem = this.apngList[index] = parseAPNG(data);
          window.apngCache[item] = apngItem;
        }
        if (
          apngItem instanceof Error ||
          (apngItem as ErrNotAPNG).error instanceof Error
        ) {
          return (staticImgList[index] = item);
        }
        const frames = (apngItem as APNG).frames;
        const sIndex = showStatic[index] || showStatic[0];
        let startIndex =
          Math.abs(sIndex) >= frames.length
            ? 0
            : sIndex >= 0
            ? sIndex
            : frames.length + sIndex;
        const showImg = frames.slice(startIndex, startIndex + 1)[0];
        const staticImg = URL.createObjectURL(showImg.imageData);
        return (staticImgList[index] = staticImg);
      });
      Promise.all(p).then(() => {
        if (this.isUnmount) return;
        this.setState({
          staticImg: staticImgList,
          loadDone: true
        });
        onLoad && onLoad();
      });
    } else if (this.flags) {
      console.log("1", this.flags);
      const bufferList = await Promise.all(
        src.map(async (item, index) => await getImgBuffer(item))
      );
      console.log(bufferList);
    } else {
      //动静混合canvas模式
      const p = src.map(async (item, index) => {
        let apngItem = null;
        if (cache && window.apngCache[item]) {
          apngItem = window.apngCache[item];
        } else {
          const data = await getImgBuffer(item);
          apngItem = this.apngList[index] = parseAPNG(data);
          window.apngCache[item] = apngItem;
        }
        const canvasItem = this.canvasList[index];
        //错误检测
        //图片格式不支持(非png)
        if (apngItem instanceof Error) {
          console.log("目前不支持其他类型图片");
          return;
        }
        //非动图apng
        if ((apngItem as ErrNotAPNG).error instanceof Error) {
          const { apngInfo } = apngItem as ErrNotAPNG;
          canvasItem.width = apngInfo.width;
          canvasItem.height = apngInfo.height;
          const ctx = canvasItem.getContext("2d");
          const imgElement = document.createElement("img");
          imgElement.crossOrigin = "anonymous";
          imgElement.src = item;
          imgElement.onload = function() {
            ctx.clearRect(0, 0, canvasItem.width, canvasItem.height);
            ctx.drawImage(imgElement, 0, 0);
          };
          return;
        }
        //创建canvas播放器
        canvasItem.width = (apngItem as APNG).width;
        canvasItem.height = (apngItem as APNG).height;
        const p = await (apngItem as APNG).getPlayer(
          canvasItem.getContext("2d")
        );
        this.playerList[index] = p;
        this.playerList[index].playbackRate = rate;
        if (autoPlay && index === showLayer) {
          if (autoPlayTimes > 0) {
            this.playerList[index].play(autoPlayTimes);
          } else {
            this.playerList[index].play();
          }
        }
        this.playerList[index].on("play", () => {
          this.isPlay = true;
        });
        this.playerList[index].on("stop", () => {
          this.isPlay = false;
        });
        this.playerList[index].on("loopStart", () => {
          onLoopStart && onLoopStart();
        });
        this.playerList[index].on("loopEnd", () => {
          onLoopEnd && onLoopEnd();
        });
        this.playerList[index].on("end", () => {
          onEnd && onEnd();
        });
      });
      Promise.all(p).then(() => {
        if (this.isUnmount) return;
        this.setState({
          loadDone: true
        });
        this.player = this.playerList[showLayer];
        onLoad && onLoad();
      });
    }
  };
  checkDiff = (nextProps: EasyfaProps) => {
    const propsObj: PropsObj = {};
    let changedState = ["style", "className", "canvasStyle", "canvasClassName"];
    changedState = changedState.filter(
      (key: string) =>
        nextProps[key] && this.jsonStringDiff(nextProps[key], this.state[key])
    );
    if (changedState.length > 0) {
      changedState.forEach((key: string) => {
        propsObj[key] = nextProps[key];
      });
      this.setState({
        ...propsObj
      });
    }
  };
  jsonStringDiff = (obj1: object | string, obj2: object | string) => {
    return JSON.stringify(obj1) !== JSON.stringify(obj2);
  };
  componentWillReceiveProps(nextProps: EasyfaProps) {
    const nextSrc = nextProps.src;
    const parsePropsSrc = Array.isArray(nextSrc) ? nextSrc.join("") : nextSrc;
    const parseStateSrc = this.state.src.join("");
    if (parseStateSrc !== parsePropsSrc) {
      this.reset(nextProps);
    } else {
      this.checkDiff(nextProps);
    }
  }
  componentWillUnmount() {
    this.isUnmount = true;
    if (this.player) {
      this.player.stop();
      this.player._apng = null;
    }
  }
  render() {
    const {
      style,
      className,
      canvasStyle,
      canvasClassName,
      src,
      showLayer,
      staticImg,
      staticStyle,
      loadDone
    } = this.state;
    return (
      <div className={`easyfa-canvas-box ${className}`} style={style}>
        {this.isStatic && staticImg.length > 0
          ? staticImg.map((item, index) => (
              <img
                key={index}
                src={item}
                className={`${canvasClassName} ${
                  index === showLayer && loadDone
                    ? `easyfa-img-show${this.trans ? "-t" : ""}`
                    : ""
                } easyfa-img${this.trans ? "-t" : ""}`}
                style={{ ...staticStyle, ...canvasStyle }}
              />
            ))
          : src.map((item, index) => (
              <canvas
                key={index}
                ref={dom => (this.canvasList[index] = dom)}
                style={canvasStyle}
                className={`${canvasClassName} ${
                  index === showLayer && loadDone
                    ? `easyfa-canvas-show${this.trans ? "-t" : ""}`
                    : ""
                } easyfa-canvas${this.trans ? "-t" : ""}`}
              />
            ))}
      </div>
    );
  }
}

export default Easyfa;
