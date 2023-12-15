import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {v1} from "uuid";

export function App() {
    //const generateValue = v1();
    const accordionStore = [
        {title: 'First', value: v1()},
        {title: 'Second', value: v1()},
        {title: 'Third', value: v1()},
        {title: 'Black', value: v1()},
        {title: 'White', value: v1()},
        {title: 'Green', value: v1()},
        {title: 'Red', value: v1()}
    ];
    const [accordionStoreItems, setAccordionItems] = useState(accordionStore);

    const [ratingValue, setRatingValue] = useState<RatingValueType>(3);
    const [accordionCollapsed, setAccordionCollapsed] = useState(false);
    const [switchOn, setSwitchOn] = useState(false);
    const onClickHandler = (value: any) => {
        console.log(`clicked on item: ${value}`)};

    return (
        <div className={'mainWrapper'}>
            <OnOff on={switchOn} onChange={setSwitchOn}/> {switchOn.toString()}
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       changeCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
                       items={accordionStoreItems}
                       onClick={onClickHandler}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            {/*<UncontrolledAccordion titleValue={"Uncontrolled Menu"}/>*/}
            {/*<UncontrolledRating/>*/}
        </div>
    );
}
