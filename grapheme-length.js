export function getGraphemeLength(a) {
  return [...new Intl.Segmenter().segment(a)].length;
}