const box = document.querySelector('.box')
const input = document.querySelector('input')

const changeTheBgColor = () => {
    box.style.background = input.value;
}

input.addEventListener('input', changeTheBgColor);