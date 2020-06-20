export function dataURLtoBlob(dataurl: string) {
    let arr = dataurl.split(',') as any[];
    let mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

export function getObjectURL(base64: string) {
    const data = URL.createObjectURL(dataURLtoBlob(base64));
    return data;
}

export function compatible(base64: string) {
   
    if(vf.utils.getSystemInfo().os.name === 'iOS') {
        const osVersion = parseFloat(vf.utils.getSystemInfo().os.version);
        if(osVersion < 9){
            return getObjectURL(base64);
        }
    }
    return base64;
}