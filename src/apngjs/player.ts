import { EventEmitter } from "events";
import { APNG, Frame } from "./structs";

export default class extends EventEmitter {
  context: CanvasRenderingContext2D;
  playbackRate = 1.0;
  _delayStop: boolean = false;
  _apng: APNG;
  _prevFrame: Frame;
  _prevFrameData: ImageData;
  _currentFrameNumber = 0;
  _ended = false; //结束
  _paused = true; //暂停
  _numPlays = 0; //真实播放次数
  _requestTimer = 0;
  _playRound = -1; //设定播放次数
  hasPerformance: boolean;
  _startFrame = -1;
  _endFrame = -1;
  _json?: { [key: string]: any };

  /**
   * @param {APNG} apng
   * @param {CanvasRenderingContext2D} context
   * @param {boolean} autoPlay
   */
  constructor(
    apng: APNG,
    context: CanvasRenderingContext2D,
    autoPlay: boolean,
    json: object
  ) {
    super();
    this._apng = apng;
    this.context = context;
    this.stop();
    this.hasPerformance = typeof performance !== "undefined";
    this._json = json;
    if (autoPlay) {
      this.play();
    }
    console.log("j", json);
  }

  /**
   *
   * @return {number}
   */
  get currentFrameNumber() {
    return this._currentFrameNumber;
  }

  /**
   *
   * @return {Frame}
   */
  get currentFrame() {
    return this._apng.frames[this._currentFrameNumber];
  }

  renderNextFrame() {
    let addTimes = false;
    const nextFrameNumber =
      (this._currentFrameNumber + 1) % this._apng.frames.length;
    this._currentFrameNumber =
      nextFrameNumber === 0 && this._startFrame >= 0
        ? this._startFrame
        : nextFrameNumber;
    if (this._startFrame > 0 && this._endFrame > 0) {
      if (this._currentFrameNumber >= this._endFrame) {
        this._currentFrameNumber = this._startFrame - 1;
        addTimes = true;
        this._numPlays++;
        if (this._numPlays === this._playRound) {
          this._ended = true;
        }
      }
    }
    !this._paused && this._currentFrameNumber === 0 && this.emit("loopStart"); //动画第一帧消息
    if (this._currentFrameNumber === this._apng.frames.length - 1) {
      this.emit("loopEnd"); //动画最后一帧消息
      !addTimes && this._numPlays++;
    }

    if (this._prevFrame && this._prevFrame.disposeOp == 1) {
      this.context.clearRect(
        this._prevFrame.left,
        this._prevFrame.top,
        this._prevFrame.width,
        this._prevFrame.height
      );
    } else if (this._prevFrame && this._prevFrame.disposeOp == 2) {
      this.context.putImageData(
        this._prevFrameData,
        this._prevFrame.left,
        this._prevFrame.top
      );
    }

    const frame = this.currentFrame;
    this._prevFrame = frame;
    this._prevFrameData = null;
    if (frame.disposeOp == 2) {
      this._prevFrameData = this.context.getImageData(
        frame.left,
        frame.top,
        frame.width,
        frame.height
      );
    }
    if (frame.blendOp == 0) {
      this.context.clearRect(frame.left, frame.top, frame.width, frame.height);
    }

    this.context.drawImage(frame.imageElement, frame.left, frame.top);
  }

  // playback

  get paused() {
    return this._paused;
  }

  get ended() {
    return this._ended;
  }

  play(round?: number, flags?: string[]) {
    if (round < 1) return;
    this.playFrame(round, flags);
  }

  one() {
    this.playFrame(1);
  }

  playFrame(round = Infinity, flags?: string[]) {
    console.log(flags);
    if (!this._paused) return;
    if (round !== this._playRound || this._ended) {
      this.stop();
    }
    this._numPlays === 0 &&
      this._currentFrameNumber === 0 &&
      this.emit("loopStart"); //动画第一帧消息
    this.emit("play");
    if (this._json && flags) {
      [this._startFrame, this._endFrame] = this._json[flags[0]];
      this._currentFrameNumber = this._startFrame - 1;
    }

    this._playRound = round;
    this._delayStop = false;
    this._paused = false;
    let performance = this.hasPerformance ? window.performance : Date; // supports ios8 Safari
    let nextRenderTime =
      performance.now() + this.currentFrame.delay / this.playbackRate;
    const length = this._apng.frames.length || 0;
    const tick = (now: number) => {
      const _now = this.hasPerformance ? now : Date.now(); // supports ios8 Safari
      if (this._ended || this._paused) {
        return;
      }
      if (_now >= nextRenderTime) {
        do {
          console.log(
            "playFrame",
            this._numPlays,
            this._playRound,
            this._numPlays >= this._playRound || this._delayStop,
            this._currentFrameNumber,
            this._endFrame - 1,
            this._currentFrameNumber === this._endFrame - 1
          );
          if (
            (this._numPlays >= this._playRound || this._delayStop) &&
            (this._ended || this._currentFrameNumber === length - 1)
          ) {
            this.emit("end"); //非手动播放结束
            this.stop(true);
            return;
          }
          this.renderNextFrame();
          nextRenderTime += this.currentFrame.delay / this.playbackRate;
        } while (!this._ended && _now > nextRenderTime);
      }
      this._requestTimer = requestAnimationFrame(tick);
    };
    this._requestTimer = requestAnimationFrame(tick);
  }

  pause() {
    if (!this._paused) {
      this.emit("pause");
      this._paused = true;
    }
  }

  stop(stopEnd: boolean = false) {
    this.emit("stop");
    this._numPlays = 0;
    this._ended = false;
    this._paused = true;
    cancelAnimationFrame(this._requestTimer); //终止requestAnimationFrame回调
    if (!stopEnd) {
      //默认停止播放回到第一帧
      this._currentFrameNumber = -1;
      this.context.clearRect(0, 0, this._apng.width, this._apng.height);
      this.renderNextFrame();
    }
  }
  end() {
    this._delayStop = true;
  }
}
