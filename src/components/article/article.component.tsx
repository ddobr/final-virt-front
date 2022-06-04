import { useState } from 'react';
import { api, IArticleDto } from '../../api';
import styles from './article.component.module.scss';

/**
 * Компонента статьи
 */
interface Props {
    /** Статья */
    article: IArticleDto,
    onDelete?: () => void,
}
export const Article: React.FC<Props> = ({
    article,
    onDelete
}) => {

    const date = new Date(article.createdDate);
    const [isHovered, setIsHovered] = useState(false);

    const clickDeleteHandler = () => {
        api.deleteArticle(article.id).then(() => {
            onDelete && onDelete();
        })
    }

    return <section className={styles.article}>
        <pre className={styles.article__id}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={clickDeleteHandler}
        >
            {
                !isHovered && <>ID:{article.id}</>
            }
            {
                isHovered && <>DELETE???</>
            }
        </pre>
        { article.imgSrc && <img className={styles.article__img} src={article.imgSrc} alt={''}/>}
        <div dangerouslySetInnerHTML={{
            __html: article.text.replace(/(http[s]?:\/\/[^\s]+)/g, "<a href='$1'>$1</a>")
        }} />
        <b className={styles.article__date}>{formatNumber(date.getDate())}.{formatNumber(date.getMonth() + 1)}.{date.getFullYear()}</b>
    </section>
}

function formatNumber(number: number): string {
    if (number < 10) {
        return `0${number}`;
    }

    return number.toString();
}