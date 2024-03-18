import RoundData from '../interfaces/data-interfaces.ts';

export async function getJsonData(request: Request | string): Promise<RoundData> {
  const response = await fetch(request);
  const roundDataJson = await response.json();
  return roundDataJson;
}

const dataOne = await getJsonData(
  'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel1.json',
);
const dataTwo = await getJsonData(
  'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel2.json',
);
const dataThree = await getJsonData(
  'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel3.json',
);
const dataFour = await getJsonData(
  'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel4.json',
);
const dataFive = await getJsonData(
  'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel5.json',
);
const dataSix = await getJsonData(
  'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel16json',
);

const dataArr = [dataOne, dataTwo, dataThree, dataFour, dataFive, dataSix];

// for (let i = 1; i < 7; i += 1) {
//   const data = await http(
//     `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel${i}.json`,
//   );
//   dataArr.push(data);
// }

export const dataToExport = dataArr;
