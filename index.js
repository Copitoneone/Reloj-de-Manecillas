const secundero = document.querySelector('.secundero')
const minutero = document.querySelector('.minutero')
const hora = document.querySelector('.hora')

setInterval(()=>{
let day = new Date();
let sec = day.getSeconds() * 6;
let min = day.getMinutes() * 6;
let h = day.getHours() * 30;

secundero.style.transform = `rotate(${sec}deg)`;
minutero.style.transform = `rotate(${min}deg)`;
hora.style.transform = `rotate(${h}deg)`;
}, 1000);