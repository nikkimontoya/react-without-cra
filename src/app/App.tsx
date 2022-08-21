import React, { useState } from 'react';
import cn from 'classnames';
import { Footer, Header } from './layout';
import styles from './App.module.scss';
import { Button } from './UI';

export default function App() {
    const [count, setCount] = useState<number>(0);

    const increaseCount = () => {
        setCount((c) => c + 1);
    };

    return (
        <>
            <Header />
            <main>
                <div className={cn('container', styles.mainContent)}>
                    <h2>Main content part</h2>
                    <p>Button was clicked {count} times</p>
                    <Button onClick={increaseCount}>Click me!</Button>
                </div>
            </main>
            <Footer />
        </>
    );
}
