import React from 'react';
import styles from './Accordion.module.css';

export type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    changeCollapsed: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue} changeCollapsed={props.changeCollapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    changeCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 className={styles.cursorPointer} onClick={props.changeCollapsed}>== {props.title} ==</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {
                props.items.map((item, index) => {
                    const onClickHandler = () => {
                        props.onClick(item.value)
                    }
                    return <li onClick={onClickHandler} key={index}>{item.title}</li>
                })
            }
        </ul>
    )
}

export default Accordion;