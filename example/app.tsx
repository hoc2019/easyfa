import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Easyfa from '../src/index';

import apngPic from './apic1.png';

class App extends React.Component {
    apngcom: Easyfa = null;
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
    render() {
        return (
            <div>
                <div className="control-box">
                    <Easyfa
                        ref={com => (this.apngcom = com)}
                        src={apngPic}
                        autoPlay={true}
                    />
                    ,
                    <div className="btn-box">
                        <button onClick={this.apngPlay}>play</button>
                        <button onClick={this.apngPlayOne}>play once</button>
                        <button onClick={this.apngPause}>pause</button>
                        <button onClick={this.apngStop}>stop</button>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('example'));
