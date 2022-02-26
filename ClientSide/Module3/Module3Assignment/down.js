const timeLeft = document.getElementById('countdown')

//month day year
const birthday = new Date('05/25/2022')

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerId

function birthdayCount() {
  const today = new Date()
  const timeSpan = birthday - today

  if (timeSpan <= -day) {
    timeLeft.innerHTML = 'Hope you had a nice Birthday!!'
    clearInterval(timerId)
    return
  }

  if (timeSpan <= 0) {
    timeLeft.innerHTML = 'Happy Birthday!!'
    clearInterval(timerId)
    return
  }


  const days = Math.floor(timeSpan / day)
  const hours = Math.floor((timeSpan % day) / hour)
  const minutes = Math.floor((timeSpan % hour) / minute)
  const seconds = Math.floor((timeSpan % minute) / second)

  timeLeft.innerHTML = days + 'days ' + hours + 'hrs ' + minutes + 'mins ' + seconds + 'secs'
  
  timerId = setInterval(birthdayCount, second)
}


