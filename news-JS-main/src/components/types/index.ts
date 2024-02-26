export interface Params {
    apiKey: string | undefined;
    category?: string;
    language?: string;
    country?: string;
}

export interface SourcesInterface {
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
    sources: SourcesInterface[];
}

// Everything

export interface ResponseNews {
    // Everything
    status: 'error' | 'ok' | number;
    code?: string;
    message?: string;
    totalResults: number;
    articles: NewsInfo[];
}

export interface NewsInfo {
    // EverythingInfo 
    source: SourcesNews;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface SourcesNews extends NewsInfo {
    // EverythingSources
    id: string;
    name: string;
    key: string;
}
