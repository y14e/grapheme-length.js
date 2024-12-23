// grapheme-length [20240922b]
String.prototype.graphemeLength = function () {
  return [...new Intl.Segmenter().segment(this)].length;
};

console.log('computer'.graphemeLength());
console.log('ｺﾝﾋﾟｭｰﾀｰ'.graphemeLength());
console.log('ｼﾞｮｺﾋﾞｯﾁ'.graphemeLength());
console.log('ふんがふんが'.graphemeLength());
console.log('👩‍❤️‍👩'.graphemeLength());
console.log('👨‍🦰'.graphemeLength());
console.log('🐻'.graphemeLength());