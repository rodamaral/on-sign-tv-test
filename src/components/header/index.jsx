import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>
                OnSign TV Temperature App
            </h2>
        </header>
    )
}
