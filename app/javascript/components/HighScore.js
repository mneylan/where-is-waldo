import React, { useEffect } from "react"
import { useRef, useState } from "react"
import uniqid from 'uniqid'
import { getGameTime, displayTime } from "./Time"

const HighScore = (props) => {
  const {highScores, playerTime, restartGame} = props
  const highScoreRef = useRef()
  const scoreRef = useRef()
  const nameRef = useRef()
  const errorRef = useRef()
   
  const [width, setWidth] = useState(document.body.clientWidth)
  const [databaseScore, setDatabaseScore] = useState(0)

  useEffect(() => {
    
    function resizeBody() {
      setWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', resizeBody)
    
    return () => {
      window.removeEventListener('resize', resizeBody)
    } 
  })

  useEffect(() => {
    let body = document.body
    if (width <= 600) {
      body.style.minHeight = "calc(100vh + 160px)"
    } else {
      body.style.minHeight = "100vh"
    }
  }, [width])

  useEffect(() => {
    
    if (playerTime.end != null) {
    let scoreForDatabase = getGameTime(playerTime.start, playerTime.end)
    
    setDatabaseScore(scoreForDatabase)
    
    }
  }, [playerTime])

  

  let showHighScores = () => {
    scoreRef.current.style.visibility = "hidden"
    highScoreRef.current.style.visibility = "visible"
  }

  let postToApi = async () => {
    if (nameRef.current.value.length < 2 || nameRef.current.value.length > 24) {
      errorRef.current.style.display = "block"
      nameRef.current.value = ""
      
      return
    }

    let name = nameRef.current.value
    let time = databaseScore

    let data = {
      name, time
    }
    // mode: 'cors'
    
    let response = await fetch(`http://localhost:3000/players`, {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })

    restartGame()
    
  }
  
  return (
    <div className="score-container" ref={highScoreRef}>

      <div className="score-popup" ref={scoreRef}>
        <h2>You found all the characters in {displayTime(databaseScore)}</h2>
        <button onClick={showHighScores}>OK</button>
      </div>

      <div className="score-title-container">
        <h1>High Scores</h1>
        
      </div>

      <div className="score-grid-container">
        {highScores.map(player => {
        return (
          <React.Fragment key={uniqid()}>
            <div className="score-grid-item" >
              <h2>{player.name}</h2>
            </div>
          
            <div className="score-grid-item">
              <h2>{displayTime(player.time)}</h2>
            </div>

          </React.Fragment> 
          
        )
      })}
      
      </div>

      <div className="enter-name-container">
        <div className="enter-flex-item1">
          <h2 className="name">Name</h2>
          <input type="text" name="name" ref={nameRef}></input>
        </div>
        <div className="enter-flex-item2">
          <button type="button" className="score-btn" onClick={postToApi}>SUBMIT</button>
          <button type="button" className="score-btn" onClick={restartGame}>RESTART</button>
        </div>
      </div>

      <div className="error-container" ref={errorRef}>
        <span>*Name must be between 2 and 24 characters</span>
      </div>
      
    </div>
  )
}

export default HighScore
