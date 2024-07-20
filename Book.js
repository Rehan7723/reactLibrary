import React from "react";
import styles from '../style/styled.module.css';
function Book()
{
    return(
        <div className={styles.contain}>
            <div className={styles.book}>
                <p>Author: F.Scott Fitzgerald</p>
                <p>Year: 1925</p>
                <p>Genere: Fiction</p>
                <div className={styles.cover}>
                <p>The Great Gatsby</p>
                </div>
            </div>
            <div className={styles.book}>
                <p>Author: Harper Lee</p>
                <p>Year: 1960</p>
                <p>Genere: Fiction</p>
                <div className={styles.cover}>
                <p>To Kill a Mockingbird</p>
                </div>
            </div>
            <div className={styles.book}>
                <p>Author: George Orwell</p>
                <p>Year: 1949</p>
                <p>Genere: Dystopian</p>
                <div className={styles.cover}>
                <p>1984</p>
                </div>
            </div>
            <div className={styles.book}>
                <p>Author: Herman Melville</p>
                <p>Year: 1851</p>
                <p>Genere: Adventure</p>
                <div className={styles.cover}>
                <p>Moby Dick</p>
                </div>
            </div>
            <div className={styles.book}>
                <p>Author: Jane Austen</p>
                <p>Year: 1813</p>
                <p>Genere: Romance</p>
                <div className={styles.cover}>
                <p>Pride and Prejudice</p>
                </div>
            </div>
        </div>
    );
}
export default Book;