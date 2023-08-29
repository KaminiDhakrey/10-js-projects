const container = document.querySelector('.container')
const btn = document.querySelector('.btn')

{/* <div class="toast">
        This challenge is crazy!
    </div> */}

btn.addEventListener('click',()=>{
    createNotification()
})

function createNotification (){
    const notify = document.createElement('div')
    notify.classList.add('toast')
    notify.innerHTML= 'This challenge is crazy!'

    container.appendChild(notify);

   setTimeout(() => {
    notify.remove();
   }, 3000);
}