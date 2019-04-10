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

interface EasyfaProps {
    src: string;
    rate?: number;
    autoPlay?: boolean;
    style?: {};
    className?: '';
}
interface EasyfaState {
    src: string;
    rate: number;
    autoPlay: boolean;
    style?: {};
    className?: '';
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
        const {
            src = '',
            rate = 1.0,
            autoPlay = false,
            style = {},
            className = ''
        } = props;
        this.state = {
            src,
            rate,
            autoPlay,
            style,
            className
        };
        this.speed = 1000 / (rate * 24); //1000/24 每秒24帧
    }
    componentDidMount() {
        this.getImgData();
    }
    reset = (nextProps: EasyfaProps) => {
        const {
            src = '',
            rate = 1.0,
            autoPlay = false,
            style = {},
            className = ''
        } = nextProps;
        this.stop();
        this.apng = null;
        this.player = null;
        this.isPlay = false;
        this.setState(
            {
                src,
                rate,
                autoPlay,
                style,
                className
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
        this.isPlay = false;
    };
    stop = () => {
        if (!this.player) return;
        this.player.stop();
        this.isPlay = false;
    };
    one = () => {
        this.player.one();
    };
    end = () => {
        this.player.end();
    };
    getImgData = async () => {
        const { rate, src, autoPlay } = this.state;
        const data = await getImgBuffer(src);
        this.apng = parseAPNG(data);
        //错误检测
        if (this.apng instanceof Error) {
            console.log(this.apng);
            // handle error
            return;
        }
        //创建canvas播放器
        this.canvas.width = this.apng.width;
        this.canvas.height = this.apng.height;
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
        const { style, className } = this.state;
        return (
            <canvas
                ref={dom => (this.canvas = dom)}
                style={style}
                className={className}
            />
        );
    }
}

export default Easyfa;
