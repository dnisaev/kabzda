import type {Meta} from '@storybook/react';
import UncontrolledOnOff from './UncontrolledOnOff';
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof UncontrolledOnOff> = {
    component: UncontrolledOnOff,
};

export default meta;

const OnOffModeHandler = action('switch!!!');

export const UncontrolledOnOffDemo = () => <UncontrolledOnOff onChange={OnOffModeHandler}/>;