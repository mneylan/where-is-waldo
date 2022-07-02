// date conversions by making date object in javascript
export let getGameTime = (startTime, endTime) => {
  
  let newTime1 = new Date(parseInt(startTime))
  
  let newTime2 = new Date(parseInt(endTime))
  
  
  let time3 = new Date(Math.abs(newTime2 - newTime1))
  
  
  return time3.getTime()
}


export let displayTime = (time) => {
  time = new Date(time)
  let minutes = time.getMinutes().toString()
  let seconds = time.getSeconds().toString()
  let milliseconds = time.getMilliseconds().toString()
  

  if (parseInt(minutes) < 10) {
    minutes = "0" + minutes
  }

  if (parseInt(seconds) < 10) {
    seconds = "0" + seconds
  }

  if (parseInt(milliseconds) >= 0 && parseInt(milliseconds) < 50) {
    milliseconds = "00"
  }
  
  if (parseInt(milliseconds) >= 50 && parseInt(milliseconds) < 100) {
    milliseconds = "01"
  }

  if (milliseconds.length == 3) {
    let lastEle = milliseconds[2]
    if (parseInt(lastEle) < 5) {
      let newMilliseconds = milliseconds[0] + milliseconds[1] 
      milliseconds = newMilliseconds
    }
    if (parseInt(lastEle) >= 5) {
      let newMilliseconds = milliseconds[0] + (parseInt(milliseconds[1]) + 1).toString() 
      milliseconds = newMilliseconds
    }
  }

  return minutes + ":" + seconds + ":" + milliseconds

}

export let stopWatch = (seconds) => {
  if (seconds == -1) return "0:00"

  let minutes = Math.floor((seconds / 60)).toString()
  let remainedSeconds = (seconds % 60).toString()
  if (parseInt(remainedSeconds) < 10) {
    remainedSeconds = "0" + remainedSeconds
  }
  
return minutes + ":" + remainedSeconds

}

