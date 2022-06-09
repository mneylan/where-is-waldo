// date conversions by making date object in javascript

// let time1 = "2022-06-02T09:33:07.416-07:00"

// let time2 = "2022-06-02T10:02:56.761-07:00"

// let year1 = parseInt(time1.slice(0, 4))
// let month1 = parseInt(time1.slice(5, 7))
// let day1 = parseInt(time1.slice(8, 10))
// let hour1 = parseInt(time1.slice(11, 13))
// let minute1 = parseInt(time1.slice(14, 16))
// let second1 = parseInt(time1.slice(17, 19))
// let millisecond1 = parseInt(time1.slice(20, 22))

// let year2 = parseInt(time2.slice(0, 4))
// let month2 = parseInt(time2.slice(5, 7))
// let day2 = parseInt(time2.slice(8, 10))
// let hour2 = parseInt(time2.slice(11, 13))
// let minute2 = parseInt(time2.slice(14, 16))
// let second2 = parseInt(time2.slice(17, 19))
// let millisecond2 = parseInt(time2.slice(20, 22))

// let newTime1 = new Date(year1, month1, day1, hour1, minute1, second1, millisecond1)

// let newTime2 = new Date(year2, month2, day2, hour2, minute2, second2, millisecond2)


// let time3 = new Date(Math.abs(newTime2 - newTime1))

// console.log(`${time3.getMinutes()}: ${time3.getSeconds()}: ${time3.getMilliseconds()}`)

// Turn the javascript date object time (29 minutes...) into seconds  
// console.log((time3.getTime() / 1000))

// let displayTime = (time) => {
//   time = new Date(time)
//   let minutes = time.getMinutes().toString()
//   let seconds = time.getSeconds().toString()
//   let milliseconds = time.getMilliseconds().toString()
//   console.log(milliseconds)

//   if (parseInt(minutes) < 10) {
//     minutes = "0" + minutes
//   }

//   if (parseInt(seconds) < 10) {
//     seconds = "0" + seconds
//   }

//   if (parseInt(milliseconds) >= 0 && parseInt(milliseconds) < 50) {
//     milliseconds = "00"
//   }
  
//   if (parseInt(milliseconds) >= 50 && parseInt(milliseconds) < 100) {
//     milliseconds = "01"
//   }

//   if (milliseconds.length == 3) {
//     let lastEle = milliseconds[2]
//     if (parseInt(lastEle) < 5) {
//       let newMilliseconds = milliseconds[0] + milliseconds[1] 
//       milliseconds = newMilliseconds
//     }
//     if (parseInt(lastEle) >= 5) {
//       let newMilliseconds = milliseconds[0] + (parseInt(milliseconds[1]) + 1).toString() 
//       milliseconds = newMilliseconds
//     }
//   }

//   return minutes + ":" + seconds + ":" + milliseconds

// }

let stopWatch = (seconds) => {

  let minutes = Math.floor((seconds / 60)).toString()
  let remainedSeconds = (seconds % 60).toString()
  if (parseInt(remainedSeconds) < 10) {
    remainedSeconds = "0" + remainedSeconds
  }
  
return minutes + ":" + remainedSeconds

}

export default stopWatch