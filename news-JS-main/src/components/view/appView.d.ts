import News from './news/news';
import Sources from './sources/sources';
import { ResponseSources } from '../types';
import { ResponseNews } from '../types';
export declare class AppView {
    news: News;
    sources: Sources;
    constructor();
    drawNews(data: ResponseNews): void;
    drawSources(data: ResponseSources): void;
}
export default AppView;
