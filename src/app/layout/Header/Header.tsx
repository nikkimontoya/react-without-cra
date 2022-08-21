import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header>
            <nav className={styles.nav}>It is a navigation bar</nav>
            <div className={styles.headerContainer}>
                <div className="container">
                    <h1>We make lives better</h1>
                </div>
            </div>
        </header>
    );
}
