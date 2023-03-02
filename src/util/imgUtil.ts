export class LmgUtil {
  static imgList: Record<string, string> = {};
  static loadAllLmg() {
    const imgMap = import.meta.globEager("../../public/assets/img/**/*.png");
    let absolutePath: string = "";
    let imgName: string = "";
    for (const relativePath in imgMap) {
      absolutePath = imgMap[relativePath].default;
      if (absolutePath) {
        imgName = absolutePath.substring(absolutePath.lastIndexOf("/") + 1);
        this.imgList[imgName] = absolutePath;
      }
    }
  }
  static isEmpty() {
    return !Object.getOwnPropertyNames(this.imgList).length;
  }
  static getLmg(imgName: string) {
    return LmgUtil.imgList[imgName];
  }
}
export default LmgUtil.getLmg;
