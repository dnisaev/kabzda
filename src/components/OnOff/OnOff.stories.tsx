import type { Meta } from '@storybook/react';
import { OnOff } from './OnOff';
import { useState } from "react";
import {action} from "@storybook/addon-actions";
import {StoryObj} from "@storybook/react";

const meta: Meta<typeof OnOff> = {
    component: OnOff,
};

export default meta;
type Story = StoryObj<typeof OnOff>;
export const OnOffDemoStory: Story = {
    args: {
        on: true,
    }
};

export const OnOffDemo = () => {
    let [switchOn, setSwitchOn] = useState(false);
    return (
        <OnOff on={switchOn} onChange={setSwitchOn}/>
    )
};

const OnOffModeHandler = action('switch!!!');
export const OnMode = () => <OnOff on={true} onChange={OnOffModeHandler}/>;
export const OffMode = () => <OnOff on={false} onChange={OnOffModeHandler}/>;