import type { Meta } from '@storybook/react';
import {UncontrolledRating} from './UncontrolledRating';
import {action} from "@storybook/addon-actions";

const meta: Meta<typeof UncontrolledRating> = {
    component: UncontrolledRating,
};

export default meta;

const onChangeHandler = action('click!!!');

export const EmptyUncontrolledRating = () => <UncontrolledRating defaultValue={0} onChange={onChangeHandler}/>
export const UncontrolledRating1 = () => <UncontrolledRating defaultValue={1} onChange={onChangeHandler}/>
export const UncontrolledRating2 = () => <UncontrolledRating defaultValue={2} onChange={onChangeHandler}/>
export const UncontrolledRating3 = () => <UncontrolledRating defaultValue={3} onChange={onChangeHandler}/>
export const UncontrolledRating4 = () => <UncontrolledRating defaultValue={4} onChange={onChangeHandler}/>
export const UncontrolledRating5 = () => <UncontrolledRating defaultValue={5} onChange={onChangeHandler}/>