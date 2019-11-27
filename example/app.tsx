import * as React from "react";
import * as ReactDOM from "react-dom";
import Easyfa from "../src/index";

import apngPic1 from "./apic1.png";
// // import apngPic2 from './apic2.png';
// import png from "./png.png";
import koala from "./koala.png";

const imgList = [[koala], [apngPic1]];

interface AppState {
  layerIndex: 0;
  imgList: any[];
  showIndex: number;
  roundNum: number;
}

class App extends React.Component {
  apngcom: Easyfa = null;
  state: AppState = {
    layerIndex: 0,
    imgList,
    showIndex: 0,
    roundNum: 1
  };
  apngPlay = () => {
    this.apngcom.play();
  };
  apngRoundPlay = () => {
    const { roundNum } = this.state;
    this.apngcom.play(roundNum);
  };
  apngPlayOne = () => {
    this.apngcom.one();
  };
  apngPause = () => {
    this.apngcom.pause();
  };
  apngStop = () => {
    this.apngcom.stop();
  };
  apngEndStop = () => {
    this.apngcom.end();
  };
  changeImg = () => {
    let { showIndex, imgList } = this.state;
    if (showIndex >= imgList.length - 1) {
      showIndex = 0;
    } else {
      showIndex += 1;
    }
    this.setState({
      showIndex
    });
  };
  changeLayer = () => {
    const { layerIndex } = this.state;
    const index = Math.abs(layerIndex - 1);
    this.setState(
      {
        layerIndex: index
      },
      () => {
        this.apngcom.changeLayer(index);
      }
    );
  };
  handleLoad = () => {
    // console.log("动图加载完成");
  };
  handleLoopStart = () => {
    // console.log("动画播放到第一帧");
  };
  handleLoopEnd = () => {
    // console.log("动画播放到最后一帧");
  };
  handleEnd = () => {
    // console.log("动画结束");
  };
  handleChangeRoundNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = e.target.value;
    this.setState({
      roundNum: num
    });
  };
  render() {
    const { imgList, showIndex, roundNum } = this.state;
    return (
      <div>
        <div className="control-box">
          <Easyfa
            style={{
              top: "50px",
              position: "absolute",
              width: "200px",
              height: "200px"
            }}
            ref={(com: Easyfa) => (this.apngcom = com)}
            src={imgList[showIndex]}
            rate={1}
            onLoad={this.handleLoad}
            onEnd={this.handleEnd}
            onLoopStart={this.handleLoopStart}
            onLoopEnd={this.handleLoopEnd}
            autoPlay={true}
          />
          <div className="btn-box" style={{ marginTop: "100px " }}>
            <button onClick={this.apngPlay}>循环播放</button>
            <button onClick={this.apngPlayOne}>播放一次</button>
            <button onClick={this.apngPause}>暂停</button>
            <button onClick={this.apngStop}>立即停止</button>
            <button onClick={this.apngEndStop}>播完停止</button>
            <button onClick={this.changeImg}>改变图片</button>
            <button onClick={this.changeLayer}>改变图层</button>
            <button onClick={this.apngRoundPlay}>
              播放任意次数（{roundNum}次）
            </button>
            <label htmlFor="roundInput" />
            <input
              id="roundInput"
              type="number"
              onChange={this.handleChangeRoundNum}
              value={roundNum}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("example"));
