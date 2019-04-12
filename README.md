<h1 align='center'>
  Easyfa
</h1>
<p align='center'>
  简单的帧动画解决方案，将apng动图解析通过canvas播放，并实现事件和控制的react组件（apng动图解析基于<a href='https://github.com/davidmz/apng-js'>apng-js</a>修改）
</p>

### 使用方式

```bash
npm install react-player --save
# or
yarn add react-player
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

| 属性              | 描述                                                                                                                           | 类型            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| `src`             | 图片地址（目前只支持动图apng和静态png），直接引入或者使用网络地址<br />,（canvas绘制图片会有跨域问题，非同源图片需设置CORS）。 | `array\|string` |
| `rate`            | 播放速率默认值为1，数值增大播放速度加快，数值减少播放速度减慢，数值必须大于0                                                   | `number`        |
| `style`           | 外层盒子样式                                                                                                                   | `object`        |
| `canvasStyle`     | 内层canvas元素样式                                                                                                             | `object`        |
| `className`       | 外层盒子样式类名                                                                                                               | `string`        |
| `canvasClassName` | 内层canvas样式类名                                                                                                             | `string`        |
| `autoPlay`        | 图片加载后是否自动播放（循环播放），默认false                                                                                  | `boolean`       |

### 回调属性

 | 属性        | 描述                                       |
 | ----------- | ------------------------------------------ |
 | onLoad      | 图片加载解析成功动画可以播放时回调         |
 | onEnd       | 动画播放结束时回调                         |
 | onLoopStart | 循环播放动画每次动画播放开始第一帧时会调   |
 | onLoopEnd   | 循环播放动画每次动画播放结束最后一帧时会调 |

### 实例方法

通过[`ref`](https://facebook.github.io/react/docs/refs-and-the-dom.html) 拿到Easyfa组件实例调用
 | 属性                  | 描述                               | 参数说明 |
 | --------------------- | ---------------------------------- | -------- |
 | `play(round?:number)` | 图片加载解析成功动画可以播放时回调 | 播放次数 |