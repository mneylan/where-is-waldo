import React from "react"



const Board = (props) => {
  const {gameOn, dropDownStatus, selectCharacter, adjustedX, adjustedY, xStyle, yStyle, setWaldoFound, setWizardFound, setOdlawFound} = props
  
  let callApi = async () => {
    let response = await fetch("http://localhost:3000/characters")
    let data = await response.json()
    console.log(data)
    
    return data
  }


  let makeDropDown = () => {

    
    let ulStyle = {
      position: 'absolute',
      top: yStyle,
      left: xStyle,
    }

    if (dropDownStatus && gameOn) {
      
      return (
        <ul style={ulStyle}>
          <li onClick={() => foundWaldo(adjustedX, adjustedY)}>Waldo</li>
          <li onClick={() => foundWizard(adjustedX, adjustedY)}>Wizard Whitebeard</li>
          <li onClick={() => foundOdlaw(adjustedX, adjustedY)}>Odlaw</li>
        </ul>
      )
    }
  }

  let foundWaldo = async (x, y) => {
    let data = await callApi()
    
    let waldo = data.characters[0]
    let time = data.time
    console.log(time)
    
    let waldoX = waldo.x_coordinate
    let waldoY = waldo.y_coordinate

    if ((x >= (waldoX - 15) && x <= (waldoX + 11)) && (y >= (waldoY - 21) && y <= (waldoY + 24))) {
      setWaldoFound(true)
    }
  }
  
  let foundWizard = async (x, y) => {
    let data = await callApi()
    let wizard = data[1]
    let wizardX = wizard.x_coordinate
    let wizardY = wizard.y_coordinate

    if ((x >= (wizardX - 19) && x <= (wizardX + 30)) && (y >= (wizardY - 45) && y <= (wizardY + 47))) {
      setWizardFound(true)
    }
  }
  let foundOdlaw = async (x, y) => {
    let data = await callApi()
    let odlaw = data[2]
    let odlawX = odlaw.x_coordinate
    let odlawY = odlaw.y_coordinate

    if ((x >= (odlawX - 15) && x <= (odlawX + 12)) && (y >= (odlawY - 30) && y <= (odlawY + 24))) {
      setOdlawFound(true)
    }
  }


  return (
    <div className="waldo-flex-container">
      <div className="waldo-board" onClick={selectCharacter}>
        {makeDropDown()}
      </div>
    </div>
  )
}

export default Board



// let canResolvePromiseWith.then() = () => {
//   callApi().
//   then(results => {
//     console.log(results[0])
//   })
// }

