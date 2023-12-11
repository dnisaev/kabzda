import React, {useState} from 'react';
import {Star} from "../Star";

export type UncontrolledRatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type UncontrolledRatingType = {
    defaultValue?: UncontrolledRatingValueType
    onChange: (value: UncontrolledRatingValueType) => void
};

export function UncontrolledRating(props: UncontrolledRatingType) {

    let [value, setValue] = useState<UncontrolledRatingValueType>(props.defaultValue ? props.defaultValue : 0);

    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue(1); props.onChange(1)}}/>
            <Star selected={value > 1} setValue={() => {setValue(2); props.onChange(2)}}/>
            <Star selected={value > 2} setValue={() => {setValue(3); props.onChange(3)}}/>
            <Star selected={value > 3} setValue={() => {setValue(4); props.onChange(4)}}/>
            <Star selected={value > 4} setValue={() => {setValue(5); props.onChange(5)}}/>
        </div>
    )
}

