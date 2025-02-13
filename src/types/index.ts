
export interface NewsArticle {
    title: string;
    description: string;
    // link: string;
    url: string;
    image_url: string;
    // urlToImage: string;
}

export interface NewsList {
    nextPage: number;
    results: NewsArticle[];
    status: string;
    totalResults: number;
}

