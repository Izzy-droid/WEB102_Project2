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

  const handleRandom = () => {
    setCurrentIndex(Math.floor(Math.random() * flashcards.length));
  };
 //next index card
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
   setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length)% flashcards.length);
  };
  //flipping card here:
  const [isFlipped, setIsFlipped] = useState(false);
    const flipCard = () => {
        setIsFlipped(!isFlipped);
  
    };
   const [wronginput, setwronginput] = useState();
   
  const [userInput, setuserInput] = useState('');
  const handleInputChange = (e) => {
    setuserInput(e.target.value);
    
    }
    
   const handleSubmit = (e) => {
     e.preventDefault()
     if(userInput === flashcards[currentIndex].answer){
      setwronginput(false);

     }
     else{
      setwronginput(true);
     }
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
       {/*make input wrong on toggle when answer isnt right*/}
      <div className="arrange-input">
        <form onSubmit={handleSubmit}>
           <label htmlFor="inputquestion" id="inputquestion">Guess what it is?: </label>
           <input type="text" id="inputtext" onChange={handleInputChange} value={userInput} className={`${wronginput === true ? 'inputwrong': wronginput === false ? 'correct': ''}`} />
           &nbsp;
           &nbsp;
           <input id="submit-btn"type="submit" value="Submit"  /> 
        </form>
      </div>

      
      <div className="arrange-btn">
          <button className="move-btn"  onClick={handlePrev}> ← </button>
          &nbsp;
          <button className="move-btn" onClick={handleNext}> → </button>
          &nbsp;
          &nbsp;
          &nbsp;
          <button className="move-btn" onClick={handleRandom}> Shuffle Cards</button>
        </div>
   
       
     </div>
      
    
  )
}


export default App
