let btn = document.querySelector('button')
let textarea = document.querySelector('textarea')
let speech = new SpeechSynthesisUtterance();

btn.addEventListener('click',()=>{
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech);
})
