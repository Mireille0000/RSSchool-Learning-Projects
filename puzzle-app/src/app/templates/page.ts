const isEmpty = localStorage.getItem('userInfo') as string;

export default abstract class Page {
  pageWrapper: HTMLDivElement;

  contentWrapper: HTMLDivElement;

  header: HTMLElement;

  constructor() {
    this.pageWrapper = document.createElement('div');
    this.pageWrapper.className = 'page-wrapper';
    this.header = document.createElement('header');
    this.contentWrapper = document.createElement('div');
    this.contentWrapper.className = 'page-content';
  }

  renderPage() {
    return this.pageWrapper;
  }
}
