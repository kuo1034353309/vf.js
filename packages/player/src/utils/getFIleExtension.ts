/**
 * 获取加载文件的扩展名
 */
export function getFileExtension(url: string){
    const isDataUrl = url.indexOf('data:') === 0;
    let ext = '';

    if (isDataUrl){
        const slashIndex = url.indexOf('/');

        ext = url.substring(slashIndex + 1, url.indexOf(';', slashIndex));
    }else{
        const queryStart = url.indexOf('?');
        const hashStart = url.indexOf('#');
        const index = Math.min(
            queryStart > -1 ? queryStart : url.length,
            hashStart > -1 ? hashStart : url.length
        );

        url = url.substring(0, index);
        ext = url.substring(url.lastIndexOf('.') + 1);
    }

    return ext.toLowerCase();
}