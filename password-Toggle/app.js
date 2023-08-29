let eyeICon = document.querySelector('#eyeICon')
let password = document.querySelector('#password')

eyeICon.onclick = function(){
    if(password.type == 'password'){
        password.type ='text'
        eyeICon.src = 'eye-open.png'
    }
    else{
        password.type = 'password'
        eyeICon.src = 'eye-close.png'
    }
}