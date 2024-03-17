import Page from '../templates/page.ts';

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

  constructor() {
    super();
    this.puzzleField = document.createElement('div');
    this.puzzleField.className = 'puzzle-field';

    this.puzzleLine = document.createElement('div');
    this.puzzleLine.className = 'puzzle-line';
  }

  renderMainPage() {
    console.log('Hey');
    document.body.append(this.pageWrapper);
  }
}
