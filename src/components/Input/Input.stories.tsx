import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'Input',
    // component: Input,
};

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    };
    return (
        <>
            <input value={value} onChange={onChange}/> - {value}
        </>
    )
}
export const GetValueOfUncontrolledInputByPressButton = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const saveOnClickHandler = () => {
        // const el = document.getElementById('inputId') as HTMLInputElement;
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={saveOnClickHandler}>save</button> - value: {value}
        </>
    )
}
export const ControlledInputWithFixedValue = () => <input value={"Hello, World!"}/>;
