export interface IArticleDto {
    id: number;
    text: string;
    /** парсить через new Date(createdDate) */
    createdDate: string;

    /** Ссылка на объект в бакете */
    imgSrc: string | null;
}