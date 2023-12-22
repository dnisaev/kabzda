import React, {useReducer} from 'react';
import {v1} from "uuid";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, { collapsed: false });

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}} />*/}
            <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type: TOGGLE_CONSTANT})}} />
            { state.collapsed && <AccordionBody/> }
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>== {props.title} ==</h3>
    )
}

function AccordionBody() {
    const store = [
        {id: v1(), title: 'Mother'},
        {id: v1(), title: 'Father'},
        {id: v1(), title: 'Brother'},
        {id: v1(), title: 'Sister'},
        {id: v1(), title: 'Son'}
    ];
    return (
        <ul>
            {
                store.map(s=>{
                    return <li key={s.id}>{s.title}</li>
                })
            }
        </ul>
    )
}

export default UncontrolledAccordion;