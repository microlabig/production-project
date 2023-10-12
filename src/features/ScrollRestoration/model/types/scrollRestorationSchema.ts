export type ScrollSchema = Record<string, number>; // <адрес страницы, позиция скролла>

export interface ScrollRestorationSchema {
    scroll: ScrollSchema;
}
