
export interface AssetsItem{
    name:string;
    root:string;
    type:string;
    url:string;
}
/**
 * 资源类型
 */
export const enum AssetsType
{
    /** 未知类型 */
    Unknown,
    /** arraybuffer */
    Buffer,
    /** blob */
    Blob,
    /** json */
    Json,
    /** <img/> */
    Image,
    /** <audio/> */
    Audio,
    /**  <video/> */
    Video,
    /** string */
    Text,
}

/**
 * 状态
 */
export const enum AssetsState
{
    NotStarted,
    Loading,
    Complete,
}