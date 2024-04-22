import './style.css';
import App from './app/app.ts';
import Favicon from './app/user-interface/favicon.ts';

const app = new App();
app.render();
const favicon = new Favicon();
favicon.renderFavicon();
