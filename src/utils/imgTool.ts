declare global {
  interface Window {
    apngCache: any;
  }
}
export function getImgBuffer(
  url: string,
  cache: boolean
): Promise<ArrayBuffer> {
  if (cache && !window.apngCache) {
    window.apngCache = {};
    console.log("开启缓存模式");
  }
  return new Promise((resolve, reject) => {
    if (cache && window.apngCache && window.apngCache[url]) {
      console.log(`使用${url}缓存`);
      resolve(window.apngCache[url]);
    } else {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.responseType = "arraybuffer";
      xhr.onload = function() {
        if (
          xhr.readyState === 4 &&
          (xhr.status === 200 || xhr.status === 304)
        ) {
          if (cache) {
            window.apngCache[url] = this.response;
          }
          resolve(this.response);
        } else {
          reject(new Error("图片获取失败"));
        }
      };
      xhr.send();
    }
  });
}
