import axios from "axios";
import { IArticleDto } from "./models/article.dto";

class ApiService {
    private _server = axios.create({
        baseURL: `http://${process.env.REACT_APP_URL}`
    });

    public getAllArticles(): Promise<IArticleDto[]> {
        return this._server.get<IArticleDto[]>('article').then((response) => response.data);
    }

    public createArticle(text: string, img?: File): Promise<number> {
        const formData = new FormData();
        formData.append('text', text);
        if (img) {
            formData.append('img', img)
        }

        return this._server.post<number>('article', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(resp => resp.data);
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
