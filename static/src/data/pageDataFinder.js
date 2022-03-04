export const getPageData = page => {
  const DATA_URL = '/src/data/';
  const dataUrl = {
    홈: `${DATA_URL}home.json`,
    웹툰: `${DATA_URL}webtoon.json`,
    웹소설: `${DATA_URL}webFiction.json`,
    영화: `${DATA_URL}movie.json`,
    방송: `${DATA_URL}tv.json`,
    책: `${DATA_URL}book.json`
  };

  return dataUrl[page];
};
