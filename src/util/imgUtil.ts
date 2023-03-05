import goodStorage from 'good-storage'


export class LmgUtil {
  static imgList: Record<string, string> = {};
  

  static storageLmgList() {
    this.imgList=goodStorage.get('imgList') ||{}
    if (this.isEmpty()) {
      this.loadAllLmg()
      goodStorage.set('imgList',this.imgList)
    }
  }

  static isEmpty() {
    return !Object.getOwnPropertyNames(this.imgList).length
  }

  static loadAllLmg() {
    let absolutePath: string = "";
    let imgName: string = "";
    const imgMap = import.meta.globEager("../assets/img/**/*.png");
    for (let relativePath in imgMap) {
      absolutePath = imgMap[relativePath].default
      if (absolutePath) {
        imgName = absolutePath.substring(absolutePath.lastIndexOf('/') + 1)
        this.imgList[imgName] = absolutePath
      }
    }
  }

  static getLmg(imgName: string) {
    return LmgUtil.imgList[imgName]
  }
}

export default LmgUtil.getLmg