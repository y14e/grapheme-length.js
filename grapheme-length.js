function getGraphemeLength(string){
  return [...new Intl.Segmenter().segment(string)].length;
}

export default getGraphemeLength;