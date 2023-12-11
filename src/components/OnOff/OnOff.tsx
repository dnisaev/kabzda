import React from 'react';

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const OnOff = (props: PropsType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white",
        cursor: "pointer"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: props.on ? "white" : "red",
        cursor: "pointer"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    };

    const onHandler = () => props.onChange(true);
    const offHandler = () => props.onChange(false);

    return (
        <div>
            <div style={onStyle} onClick={onHandler}>On</div>
            <div style={offStyle} onClick={offHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};