import News from './news/news';
import Sources from './sources/sources';
import { ResponseSources } from '../types/index';
import { ResponseNews } from '../types/index';
export declare class AppView {
    news: News;
    sources: Sources;
    constructor();
    drawNews(data: ResponseNews): void;
    drawSources(data: ResponseSources): void;
}
export default AppView;
