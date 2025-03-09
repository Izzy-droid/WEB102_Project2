import React, {useState, useEffect} from 'react';
import './App.css';
import Flashcard_items from './flashcard_list';

const App = () => {
  var flashcards = [
    {
    question:"What is the spanish word for 'to walk'?",
    question_img:'walking.png',
    answer:"caminar",

    },
    {
      question:"What is the spanish word for 'forest'?",
      question_img:'forest.png',
      answer:"bosque",

    },
    {
      question:"What is the spanish word for 'pain'?",
      question_img:'pain.png',
      answer:"dolor",
    },
    {
      question: "what is the spanish word for 'fingers'?",
      question_img:'fingers.png',
      answer:"dedos",
    },
    {
      question:"What is the spanish word for 'teeth'?",
      question_img:'teeth.png',
      answer:'dientes',
    }
  ]
  //randomizing index here:
  const [currentIndex, setCurrentIndex ] = useState(0);
  useEffect(() =>{
    setCurrentIndex(Math.floor(Math.random()*flashcards.length));
  }, [flashcards.length]);

  const handleNext = () => {
    setCurrentIndex(Math.floor(Math.random() * flashcards.length));
  };

  //flipping card here:
  const [isFlipped, setIsFlipped] = useState(false);
    const flipCard = () => {
        setIsFlipped(!isFlipped);
  
    };

  return (
    <div className="App">

      <div className="top-arrange">
        <h1 className="tiny">Learn Spanish!</h1>
        <p>Practice your vocab. and learn a new language.</p>
        <p>Number of cards: 5</p>

      </div>

      
      <div className="card-outer" onClick={flipCard}>
       <div className={`Flash-container ${isFlipped ? 'flipped' : ''}`} >
         <Flashcard_items  question = {flashcards[currentIndex].question} question_img ={flashcards[currentIndex].question_img} answer={flashcards[currentIndex].answer}>
        </Flashcard_items> 
      
        </div>
      </div>

      <div className="arrange-btn">
          <button className="move-btn" > ← </button>
          <button className="move-btn" onClick={handleNext}> → </button>
        </div>
   
       
     </div>
      
    
  )
}


export default App
