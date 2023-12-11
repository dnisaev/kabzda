import type {Meta, StoryObj} from '@storybook/react';
import UncontrolledAccordion from './UncontrolledAccordion';

const meta: Meta<typeof UncontrolledAccordion> = {
    component: UncontrolledAccordion,
};

export default meta;

type Story = StoryObj<typeof UncontrolledAccordion>;
export const UncontrolledAccordionDemoStory: Story = {
    args: {
        titleValue: "Uncontrolled Accordion Demo Story",
    }
};

export const UncontrolledAccordionDemo = () => <UncontrolledAccordion titleValue={"Accordion Demo"}/>;