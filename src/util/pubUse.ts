const getAssetsFile = function (url:string){
    // console.log('url===============', url);
    // 获取文件夹下所有图片名称
    const files = import.meta.globEager('@/assets/img/**/*.png');
    let AllPics = Object.values(files).map((v) => v.default);
     alert('AllPics===============', files);
    let isExist = 0;
    let imgSrc = '';
    // 遍历所有图片，判断是否存在该url图片
    AllPics.forEach( val => {
      let url2 = url.substring(0, url.indexOf('.'));
      // console.log('url2===============', url2);
      if(val.indexOf(url2) !== -1) {
        isExist += 1;
      }
    });
    // console.log('isExist===============', isExist);
    if (isExist !== 0) {
      // 头像存在
      imgSrc = url;
    } else {
      imgSrc = 'sort.png';
    }
  alert(999)
    // console.log('imgSrc===============', imgSrc);
    return new URL(`./img/${imgSrc}`, import.meta.url).href;
  };
  export default getAssetsFile