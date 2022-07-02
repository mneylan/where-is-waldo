import React from "react"
import Board from "./Board.js"
import Header from "./Header.js"
import HighScore from "./HighScore.js"
import { useState, useEffect } from "react"
import Instructions from "./Instructions.js"
import { getGameTime, displayTime } from "./Time.js"

const App = () => {

  const [gameOn, setGameOn] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [playerTime, setPlayerTime] = useState({})
  const [highScores, setHighScores] = useState([])
  const [timer, setTimer] = useState(-1)
  const [dropDown, setDropDown] = useState(false)
  const [adjustedX, setAdjustedX] = useState(0)
  const [adjustedY, setAdjustedY] = useState(0)
  const [xStyle, setXStyle] = useState(0) 
  const [yStyle, setYStyle] = useState(0) 
  const [waldoFound, setWaldoFound] = useState(false)
  const [wizardFound, setWizardFound] = useState(false)
  const [odlawFound, setOdlawFound] = useState(false)

  

  let selectCharacter = (event) => {
    let waldo = event.target
    let waldoHeight = waldo.offsetHeight
    let waldoWidth = waldo.offsetWidth
    let fifteenPercentWidth = waldoWidth - (waldoWidth * .15) 
    let twentyFivePercentWidth = waldoWidth - (waldoWidth * .25)
    let thirtyPercentHeight = waldoHeight - (waldoHeight * .30)
    

    if ((waldoWidth < 580) && (event.nativeEvent.offsetX >= twentyFivePercentWidth)) {
      
      setXStyle(twentyFivePercentWidth)

    } else if ((waldoWidth >= 580) && (event.nativeEvent.offsetX >= fifteenPercentWidth)){
      setXStyle(fifteenPercentWidth)
    } else {
      setXStyle(event.nativeEvent.offsetX)
    }

    if (event.nativeEvent.offsetY >= thirtyPercentHeight) {
      setYStyle(thirtyPercentHeight)
    } else {
      setYStyle(event.nativeEvent.offsetY)
    }
    

    let x = adjustWidth(parseInt(event.nativeEvent.offsetX), waldoWidth)
    let y = adjustHeight(parseInt(event.nativeEvent.offsetY), waldoHeight)

    setAdjustedX(x)
    setAdjustedY(y)

    if (dropDown == false && gameOn == true) {
      setDropDown(true)
    }

    if (dropDown == true && gameOn == true) {
      setDropDown(false)
    }
  }

  let adjustWidth = (xCoord, boardWidth) => {
    let origWidth = 1399
  
    let widthTimesX = origWidth * xCoord
  
    let adjustedXCoord = Math.floor(widthTimesX / boardWidth)
  
    return adjustedXCoord
  }
  
  let adjustHeight = (yCoord, boardHeight) => {
    let origHeight = 787
  
    let heightTimesX = origHeight * yCoord
  
    let adjustedYCoord = Math.floor(heightTimesX / boardHeight)
  
    return adjustedYCoord
  }


  let callApi = async () => {
    let response = await fetch("http://localhost:3000/characters")
    let data = await response.json()
    
    return data
  }

  let getHighScores = async () => {
    let response = await fetch('http://localhost:3000/players')
    let data = await response.json()

    setHighScores(data)
    
  }

  let grabPlayerScore = async () => {
    let data = await callApi()
    
    setPlayerTime({
      start: playerTime.start,
      end: data.time
    })
    
    
  }

  let allFound = () => {
    
    if (waldoFound && wizardFound && odlawFound) {
      
      grabPlayerScore()
      getHighScores()
      let currentTime = parseInt(timer.toString().slice())
      
      setGameOn(false) 
      setGameOver(true)
      let newTime = currentTime.toString().slice()
      setTimer(newTime)
        
     }
  }

  let startGame = () => {
    
    callApi()
    .then(data => setPlayerTime({
      start: data.time
    }))

    setGameOn(true)
    setTimer(0)
    
   
  }

  let restartGame = () => {
    setGameOn(false)
    setGameOver(false)
    setPlayerTime({})
    setHighScores([])
    setTimer(-1)
    setDropDown(false)
    setAdjustedX(0)
    setAdjustedY(0)
    setXStyle(0)
    setYStyle(0)
    setWaldoFound(false)
    setWizardFound(false)
    setOdlawFound(false)
    
  }

  if (gameOn) {
    return (
      <div>
        <Header gameOn={gameOn} setGameOn={setGameOn} timer={timer} setTimer={setTimer} waldo={waldoFound} wizard={wizardFound} odlaw={odlawFound}/>
        <Board gameOn={gameOn} dropDownStatus={dropDown} selectCharacter={selectCharacter} adjustedX={adjustedX} adjustedY={adjustedY} xStyle={xStyle} yStyle={yStyle} setWaldoFound={setWaldoFound} setWizardFound={setWizardFound} setOdlawFound={setOdlawFound} gameOver={gameOver} />
        {allFound()} 
      </div>
    )
  }

  if (gameOver) {
    return (
      <div>
        <Header gameOn={gameOn} setGameOn={setGameOn} gameOver={gameOver} timer={timer} setTimer={setTimer} waldo={waldoFound} wizard={wizardFound} odlaw={odlawFound}/>
        <Board gameOn={gameOn} dropDownStatus={dropDown} highScores={highScores} selectCharacter={selectCharacter} adjustedX={adjustedX} adjustedY={adjustedY} xStyle={xStyle} yStyle={yStyle} setWaldoFound={setWaldoFound} setWizardFound={setWizardFound} setOdlawFound={setOdlawFound} gameOver={gameOver} playerTime={playerTime} restartGame={restartGame}/>
      </div>
    )
  }
  
  return (
    <div>
      <Header gameOn={gameOn} setGameOn={setGameOn} timer={timer} setTimer={setTimer} waldo={waldoFound} wizard={wizardFound} odlaw={odlawFound}/>
      <Instructions startGame={startGame}/>
    </div>
  )
}

export default App

{/* <p>Running in {process.env.NODE_ENV}</p>  */}

