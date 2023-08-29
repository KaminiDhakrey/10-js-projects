const clock = document.querySelector('.clock')

function time(){
    let date = new Date();
clock.innerHTML = date.toLocaleTimeString();
}

setInterval(time,1000)
