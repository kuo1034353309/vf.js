# v0.5.61

> 本次更新可能会出现兼容问题

1. 修改 pivotX，pivotY 机制，旧版本不改变位置，新版本设置后改变原始位置。
1. 圆形（Circle） `anchorX` , `anchorY` 取值设置范围修改为0-1。
1. 圆形增加属性 `startAngle`,`endAngle` 用于绘制圆弧，[参考示例](https://vipkid-edu.github.io/vf-docs/gui/circle.html#%E7%A4%BA%E4%BE%8B)。
1. 修复多引擎版本加载异常。
1. 修复音频在 `useNativeAudio` 中的取值异常。
1. 修复音频暂停时，触发`ended`事件。
1. 修改音频'timeupdate'事件，增加负数倒计时。
1. 修复 ConnectLine 组件，延迟设置线条颜色失效。
1. 修改 stage.stageHeight 、stage.stageWidth 属性为获取 `Canvas` 宽高。
1. 删除 `transform`的脏刷新。

1. 布局属性触发修改：
    1. 删除 x.x,x.y 布局触发，增加 x.style.left,x.style.top 布局触发
    1. 删除 x.ScaleX,x.ScaleY 布局触发，增加 x.style.ScaleX,x.style.ScaleY 布局触发
    1. 删除 x.skewX,x.skewY 布局触发，增加 x.style.skewX,x.style.skewY 布局触发
    1. 删除 x.pivotX,x.pivotY 布局触发，增加 x.style.pivotX,x.style.pivotY 布局触发
    1. 删除 x.rotation 布局触发，增加 x.style.rotation 布局触发
    1. 增加 x.style.BackgroundColor 布局触发

### 更新脏刷新与布局机制
解决动画与布局的相关影响，本次修改后，由于动画是直接操作transform属性，避免了由动画变化产生的脏刷新与布局触发。

开发时，可根据需求合理使用`transform`、`style`属性，如果无需布局时，多使用`transform`。

刷新机制：

![image](https://vipkid-edu.github.io/vf-docs/assets/img/001.395e4dd8.png)

[图片无法显示点我](https://vipkid-edu.github.io/vf-docs/assets/img/001.395e4dd8.png)
