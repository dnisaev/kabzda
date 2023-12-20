import {Select} from "./Select";
import {useState} from "react";

export default {
    component: Select
};

export const WithValue = () => {
    const [value, setValue] = useState('2');
    return <Select value={value}
                   onChange={setValue}
                   items={[
                       {value: '1', title: 'Mother'},
                       {value: '2', title: 'Father'},
                       {value: '3', title: 'Son'},
                   ]}/>
}
export const WithoutValue = () => {
    const [value, setValue] = useState(null);
    return <Select value={value}
                   onChange={setValue}
                   items={[
                       {value: '1', title: 'Mother'},
                       {value: '2', title: 'Father'},
                       {value: '3', title: 'Son'},
                   ]}/>
}

