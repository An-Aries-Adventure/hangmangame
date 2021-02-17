import React from 'react'

const PopUp = ({correctLetters, wrongLetters, selectedWord, setPlayable}) => {

  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = "true";
    return (
        // <!-- Container for final message -->
        <div className="popup-container">
          <div className="popup">
            <h2>{finalMessage}</h2>
            <h3 >{finalMessageRevealWord}</h3>
            <button>Play Again</button>
          </div>
        </div>
    )
}

export default PopUp
