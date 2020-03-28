export default class LoaderDataFormat {
    /**
     * [静态] 指定以原始二进制数据形式接收下载的数据。
     * @type {string}
     */
    public static BINARY: string = 'binary'

    /**
     * [静态] 指定以 JONS 对象形式接收下载的数据。
     * @type {string}
     */
    public static JSON: string = 'json'

    /**
     * [静态] 指定以文本形式接收已下载的数据。
     * @type {string}
     */
    public static TEXT: string = 'text'

    /**
     * [静态] 指定以DOM树形式接收已下载的数据。
     * @type {string}
     */
    public static DOCUMENT: string = 'document'

    /**
     * [静态] 指定以 ZIP 对象形式接收下载的数据。
     * @type {string}
     */
    public static ZIP: string = 'zip'

}