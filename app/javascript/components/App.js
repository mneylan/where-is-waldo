import React from "react"
import Board from "./Board.js"
import Header from "./Header.js"
import HighScore from "./HighScore.js"
import { useState, useEffect } from "react"

const App = () => {

  const [gameOn, setGameOn] = useState(false)
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
    
    setXStyle(event.nativeEvent.offsetX)
    setYStyle(event.nativeEvent.offsetY)

    let x = adjustWidth(parseInt(event.nativeEvent.offsetX), waldoWidth)
    let y = adjustHeight(parseInt(event.nativeEvent.offsetY), waldoHeight)

    setAdjustedX(x)
    setAdjustedY(y)

    // console.log(`Board Width: ${waldoWidth}  Board Height: ${waldoHeight} -------- x: ${x}  y: ${y}`)

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

  let allFound = () => {
    if (waldoFound && wizardFound && odlawFound) {
      console.log('you found all of them!')
    }
  }
  
  return (
    <div>
      <Header gameOn={gameOn}setGameOn={setGameOn}waldo={waldoFound} wizard={wizardFound} odlaw={odlawFound}/>
      <Board gameOn={gameOn} dropDownStatus={dropDown} selectCharacter={selectCharacter} adjustedX={adjustedX} adjustedY={adjustedY} xStyle={xStyle} yStyle={yStyle} setWaldoFound={setWaldoFound} setWizardFound={setWizardFound} setOdlawFound={setOdlawFound}/>
      {allFound()}
      <HighScore />
      <p>Running in {process.env.NODE_ENV}</p>  
    </div>
  )
}

export default App