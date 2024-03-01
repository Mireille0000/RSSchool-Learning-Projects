// Types

export type GenericOptions = {
    [sources: string]: string;
};

export type Endpoint = 'everything' | 'sources' | 'top-headlines';

// Everything, request parameters
export interface ParamsEverything {
    apiKey?: string;
    q?: string;
    searchIn?: 'title' | 'description' | 'content';
    sources?: string;
    domains?: string;
    excludeDomains?: string;
    from?: string;
    to?: string;
    language?: string;
    sortBy?: string;
    pageSize?: number; //100
    page?: number; // 1
}

// Top headlines, request parameters

export interface ParamsTopHeadlinesSources {
    apiKey: string | undefined;
    country?: string;
    category?: string;
}

export interface ParamsTopHeadlines extends ParamsTopHeadlinesSources {
    sources: string;
    q?: string;
    pageSize?: number;
    page?: number;
}

// Sources

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

// enum

export enum ProcessEnv {
    API_URL = 'https://rss-news-api.onrender.com/',
    API_KEY = '1f3e05f1ddbe4b90a46d907738b0d0ea',
}

export type Callback<T> = (data: T) => void;

// void | interface(2
// <T> (data?) => T
