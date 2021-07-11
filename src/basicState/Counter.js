import React, { useEffect, useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Counter: {counter}</h1>
                <button onClick={()=> setCounter((prev) => prev + 1)}>Increment</button>
                <button onClick={()=> setCounter((prev) => prev - 1)}>Decrement</button>
            </header>
        </div>
    )
}

export default Counter
