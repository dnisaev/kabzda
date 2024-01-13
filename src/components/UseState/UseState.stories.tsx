import React, {useState} from 'react'

export default {
    title: 'UseState',
}

function generateData() {
    console.log('generateData render!!!')
    return Math.floor(Math.random() * 1000)
}

export const Example1 = () => {
    console.log('Example1 render!!!');
    const [counter, setCounter] = useState(generateData);
    const changer = (state: number) => state + 1

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        <div>{counter}</div>
    </>
}