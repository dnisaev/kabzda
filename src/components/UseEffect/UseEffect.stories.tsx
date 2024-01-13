import React, {useEffect, useState} from 'react'

export default {
    title: 'UseEffect',
}

export const Example1 = () => {
    console.log('Example1 render!!!');
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(0);

    useEffect(() => {
        console.log('useEffect every render');
    }, );

    useEffect(() => {
        console.log('useEffect like componentDidMount');
    }, []);

    useEffect(() => {
        console.log('useEffect first render and every counter change');
    }, [counter]);

    return <>
        <div>Counter, {counter}</div>
        <div>Fake, {fake}</div>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
    </>
}