import type {Meta, StoryObj} from '@storybook/react';
import { Accordion } from './Accordion';
import React, {useState} from "react";
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;
export const AccordionDemoStory: Story = {
    args: {
        titleValue: "Accordion Demo Story",
        collapsed: true
    }
};

//

const changeCollapsedHandler = action('collapsed!!!');

export const AccordionDemo = () => {
    let [accordionCollapsed, setAccordionCollapsed] = useState(false);
    return <Accordion titleValue={"Accordion Demo"}
                      collapsed={accordionCollapsed}
                      changeCollapsed={()=>setAccordionCollapsed(!accordionCollapsed)}/>
};

export const OpenedAccordion = () => {
    return <Accordion titleValue={"Opened Accordion"}
                      collapsed={false}
                      changeCollapsed={changeCollapsedHandler}/>
};

export const CollapsedAccordion = () => {
    return <Accordion titleValue={"Collapsed Accordion"}
                      collapsed={true}
                      changeCollapsed={changeCollapsedHandler}/>
};