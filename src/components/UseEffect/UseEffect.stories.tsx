import React, {useEffect, useState} from 'react'

export default {
    title: 'UseEffect',
}

export const UseEffectExample = () => {
    console.log('UseEffectExample render!!!');
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(0);

    useEffect(() => {
        console.log('useEffect every render');
    },);

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

export const SetTimeoutSetIntervalExample = () => {
    console.log('SetTimeoutExample render');
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(0);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(()=>{
            console.log('setTimeout render')
            document.title = counter.toString()
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };

    }, [counter]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(state => state + 1)
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return <>
        <div>Counter, {counter}</div>
        <div>Fake, {fake}</div>
        <div>Timer, {timer}</div>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        <button onClick={() => setFake(fake + 1)}>fake +</button>
    </>
}