import React from 'react';
import {useState} from 'react';
import './App.css';

function Flipping({}){
    const [isFlipped, setIsFlipped] = useState(false);
    const flipCard = () => {
        setIsFlipped(!isFlipped);
        
    }
}
export default Flipping;