const digits = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

const button = document.querySelector('#btn')
const span_color = document.querySelector('.color')

button.addEventListener('click', () => {
    let color = '#'
    for(let i = 0; i < 6; i ++){
        color += digits[getRandomNumber()]
    }

    document.body.style.backgroundColor = color;
    span_color.textContent = color;
})

function getRandomNumber(){
    return Math.floor(Math.random() * 16)
}