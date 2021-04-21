import {useState} from 'react';

export default function Counter() {
    // const state = useState(0); // 0 es el valor inical
    // const count = state [0];
    // const setCound = state(1);
    const [count, setCount] = useState(0);

    const handleClick = function (evento) {
        setCount(count+1);
    };

    const resetCount = function (evento) {
        setCount(0);
        //si queremos que no pase de 10 if ( count < 10){
        //     setCount(count+1)
        // }
    };
    return (
        <div>
            <p>Has Hecho click {count} veces</p>
            <button onClick={handleClick}>Hazme click</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={() => setCount (count-1)}>Baja</button>
        </div>
    )
}
