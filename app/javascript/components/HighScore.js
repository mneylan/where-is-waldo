import React from "react"
import { useRef, useState } from "react"
import uniqid from 'uniqid'

const HighScore = () => {
  const nameRef = useRef()
  const timeRef = useRef()
  const [highScores, setHighScores] = useState([]) 

  let postApi = async () => {
    let name = nameRef.current.value
    let time = timeRef.current.value
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
    
    if (response.ok) {
      console.log("it worked?")
    }
    if (!response.ok) {
      console.log('that didnt work')
    }
  }

  let getHighScores = async () => {
    let response = await fetch('http://localhost:3000/players')
    let data = await response.json()

    setHighScores(data)
    console.log(highScores)
  }


  return (
    <div className="score-container">
      <div className="score-title-container">
        <h1>High Scores</h1>
      </div>

      <div className="score-grid-container">
        <div className="score-grid-item">
          <h2>James</h2>
        </div>
        <div className="score-grid-item">
          <h2>00:01:21</h2>
        </div>
        <div className="score-grid-item">
          <h2>Robert</h2>
        </div>
        <div className="score-grid-item">
          <h2>00:01:21</h2>
        </div>
        <div className="score-grid-item">
          <h2>James</h2>
        </div>
        <div className="score-grid-item">
          <h2>00:01:21</h2>
        </div>
        <div className="score-grid-item">
          <h2>Robert</h2>
        </div>
        <div className="score-grid-item">
          <h2>00:01:21</h2>
        </div>
      </div>

      <div className="enter-name-container">
        <div className="enter-flex-item1">
          <h2 className="name">Name</h2>
          <input type="text" name="name"></input>
        </div>
        <div className="enter-flex-item2">
          <button type="button" className="score-btn">SUBMIT</button>
          <button type="button" className="score-btn">RESTART</button>
        </div>
      </div>
      
    </div>
  )
}

export default HighScore

// {highScores.map(player => {
//   return (
//     <div className="score-row" key={uniqid()}>
//       <h2 className="player">{player.name}</h2>
//       <h2 className="score">{player.time}</h2>
//     </div>
//   )
// })}

{/* <button type="button" onClick={postApi}>Submit</button>
        <button type="button" onClick={getHighScores}>High Scores</button> */}


{/* <form>
  <label>
    Name:
    <input ref={nameRef} type="text" name="name" min="2" max="22" required></input>

  </label>
  <label>
    Time:
    <input ref={timeRef} type="text" name="time" required></input>

  </label>
        
</form> */}