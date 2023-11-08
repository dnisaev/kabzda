import React from 'react';
import './App.css';
import image from './images/cat.png';
import {Rating} from "./components/Rating";
import {PageTitle} from "./components/PageTitle";


function App() {
    return (
        <div className="App">
            <div>
                <img src={image} alt={"My name is Cat"}/>
                <PageTitle title={"Hi there!"}/>
                <PageTitle title={"Please vote for the cats App"}/>
                <Rating value={1}/>
                <Rating value={2}/>
                <Rating value={3}/>
                <Rating value={4}/>
                <Rating value={5}/>
            </div>
        </div>
    );
}

export default App;
