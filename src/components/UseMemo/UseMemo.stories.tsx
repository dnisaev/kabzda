import React, {useMemo, useState} from 'react';

export default {
    title: 'UseMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState(11)
    const [b, setB] = useState(13)

    let resultA
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while(fake < 100000000) {
                fake++
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={e => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={e => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}