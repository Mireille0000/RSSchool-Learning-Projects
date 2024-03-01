import News from './news/news';
import Sources from './sources/sources';
import { ResponseSources, SourcesInterface } from '../types/index';
import { ResponseNews, NewsInfo } from '../types/index';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ResponseNews) {
        const values: NewsInfo[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ResponseSources) {
        const values: SourcesInterface[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
