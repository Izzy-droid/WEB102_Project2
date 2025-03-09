import React from 'react';

function Flashcard_items({question, question_img, answer}) {
  
  return (
    <>
    
      
      <div  className="card-front">
       <h1>{question}</h1>
       <img src={question_img}></img>
      </div>
      <div className="card-back">
        <p>{answer}</p>
      </div>
      

      

      
      
   
    </>
  );
};

export default Flashcard_items;