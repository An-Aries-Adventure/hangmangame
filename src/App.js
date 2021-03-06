
import './App.css';
import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import PopUp from "./components/PopUp";
import Notification from "./components/Notification";
import {show} from './helpers/helpers.js';


const words = ['application', 'programming', 'interface', 'wizard','cheese', 'string', 'pizza'];

let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {

  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setshowNotificaiton] = useState(false);
 

  useEffect(() => {
  const handleKeyDown = event =>{
    const {key, keyCode} = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
  
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setshowNotificaiton)
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);

          } else {
            show(setshowNotificaiton)
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [correctLetters, wrongLetters, playable]);
  
function playAgain() {
 setPlayable(true)
setCorrectLetters([])
setWrongLetters([])
const random = [Math.floor(Math.random() * words.length)];
selectedWord = words[random];
}





  return (
    <>
    <div className ="wrapper">
     <Header/>
     <div className="game-container">
       <Figure wrongLetters = {wrongLetters}/> 
       <WrongLetters wrongLetters = {wrongLetters}/>
       <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
     </div>
     <PopUp correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord}setPlayable = {setPlayable} playAgain={playAgain}/>
       <Notification showNotification={showNotification}/>
    </div>
    </>
    
  );
}

export default App;
