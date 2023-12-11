import type { Meta } from '@storybook/react';
import {Rating, RatingValueType} from './Rating';
import {useState} from "react";

const meta: Meta<typeof Rating> = {
    component: Rating,
};

export default meta;

export const RatingDemo = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3);

    return <Rating value={ratingValue} onClick={setRatingValue}/>
}
export const EmptyRating = () => <Rating value={0} onClick={()=>{}}/>
export const Rating1 = () => <Rating value={1} onClick={()=>{}}/>
export const Rating2 = () => <Rating value={2} onClick={()=>{}}/>
export const Rating3 = () => <Rating value={3} onClick={()=>{}}/>
export const Rating4 = () => <Rating value={4} onClick={()=>{}}/>
export const Rating5 = () => <Rating value={5} onClick={()=>{}}/>