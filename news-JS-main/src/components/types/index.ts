export interface Params {
    apiKey: string | undefined;
    category?: string;
    language?: string;
    country?: string;
}

export interface Sources {
    id: string;
    name: string;
    discription: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ResponseSources {
    status: 'ok' | 'error';
    sources: Sources;
}

// news
export interface ResponseNews {
    status: 'ok' | 'error';
    totalResults: number;
    articles: SourcesNews[];
}

export interface SourcesNews {
    id: string | null;
    name: string;
    newsInfo: NewsInfo;
}

export interface NewsInfo {
    source: SourcesNews;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
