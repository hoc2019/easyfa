import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Easyfa from '../src/index';

import apngPic from './apic1.png';
console.log('ddddd', apngPic);

ReactDOM.render(
    <Easyfa src={apngPic} autoPlay={true} />,
    document.getElementById('example')
);
