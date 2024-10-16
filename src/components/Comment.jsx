import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css'
import { useState } from 'react';

export function Comment({content, ondeleteComment}) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        ondeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <img src="https://github.com/lucasceciliano.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Ceciliano</strong>
                            <time title='15 de Outubro às 21:00' dateTime="2024-10-15 21:10:30">Há 2h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment} >
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    );
}