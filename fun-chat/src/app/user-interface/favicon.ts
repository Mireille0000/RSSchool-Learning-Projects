export default class Favicon {
  link: HTMLLinkElement;

  favicon: HTMLCanvasElement;

  constructor() {
    this.link = document.createElement('link');
    this.favicon = document.createElement('canvas');
    this.favicon.width = 16;
    this.favicon.height = 16;
  }

  renderFavicon() {
    const context = this.favicon.getContext('2d');
    context.arc(95, 50, 40, 0, 2 * Math.PI);
    context.fillStyle = '#d30c62';
    context.fillRect(0, 0, 16, 16);
    context.fillStyle = '#620cd3';
    context.fillRect(4, 4, 8, 8);

    this.link.type = 'image/x-icon';
    this.link.rel = 'shortcut icon';
    this.link.href = this.favicon.toDataURL('image/x-icon');

    document.getElementsByTagName('head')[0].appendChild(this.link);
  }
}
