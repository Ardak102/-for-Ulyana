const nameTitle = document.querySelector('#name');
const textContainer = document.getElementById('text');
const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');
const text = 'Пожалуйста пройдите опрос по кнопке ниже, а после его окончания получите приятный бонус'
const modalBtn = document.getElementById('btn');
const modalWindow = document.getElementById('modal');
const modalClose = document.getElementById('close');
const poppup = document.getElementById('poppup');
const poppupOpen = document.getElementById('poppup-modal')
const poppupBtn = document.getElementById('poppup-btn');
const poppupBg = document.getElementById('poppup-pop')
const wind = document.getElementById('wind')
const poppupAns = document.getElementById('poppup-ans');
const poppupAnsw = document.getElementById('poppup-answ')

let colors = ['#d37681', '#ed7014', '#a4c3a2'];

nameTitle.addEventListener('click', () => {
    nameTitle.style.color = getRandomColor()
})

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

let index = 0;

function writeText() {
    textContainer.innerText = text.slice(0, index);

    index++
}

setInterval(writeText, 60)

let idx = 0;

function run() {
    idx++

    if(idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translate(${-idx * 200}px)`
}

setInterval(run, 1500)

modalBtn.addEventListener('click', () => {
    modalWindow.classList.add('active');
})

modalClose.addEventListener('click', () => {
    modalWindow.classList.remove('active')
})

poppupOpen.addEventListener('click', () => {
    poppup.classList.add('hide')
})

poppupBtn.addEventListener('click', () => {
    poppupBg.style.backgroundColor = ('rgb(90, 90, 90)')
})

poppupAns.addEventListener('click', () => {
    wind.classList.add('hall')
})

poppupAnsw.addEventListener('click', () => {
    wind.classList.add('hall')
})

wind.addEventListener('click', () => {
    modalWindow.classList.remove('active')
    poppup.classList.remove('hide')
    wind.classList.remove('hall')
})