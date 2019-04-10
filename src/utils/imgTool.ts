export function getImgBuffer(url: string): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function() {
            if (
                xhr.readyState === 4 &&
                (xhr.status === 200 || xhr.status === 304)
            ) {
                resolve(this.response);
            } else {
                reject(new Error('图片获取失败'));
            }
        };
        xhr.send();
    });
}
