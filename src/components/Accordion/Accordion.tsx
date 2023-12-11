import React from 'react';
import styles from './Accordion.module.css';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    changeCollapsed: () => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} changeCollapsed={props.changeCollapsed}/>
            {!props.collapsed && <AccordionBody/>}
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

function AccordionBody() {
    return (
        <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
        </ul>
    )
}

export default Accordion;