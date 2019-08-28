<h1 align='center'>
  Easyfa
</h1>
<p align='center'>
  简单的帧动画解决方案，将apng动图解析通过canvas播放，并实现事件和控制的react组件（apng动图解析基于<a href='https://github.com/davidmz/apng-js'>apng-js</a>修改）。 <a href="https://hoc2019.github.io/easyfa/">DEMO地址</a>
</p>
<p align='center'>
  <a href='https://www.npmjs.com/package/easyfa'>
    <img src='https://img.shields.io/npm/v/easyfa.svg' alt='Latest npm version'>
  </a>
  <a href='https://opensource.org/licenses/mit-license.php'>
    <img src='https://badges.frapsoft.com/os/mit/mit.svg?v=103' alt='MIT License'>
  </a>
   <a href='https://github.com/ellerbrock/typescript-badges/'>
    <img src='https://badges.frapsoft.com/typescript/code/typescript.svg?v=101' alt='Typescript'>
  </a>
</p>

### 使用方式

```bash
npm install easyfa --save
# or
yarn add easyfa
```

```js
import React, { Component } from 'react'
import Easyfa from 'easyfa'
import apng1 from '../images/apng1.png'

class App extends Component {
  render () {
    return <Easyfa src={apng1} />
  }
}
```

<!-- Demo page: [`https://cookpete.com/react-player`](https://cookpete.com/react-player) -->

### 属性

| 属性              | 描述                                                                                                                                                         | 类型           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| `src`             | 图片地址（目前只支持动图apng和静态png），直接引入或者使用网络地址<br />（canvas绘制图片会有跨域问题，非同源图片需设置CORS）。                                | `array|string` |
| `showStatic`      | 静态模式，以img标签展示动图中的某一帧，如果本身就是静图则直接展示<br />,（目前是不可逆操作，无法通过修改src变回动图模式，除了changeLayer其他实例方法失效）。 | `array|number` |
| `rate`            | 播放速率默认值为1，数值增大播放速度加快，数值减少播放速度减慢，数值必须大于0                                                                                 | `number`       |
| `style`           | 外层盒子样式                                                                                                                                                 | `object`       |
| `canvasStyle`     | 内层canvas元素样式                                                                                                                                           | `object`       |
| `className`       | 外层盒子样式类名                                                                                                                                             | `string`       |
| `canvasClassName` | 内层canvas样式类名                                                                                                                                           | `string`       |
| `autoPlay`        | 图片加载后是否自动播放（循环播放），默认false                                                                                                                | `boolean`      |
| `autoPlayTimes`   | 自动播放次数，不传为循环播放                                                                                                                                 | `number`       |

> PS.改变src会解析加载动图并刷新，此方法切换图片会出现闪烁，可通过src传入数组，并通changeLayer方法切换指定图层来实现。

> showStatic详细参数说明：支持数字和数字数组，数字或长度为1的数组表示所有图层应用同一序号的帧，多个数字则和图层对应，分别展示不同的序号的真。1表示第一帧，依次类推，-1表示倒数第一帧，依次类推，绝对值超出数组长度按第一帧处理。

### 回调属性

 | 属性        | 描述                                       |
 | ----------- | ------------------------------------------ |
 | onLoad      | 图片加载解析成功动画可以播放时回调         |
 | onEnd       | 动画播放结束时回调                         |
 | onLoopStart | 循环播放动画每次动画播放开始第一帧时会调   |
 | onLoopEnd   | 循环播放动画每次动画播放结束最后一帧时会调 |

### 实例方法

通过[`ref`](https://facebook.github.io/react/docs/refs-and-the-dom.html) 拿到Easyfa组件实例调用

 | 方法        | 描述                                    | 参数                                                                     |
 | ----------- | --------------------------------------- | ------------------------------------------------------------------------ |
 | play        | 播放动画                                | 可传入一个数字控制播放次数，<br>不传为循环播放                           |
 | one         | 播放一次动画，相当于play(1)             | -                                                                        |
 | pause       | 暂停动画（停在当前帧）                  | -                                                                        |
 | stop        | 停止动画（重回第一帧）                  | -                                                                        |
 | end         | 此次循环播完后停止（停在最后一帧）      | -                                                                        |
 | changeLayer | 当src传入为数组时，此方法可显示指定图层 | 传入一个数字，显示数组中对应的<br>图层（对应数组坐标），无加载<br>闪烁。 |

### TODO
- [x] demo页面
- [ ] 代码注释完善
- [ ] 单元测试
- [ ] 展示指定帧数页面
- [ ] gif动图支持
