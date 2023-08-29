function purpleHeart(){
    const heart = document.createElement('div')
    heart.innerHTML = '💜'
    heart.style.left = Math.random() *100 +'vw'
    document.body.appendChild(heart);
}

setInterval(purpleHeart,100)