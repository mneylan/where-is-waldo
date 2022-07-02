import React from "react"

const Instructions = (props) => {
  const {startGame} = props

  return (
    <div className="instructions-container">
      <p className="instructions-text">There are 3 popular <i>Where's Waldo?</i> characters hidden throughout the map.</p> 
      
      <p className="instructions-text">Click on them to identify them! Try to go as fast as you can.</p>
      <p className="instructions-text-hidden">1</p>
      <p className="instructions-text">Input your name if you'd like, to get on the High Scores list.</p> 
      
      <p className="instructions-text">Press START to begin!</p>
      <button className="start-btn" type="button" onClick={startGame}>START</button>
    </div>
  )
}

export default Instructions