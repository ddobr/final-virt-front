export interface IArticleDto {
    id: number;
    text: string;
    /** парсить через new Date(createdDate) */
    createdDate: string;
}