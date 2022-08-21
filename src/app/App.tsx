import React, {useState} from 'react';
import ReactDOM from 'react-dom';

export default function App() {
    const [count, setCount] = useState<number>(0);

    const increaseCount = () => {
        setCount((count) => count + 1);
    }

    return (
        <>
            <header>
                <h1>This is a header</h1>
            </header>
            <main>
                <h2>Main content part</h2>
                <p>Button was clicked {count} times</p>
                <button onClick={increaseCount}>Click me!</button>
            </main>
            <footer>
                <p>Just a simple footer</p>
            </footer>
        </>
    );
}
