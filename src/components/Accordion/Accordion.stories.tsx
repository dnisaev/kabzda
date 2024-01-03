import type {Meta} from '@storybook/react';
import {Accordion} from './Accordion';
import React, {useState} from "react";
import {action} from '@storybook/addon-actions'
import {v1} from "uuid";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

const changeCollapsedHandler = action('collapsed!!!');
const onClickHandler = action('clicked!!!');

const accordionStore = [
    {title: 'First', value: v1()},
    {title: 'Second', value: v1()},
    {title: 'Third', value: v1()},
    {title: 'Black', value: v1()},
    {title: 'White', value: v1()},
    {title: 'Green', value: v1()}
];

export const AccordionDemo = () => {
    const [accordionCollapsed, setAccordionCollapsed] = useState(false);
    return <Accordion titleValue={"Accordion Demo"}
                      collapsed={accordionCollapsed}
                      changeCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
                      items={accordionStore}
                      onClick={onClickHandler}/>
};
export const OpenedAccordion = () => {
    return <Accordion titleValue={"Opened Accordion"}
                      collapsed={false}
                      changeCollapsed={changeCollapsedHandler}
                      items={accordionStore}
                      onClick={onClickHandler}/>
};
export const CollapsedAccordion = () => {
    return <Accordion titleValue={"Collapsed Accordion"}
                      collapsed={true}
                      changeCollapsed={changeCollapsedHandler}
                      items={accordionStore}
                      onClick={onClickHandler}/>
};