import React, {useState} from 'react';
import {Star} from "../Star";

export function UncontrolledRating() {

    let [value, setValue] = useState(1)

    return (
        <div>
            <Star selected={value > 0} setValue={()=>setValue(1)} />
            <Star selected={value > 1} setValue={()=>setValue(2)} />
            <Star selected={value > 2} setValue={()=>setValue(3)} />
            <Star selected={value > 3} setValue={()=>setValue(4)} />
            <Star selected={value > 4} setValue={()=>setValue(5)} />
        </div>
    )
}

