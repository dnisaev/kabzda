import React from "react";

type StarPropsType = {
    selected: boolean
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5 | undefined) => void
    value?: 0 | 1 | 2 | 3 | 4 | 5 | undefined
    onClick?: () => void
}

export function Star(props: StarPropsType) {
    return <span className={"star"} onClick={() => {
        props.setValue(props.value)
    }}>{props.selected ? <b>star </b> : "star "}</span>
}