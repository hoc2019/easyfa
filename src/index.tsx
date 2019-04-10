import * as React from 'react';
import parseAPNG from './apngjs/parser';
import { getImgBuffer } from './utils/imgTool';
import { APNG } from './apngjs/structs';
import Player from './apngjs/player';

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

export interface EasyfaProps {
    src: string;
    rate?: number;
    autoPlay?: boolean;
}
export interface EasyfaState {
    src: string;
    rate: number;
    autoPlay: boolean;
}

class Easyfa extends React.Component<EasyfaProps, EasyfaState> {
    apng: APNG | Error = null;
    canvas: HTMLCanvasElement = null;
    player: Player = null;
    timer: number[] = [];
    isPlay: boolean = false;
    hasPerformance: boolean = typeof performance !== 'undefined';
    speed: number = 1000 / 24;
    constructor(props: EasyfaProps) {
        super(props);
        const { src = '', rate = 1.0, autoPlay = false } = props;
        this.state = {
            src,
            rate,
            autoPlay
        };
        this.isPlay = false;
        this.speed = 1000 / (rate * 24); //1000/24 每秒24帧
    }
    componentDidMount() {
        this.getImgData();
    }
    reset = (nextProps: EasyfaProps) => {
        const { src = '', rate = 1.0, autoPlay = false } = nextProps;
        this.stop();
        this.apng = null;
        this.player = null;
        this.timer = [];
        this.isPlay = false;
        this.setState(
            {
                src,
                rate,
                autoPlay
            },
            () => {
                this.getImgData();
            }
        );
    };
    play = () => {
        if (!this.player) return;
        if (!this.player.paused) return;
        this.player.play();
        this.isPlay = true;
    };
    pause = () => {
        if (!this.player) return;
        this.player.pause();
        this.resetPlayState();
        this.isPlay = false;
    };
    stop = () => {
        if (!this.player) return;
        this.player.stop();
        this.resetPlayState();
        this.isPlay = false;
    };
    one = () => {
        if (!this.player) return;
        this.resetPlayState();
        this.player.stop();
        const length = (this.apng as APNG).frames.length || 0;
        this.isPlay = true;
        let performance = this.hasPerformance ? window.performance : Date; // supports ios8 Safari
        let nextRenderTime = performance.now() + this.speed;
        let i = 0;
        const tick = (now: number) => {
            const _now = this.hasPerformance ? now : Date.now(); // supports ios8 Safari
            if (!this.isPlay || i > length - 2) {
                this.isPlay = false;
                return;
            }
            if (_now >= nextRenderTime) {
                this.player.renderNextFrame();
                i++;
                nextRenderTime = performance.now() + this.speed;
            }
            requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };
    resetPlayState = () => {
        if (this.timer.length > 0) {
            this.timer.forEach(item => clearTimeout(item));
            this.timer = [];
        }
    };
    getImgData = async () => {
        const { rate, src, autoPlay } = this.state;
        const data = await getImgBuffer(src);
        this.apng = parseAPNG(data);
        //错误检测
        if (this.apng instanceof Error) {
            // handle error
            console.log(this.apng);
            return;
        }
        //创建图片canvas
        // await this.apng.createImages();
        this.canvas.width = this.apng.width;
        this.canvas.height = this.apng.height;
        //创建canvas播放器
        const p = await this.apng.getPlayer(this.canvas.getContext('2d'));
        this.player = p;
        this.player.playbackRate = rate;
        if (autoPlay) {
            this.player.play();
            this.isPlay = true;
        }
        this.player.on('end', () => {
            this.isPlay = false;
        });
    };
    componentWillReceiveProps(nextProps: EasyfaProps) {
        if (this.state.src !== nextProps.src) {
            this.reset(nextProps);
        }
    }
    componentWillUnmount() {
        if (this.player) {
            this.player.stop();
            this.player._apng = null;
        }
    }
    render() {
        return <canvas ref={dom => (this.canvas = dom)} {...this.props} />;
    }
}

export default Easyfa;
