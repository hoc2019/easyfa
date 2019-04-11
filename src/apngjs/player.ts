import { EventEmitter } from 'events';
import { APNG, Frame } from './structs';

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

    /**
     * @param {APNG} apng
     * @param {CanvasRenderingContext2D} context
     * @param {boolean} autoPlay
     */
    constructor(
        apng: APNG,
        context: CanvasRenderingContext2D,
        autoPlay: boolean
    ) {
        super();
        this._apng = apng;
        this.context = context;
        this.stop();
        this.hasPerformance = typeof performance !== 'undefined';
        if (autoPlay) {
            this.play();
        }
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
        this._currentFrameNumber =
            (this._currentFrameNumber + 1) % this._apng.frames.length;
        !this._paused &&
            this._currentFrameNumber === 0 &&
            this.emit('loopStart'); //动画第一帧消息
        if (this._currentFrameNumber === this._apng.frames.length - 1) {
            this.emit('loopEnd'); //动画最后一帧消息
            this._numPlays++;
            //根据image图片动画播放次数控制
            // if (
            //     this._apng.numPlays !== 0 &&
            //     this._numPlays >= this._apng.numPlays
            // ) {
            //     this.emit('end');
            //     this._ended = true;
            //     this._paused = true;
            // }
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
            this.context.clearRect(
                frame.left,
                frame.top,
                frame.width,
                frame.height
            );
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

    play(round?: number) {
        if (round < 1) return;
        this.playFrame(round);
    }

    one() {
        this.playFrame(1);
    }

    playFrame(round = Infinity) {
        if (!this._paused) return;
        if (round !== this._playRound || this._ended) {
            this.stop();
        }
        this._numPlays === 0 &&
            this._currentFrameNumber === 0 &&
            this.emit('loopStart'); //动画第一帧消息
        this.emit('play');
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
                    if (
                        (this._numPlays >= this._playRound ||
                            this._delayStop) &&
                        (this._ended || this._currentFrameNumber === length - 1)
                    ) {
                        this.emit('end'); //非手动播放结束
                        this.stop(true);
                        return;
                    }
                    this.renderNextFrame();
                    nextRenderTime +=
                        this.currentFrame.delay / this.playbackRate;
                } while (!this._ended && _now > nextRenderTime);
            }
            this._requestTimer = requestAnimationFrame(tick);
        };
        this._requestTimer = requestAnimationFrame(tick);
    }

    pause() {
        if (!this._paused) {
            this.emit('pause');
            this._paused = true;
        }
    }

    stop(stopEnd: boolean = false) {
        this.emit('stop');
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
