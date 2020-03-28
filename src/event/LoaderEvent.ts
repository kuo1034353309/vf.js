export default class LoaderEvent {
    /**
     * 在对所有已接收数据进行解码并将其放在 Loader 对象的 data 属性中以后调度。
     */
    public static COMPLETE:'complete' = 'complete';

    /**
     * 当对 Loader.load() 的调用尝试通过 HTTP 访问数据时调度。
     */
    public static HTTP_STATUS:'httpStatus' = 'httpStatus';

    /**
     * 若对 Loader.load() 的调用导致致命错误并因此终止了下载，则进行调度。
     */
    public static ERROR:'error' = 'error';

    /**
     * 在调用 Loader.load() 方法之后开始下载操作时调度。
     */
    public static START:'start' = 'start';

    /**
     * 在调用 Loader.load() 方法之后开始下载操作时调度。
     */
    public static PROGRESS:'progress' = 'progress';

    /**
     * 在调用 Loader.close() 方法之后调度。
     */
    public static CLOSE:'close' = 'close';

    /**
     * 私有接口
     * @private {string}
     */
    public static GETBACK:'getback' = 'getback';

}
