import React, {useState} from 'react';
import {Star} from "../Star";

type RatingProps = {
    value: number
}

export function UncontrolledRating(props: RatingProps) {

    let [count, setCount] = useState(props.value)

    return (
        <div>
            <Star selected={count >= 1}/><button onClick={()=>{setCount(1)}}>1</button>
            <Star selected={count >= 2}/><button onClick={()=>{setCount(2)}}>2</button>
            <Star selected={count >= 3}/><button onClick={()=>{setCount(3)}}>3</button>
            <Star selected={count >= 4}/><button onClick={()=>{setCount(4)}}>4</button>
            <Star selected={count >= 5}/><button onClick={()=>{setCount(5)}}>5</button>
        </div>
    )
}

