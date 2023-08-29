let text = "Viewers on my Youtube channel are the best 🤍"

let index = 0;

function writetxt(){

    document.body.innerText = text.slice(0,index)
    index ++;
    if(index> text.length){
        index = 0;
    }
}

setInterval(writetxt,100)