## v0.5.3

> 版本号最后一位是奇数代表测试版本，非稳定版本

> 本次更新可能会出现兼容问题

1. 增加场景按需加载，通过配置json中的`loadMode:single`,开启场景按需下载。 后续通过设置场景的`assets`字段设置当前场景所用到的所有资源项

        ```
           //场景资源预加载模式 “single|all”
        "loadMode":"single",
        "scenes":[
            {
                "id":80,//场景的id
                "libId":36,//自定义组件的id
                "assets": [0, 3, 8, 11], // 资源ID
            }
        ]
        ```

1. 增加接口 `onSceneLoad(): void;` 场景加载前触发，通过监听onSceneLoad、onSceneCreate 可动态设置loading相关操作

1. 增加接口 `switchToSceneIndex(index: number, transition?: ITransitionData): void;` ，当配置场景按需加载后，可通过switchToSceneId，switchToSceneIndex切换场景，switchToSceneIndex索引从0开始

    ```
    createVF(option,player=>{
        player.play(src);
        player.switchToSceneIndex(2); //跳转到第3个场景
    })

    ```

1. 兼容 iOS 8 设备

1. 性能优化

> 下述更新会影响兼容性，根据下述说明调整程序

1. 默认自定义组件 `custom` 取消触摸鼠标事件，需手动开启，可通过设置 `interactabled:true` 开启

1. 更新布局方式，当元素为 visible = false 时，布局失效，位置与大小不会被带入计算。 默认的值为显示设定的值


1. 帧率设置 `frameRate`

    ```
    createVF({frameRate:24},player=>{

    })

    ```
