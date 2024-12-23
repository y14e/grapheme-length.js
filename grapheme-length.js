// grapheme-length [20240922b]
String.prototype.graphemeLength = function () {
  return [...new Intl.Segmenter().segment(this)].length;
};