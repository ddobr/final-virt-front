import { useCallback, useRef, useState } from 'react';
import { api } from '../../api';
import { Button } from '../button/button.component';
import styles from './create-article.component.module.scss';


interface Props {
    onSubmit?: (text: string) => void
}
export const CreateArticle: React.FC<Props> = ({
    onSubmit
}) => {

    const [text, setText] = useState('');
    const textarea = useRef<HTMLTextAreaElement>(null);
    const fileUploader = useRef<HTMLInputElement>(null);

    const typeHandler = useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
        setText((e.nativeEvent.target as any).value);
        (e.nativeEvent.target as any).style.height = '0px';
        (e.nativeEvent.target as any).style.height = `${Math.max((e.nativeEvent.target as any).scrollHeight, 50)}px`
    }, []);

    
    const resetHandler = useCallback(() => {
        textarea.current!.value = '';
        fileUploader.current!.value = '';
        setText('');
    }, []);

    const submitHandler = useCallback(() => {
        let file: File | undefined = undefined;

        if (fileUploader.current?.files?.[0]) {
            file = fileUploader.current.files[0]
        }

        api.createArticle(text, file).then(() => {
            onSubmit && onSubmit(text);
        });

        resetHandler();
    }, [onSubmit, text, resetHandler]);

    return <div className={styles.createArticle}>
        <pre><h1>NEW POST 🍌</h1></pre>
        <textarea ref={textarea} onInput={(e) => typeHandler(e)} placeholder='Type something...' className={styles.createArticle__textarea} />
        <input ref={fileUploader} type={'file'} accept='.img,.png'/>
        <div className={styles.createArticle__buttons}>
            <Button onClick={submitHandler} text='Submit' />
            <Button onClick={resetHandler} text='Reset' secondary/>
        </div>

    </div>
}