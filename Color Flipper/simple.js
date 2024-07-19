const colors = ['green', 'red', 'blue', 'yellow', 'indigo', 'cyan', 'orange']

const btn = document.querySelector('#btn')
const span_color = document.querySelector('.color')

btn.addEventListener('click', () => {
    const rand_num = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[rand_num]
    span_color.textContent = colors[rand_num]
})