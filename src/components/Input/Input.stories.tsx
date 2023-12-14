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
};
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
};

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onChangehandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value);
    }
    return (
        <input value={parentValue} onChange={onChangehandler} />
    )
};
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChangehandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.checked);
    }
    return (
        <input type={'checkbox'} checked={parentValue} onChange={onChangehandler} />
    )
};
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const onChangehandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value);
    }
    return (
        <select value={parentValue} onChange={onChangehandler}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'1'}>Moscow</option>
            <option value={'1'}>Kiev</option>
        </select>
    )
};
export const ControlledInputWithFixedValue = () => <input value={"Hello, World!"}/>;