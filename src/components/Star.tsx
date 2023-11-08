import React from "react";

type StarProps = {
    selected: boolean
}

export function Star(props: StarProps) {

    if (props.selected) {
        return <span className="stars"><strong>*</strong></span>
    } else {
        return <span className="stars">*</span>
    }

}