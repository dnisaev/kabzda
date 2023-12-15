import React from 'react';
// import styles from "../Rating/Select.module.css";

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}
export function Select(props: SelectPropsType) {
    return (
        <div>
            <div>{}</div>
            {props.items.map((item, index) => {
                return <div key={index}>{item.title}</div>})
            }
        </div>
    )
}