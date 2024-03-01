import AppLoader from './appLoader';
import { ResponseNews } from '../types/index';
import { ResponseSources } from '../types';
declare class AppController extends AppLoader {
    getSources(callback: (data: ResponseSources) => void): void;
    getNews(e: Event, callback: (data: ResponseNews) => void): void;
}
export default AppController;
