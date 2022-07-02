import React from "react"
import waldoImg from "../../assets/images/waldo.png"
import wizardImg from "../../assets/images/wizard.jpg"
import odlawImg from "../../assets/images/odlaw.jpg"

import {stopWatch} from "./Time.js"
import { useEffect } from "react"



const Header = (props) => {
  const {gameOn, setGameOn, gameOver, timer, setTimer, waldo, wizard, odlaw} = props
  
  
  
  useEffect(() => {
    
    let interval 
    if (gameOn) {
      interval = setTimeout(() => {
        setTimer(timer + 1)
      }, 1000)

    } 
    

    return () => {
      
      clearTimeout(interval)}
      
  }, [timer])
    


  return (
    <header>
      <div className="title-container">
        <h1>Where's Waldo?</h1>
      </div>

      <div className="characters-container">
        <div className="character-container" style={{opacity: waldo ? '1' : '0.2'}}>
          <img id="waldo" src={waldoImg} />
          
          
        </div>
        <div className="character-container" style={{opacity: wizard ? '1' : '0.2'}}>
          <img src={wizardImg} />  
          
        </div>
        <div className="character-container" style={{opacity: odlaw ? '1' : '0.2'}}>
          <img src={odlawImg} /> 
           
        </div>
      </div>

      <div className="timer-container">
        <h1>{stopWatch(timer)}</h1>
      </div>
      
      
    </header>
  )
}

export default Header

