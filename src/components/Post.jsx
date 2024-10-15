import styles from './Post'

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/lucasceciliano.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Lucas Ceciliano</strong>
                        <span>Web & Mobile Developer</span>
                    </div>
                </div>

                <time title="15 de Outubro às 20:18" dateTime="2024-10-15 20:18:33">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>texto</p>
            </div>

        </article>
    );
}