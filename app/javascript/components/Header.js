import React from "react"
import waldoImg from "../../assets/images/waldo.png"
import wizardImg from "../../assets/images/wizard.jpg"
import odlawImg from "../../assets/images/odlaw.jpg"
import Svg from "./Checksvg"
import stopWatch from "./Time.js"
import { useState, useEffect } from "react"



const Header = (props) => {
  const {gameOn, setGameOn, waldo, wizard, odlaw} = props
  const [timer, setTimer] = useState(-1)

  useEffect(() => {
    let interval = true
    if (gameOn) {
      interval = setTimeout(() => {
        setTimer(timer + 1)
      }, 1000)
    }

    return () => {
      console.log('the component unmounted')
      clearTimeout(interval)}
  }, [timer])
    
  let showTimer = () => {
    return (
      <div>{stopWatch(timer)}</div>
    )
    // if (gameOn)
    
  }

  let displaySvg = (character) => {
    if (character) {
      return (
        <Svg />
      )
    }
    
  }

  let showInstructions = () => {
    if (!gameOn) {
      return (
        <div className="instructions-container">
          <p>There are 3 popular Where's Waldo characters hidden throughout the map. Click on them to identify them! Try to go as fast as you can. Input your name if you'd like, to get on the High Scores list. Press Start to begin!</p>
          <button type="button" onClick={() => {setGameOn(true) 
            setTimer(0)}}>Start</button>
          
      </div>
      )
    }
  }

  return (
    <header>
      <div className="title-container">
        <h1>Where's Waldo?</h1>
      </div>

      <div className="characters-container">
        <div className="character-container">
          <img id="waldo" src={waldoImg} />
          {displaySvg(waldo)}
          
        </div>
        <div className="character-container">
          <img src={wizardImg} />  
          {displaySvg(wizard)}
        </div>
        <div className="character-container">
          <img src={odlawImg} /> 
          {displaySvg(odlaw)} 
        </div>
      </div>

      <div className="timer-container">
        <h1>0:02</h1>
      </div>
      
      
    </header>
  )
}

export default Header

// {showInstructions()}
//       {showTimer()}
//       <button onClick={() => setGameOn(false)}>Stop Game</button>