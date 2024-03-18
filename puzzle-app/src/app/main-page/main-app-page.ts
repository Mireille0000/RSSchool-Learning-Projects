import Page from '../templates/page.ts';
import { dataToExport } from '../data/cards-data.ts';
import puzzleIncon from '../../images/puzzle1.svg';
import settingsIcon from '../../images/settings.svg';

export default class MainAppPage extends Page {
  // nav bar (hints, sound, settings, icon puzzle ,round/level?)
  // for hints (two divs)
  // puzzle-field
  // line with words
  // buttons 'Check' and 'I don't know'
  puzzleField: HTMLDivElement;

  puzzleLine: HTMLDivElement;

  puzzle?: HTMLSpanElement;

  words: HTMLDivElement;

  constructor() {
    super();
    this.puzzleField = document.createElement('div');
    this.puzzleField.className = 'puzzle-field';

    this.puzzleLine = document.createElement('div');
    this.puzzleLine.className = 'puzzle-line';

    this.words = document.createElement('div');
    this.words.className = 'words';
  }

  renderMainPage() {
    document.body.append(this.pageWrapper);
    this.pageWrapper.className = 'main-page-wrapper';
    this.pageWrapper.append(this.header, this.contentWrapper);

    const content = document.querySelector('.page-content') as HTMLDivElement;
    content.className = 'main-content-wrapper';
    const header = document.querySelector('header') as HTMLElement;

    const icon = new Image();
    icon.src = puzzleIncon;
    icon.alt = 'puzzle';

    const settings = new Image();
    settings.src = settingsIcon;
    settings.alt = 'settings';
    settings.className = 'settings';

    header.append(icon, settings);
    content.append(this.puzzleField, this.words);

    const line = document.createElement('div');
    line.className = 'line';
    const word = document.createElement('div');
    word.className = 'word';
    const wordInLine = document.createElement('div');
    wordInLine.className = 'word-in-line';

    const firstRound = dataToExport[0];
    const sentence = firstRound.rounds[0].words[0].textExample;
    const arrWords = sentence.split(' ');

    for (let i = 0; i < 11; i += 1) {
      this.puzzleField.appendChild(line.cloneNode(true));
    }
    const linesArr = Array.from(document.querySelectorAll('.line'));

    for (let i = 0; i < arrWords.length; i += 1) {
      this.words.appendChild(word.cloneNode(true));
      linesArr[0].appendChild(wordInLine.cloneNode(true));
    }

    const inLineWordsArr = Array.from(document.querySelectorAll('.word-in-line'));
    const sentenceParts = Array.from(document.querySelectorAll('.word'));
    const randomizedSentence = arrWords.sort(() => Math.random() - 0.5);

    sentenceParts.forEach((item, index) => {
      const wordItem = item;
      wordItem.innerHTML = randomizedSentence[index];

      wordItem.addEventListener('click', () => {
        wordItem.innerHTML = '';
        const wordField = (inLineWordsArr as HTMLDivElement[]).find((el) => !el.innerHTML);
        (wordField as HTMLDivElement).style.setProperty('border', '1px solid #5d5656');
        (wordField as HTMLDivElement).innerHTML = randomizedSentence[index];
      });
    });
  }
}
