export function getImgBuffer(url: string): Promise<ArrayBuffer> {
  // if (cache && !window.apngCache) {
  //   window.apngCache = {};
  // }
  return new Promise((resolve, reject) => {
    // if (cache && window.apngCache && window.apngCache[url]) {
    //   resolve(window.apngCache[url]);
    // } else {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "arraybuffer";
    xhr.onload = function() {
      if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
        // if (cache) {
        //   window.apngCache[url] = this.response;
        // }
        resolve(this.response);
      } else {
        reject(new Error("图片获取失败"));
      }
    };
    xhr.send();
    // }
  });
}
