import { threadId } from "worker_threads";

export class LmgUtil {
  static imgList: Record<string, string> = {};
  static loadAllLmg() {
    const imgMap = import.meta.globEager("../assets/img/**/*.png");
    let absolutePath: string = "";
    let imgName: string = "";
    for (let relativePath in imgMap) {
      absolutePath = imgMap[relativePath].default;
      if (absolutePath) {
        imgName = absolutePath.substring(absolutePath.lastIndexOf("/") + 1);
        this.imgList[imgName] = absolutePath;
      }
    }
    console.log(this.imgList);
  }
}
