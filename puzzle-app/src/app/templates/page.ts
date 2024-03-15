const isEmpty = localStorage.getItem('userInfo') as string;

export default abstract class Page {
  pageWrapper: HTMLDivElement;

  constructor() {
    this.pageWrapper = document.createElement('div');
    this.pageWrapper.className = 'page-wrapper';
  }

  renderPage() {
    return this.pageWrapper;
  }
}
