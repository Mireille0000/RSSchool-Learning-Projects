import Page from '../templates/page.ts';
import puzzleIncon from '../../images/puzzle1.svg';
import settingsIcon from '../../images/settings.svg';

export default class MainAppPage extends Page {
  // nav bar (hints, sound, settings, icon puzzle ,round/level?)
  // for hints (two divs)
  // puzzle-field
  // line with words
  // buttons 'Check' and 'I don't know'
  // header: HTMLHeadingElement;
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
    const wrapper = document.querySelector('.main-page-wrapper') as HTMLDivElement;
    this.pageWrapper.append(this.header, this.contentWrapper);

    const content = document.querySelector('.page-content') as HTMLDivElement;
    content.className = 'main-content-wrapper';
    const header = document.querySelector('header') as HTMLElement;

    header.append();
    content.append(this.puzzleField, this.words);

    const icon = new Image();
    icon.src = puzzleIncon;
    icon.alt = 'puzzle';

    const settings = new Image();
    settings.src = settingsIcon;
    settings.alt = 'settings';
    settings.className = 'settings';

    header.append(icon, settings);

    // const appField = document.querySelector('.puzzle-field')
  }
}
