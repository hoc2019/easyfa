import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Easyfa from '../src/index';

import apngPic1 from './apic1.png';
import apngPic2 from './apic2.png';

const imgList = [apngPic1, apngPic2];

interface AppState {
    imgList: string[];
    showIndex: number;
}

class App extends React.Component {
    apngcom: Easyfa = null;
    state: AppState = {
        imgList,
        showIndex: 0
    };
    apngPlay = () => {
        this.apngcom.play();
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
        this.apngcom.changeLayer(1);
    };
    render() {
        const { imgList, showIndex } = this.state;
        return (
            <div>
                <div className="control-box">
                    <Easyfa
                        style={{ top: '50px' }}
                        ref={com => (this.apngcom = com)}
                        src={imgList}
                        rate={1}
                        autoPlay={false}
                    />
                    <div className="btn-box">
                        <button onClick={this.apngPlay}>play</button>
                        <button onClick={this.apngPlayOne}>play once</button>
                        <button onClick={this.apngPause}>pause</button>
                        <button onClick={this.apngStop}>stop</button>
                        <button onClick={this.apngEndStop}>end stop</button>
                        <button onClick={this.changeImg}>change</button>
                        <button onClick={this.changeLayer}>change layer</button>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('example'));
