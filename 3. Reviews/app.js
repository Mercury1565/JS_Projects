const users = ['Hermon Getachew', 'Fenet Getachew', 'Beamlak Getachew', 'Azeb Asefa', 'Getachew Abdissa']
const profilePics = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/men/4.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg"
    ]
const roles = ['Engineer', 'Space Scientist', 'Computer Scientist', 'Health Professional', 'Loving Father']

const image = document.querySelector('.profile-pic')
const name = document.querySelector('#name-cont')
const role = document.querySelector('#role')

let index = 0

const left_button = document.querySelector('#left')
const right_button = document.querySelector('#right')
const random_button = document.querySelector('#random')

function showPerson(index){
    image.src = profilePics[index];
    name.textContent = users[index];
    role.textContent = roles[index];
}

window.addEventListener("DOMContentLoaded" , () => {
    showPerson(4);
})

left_button.addEventListener('click', () => {
    index --;

    if(index < 0){
        index = (users.length) - 1
    }

    showPerson(index);
})

right_button.addEventListener('click', () => {
    index --;

    if(index < 0){
        index = (users.length) - 1
    }

    showPerson(index);
})

random_button.addEventListener('click', () => {
    index = Math.floor(Math.random() * (users.length));

    showPerson(index);
})