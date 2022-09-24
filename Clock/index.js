
function displayTime(){

    let t = new Date()

    let hours = t.getHours()
    let minutes = t.getMinutes()
    let seconds = t.getSeconds()
    let section = document.getElementById('section')

    if(hours>= 12){

        section.innerHTML= "AM"
    }
    else{
        section.innerHTML="PM"
    }

    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds

}

setInterval(displayTime,10)
