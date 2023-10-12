import { User } from 'entities/User';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'created',
}

export enum ArticleBlockType {
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
    CODE = 'CODE',
}

export interface ArticleBaseBlock {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBaseBlock {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBaseBlock {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBaseBlock {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMIC = 'ECONOMIC',
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export interface Article {
    id: string;
    user: User;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
