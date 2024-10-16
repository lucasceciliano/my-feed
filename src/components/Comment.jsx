import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css'

export function Comment(props) {
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

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    );
}