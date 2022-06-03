import axios from "axios";
import { ICreateArticleDto } from "./models";
import { IArticleDto } from "./models/article.dto";

class ApiService {
    private _server = axios.create({
        baseURL: 'http://127.0.0.1:3000'
    });

    public getAllArticles(): Promise<IArticleDto[]> {
        return this._server.get<IArticleDto[]>('article').then((response) => response.data);
    }

    public createArticle(article: ICreateArticleDto): Promise<number> {
        return this._server.post<number>('article', article).then(resp => resp.data);
    }

    public deleteArticle(id: number): Promise<void> {
        return this._server.delete('article', {
            data: {
                id: id
            }
        });
    }
}

export const api = new ApiService();
