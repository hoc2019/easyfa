/*
 * @Author: wangzongyu
 * @Date: 2020-03-23 19:48:33
 * @LastEditors: wangzongyu
 * @LastEditTime: 2020-04-26 17:57:00
 * @Description:
 * @FilePath: \easyfa\src\utils\imgTool.ts
 */
export function getImgBuffer(url: string): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "arraybuffer";
    xhr.timeout = 10000;
    xhr.onload = function () {
      if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
        resolve(this.response);
      } else {
        reject(new Error("apng动图获取失败"));
      }
    };
    xhr.ontimeout = function () {
      reject(new Error("apng图片获取失败"));
    };
    xhr.send();
  });
}
