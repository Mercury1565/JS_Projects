const buttons = document.querySelectorAll('#btn');
const display_count = document.querySelector('#cnt');

let count = 0


// inc_button.addEventListener('click', () => {
//     count ++;
//     display_count.textContent = count;
// })
// dec_button.addEventListener('click', () => {
//     count --;
//     display_count.textContent = count;
// })
// reset_button.addEventListener('click', () => {
//     count = 0;
//     display_count.textContent = count;
// })


// And another way of doing it....Keep discovering new ways of doing things

buttons.forEach(function(btn) {
    btn.addEventListener('click', (e) => {
        if(e.target.innerText === 'Increment'){
            count ++;
        }
        if(e.target.innerText === 'Decrement'){
            count --;
        }
        if(e.target.innerText === 'Reset'){
            count = 0;
        }

        display_count.textContent = count;

        // You can also tweak the styling with JS
        if(count > 0){
            display_count.style.color = 'tomato'

        }
        else if(count < 0){
            display_count.style.color = 'purple'
        }
        else{
            display_count.style.color = 'black'

        }
    })
})