import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";


export function App() {

    let [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(3);
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)
    let [switchOn, setSwitchOn] = useState(false)

    return (
        <div className={'mainWrapper'}>
            <OnOff on={switchOn} onChange={setSwitchOn}/> {switchOn.toString()}
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       changeCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            {/*<UncontrolledAccordion titleValue={"Uncontrolled Menu"}/>*/}
            {/*<UncontrolledRating/>*/}
        </div>
    );
}
