const secondsHand = document.querySelector('.seconds')
const minutesHand = document.querySelector('.minutes')
const hoursHand = document.querySelector('.hours')

function getTime(){
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const timeInterval = 6;
    

    secondsHand.style.transform = "rotate("+ (seconds * timeInterval) +"deg)"
    minutesHand.style.transform = "rotate("+ (minutes * timeInterval + seconds/10) + "deg)"
    hoursHand.style.transform = "rotate("+ (hours * 30) +"deg)"
}
setInterval(getTime, 1000)
