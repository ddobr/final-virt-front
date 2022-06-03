import { useCallback, useEffect, useState } from "react"
import { IArticleDto, api } from "./api";
import { Article, CreateArticle, Header } from "./components";

import styles from './app.component.module.scss';


export const App: React.FC = () => {
  const [articleList, setArticleList] = useState<IArticleDto[]>([]);
  const [isError, setIsError] = useState(false);

  const fetchArticles = useCallback(() => {
    setIsError(false);

    api.getAllArticles().catch(() => {
      setIsError(true);

      return [];
    }).then((res) => {
      setArticleList(res);
    });
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return <main className={styles.main}>
    <Header />
    <div className={styles.main__list}>
    <CreateArticle onSubmit={fetchArticles} />
    { isError && <p>oops... there's an error</p>}
    {
      articleList && articleList.map((article: IArticleDto) => <Article onDelete={fetchArticles} key={article.id} article={article}/>)
    }
    {
      articleList.length === 0 && <p>no posts yet XD</p>
    }
    </div>
  </main>
}