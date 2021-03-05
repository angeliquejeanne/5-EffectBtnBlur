const btn1 = document.querySelector('.Btn1');
const btn2 = document.querySelector('.Btn2');
const btn3 = document.querySelector('.Btn3');

btn1.addEventListener('mouseenter', () => {
    btn2.classList.add('Blur');
    btn3.classList.add('Blur');
})
btn1.addEventListener('mouseleave', () => {
    btn2.classList.remove('Blur');
    btn3.classList.remove('Blur');
})

btn2.addEventListener('mouseenter', () => {
    btn1.classList.add('Blur');
    btn3.classList.add('Blur');
})
btn2.addEventListener('mouseleave', () => {
    btn1.classList.remove('Blur');
    btn3.classList.remove('Blur');
})

btn3.addEventListener('mouseenter', () => {
    btn1.classList.add('Blur');
    btn2.classList.add('Blur');
})
btn3.addEventListener('mouseleave', () => {
    btn1.classList.remove('Blur');
    btn2.classList.remove('Blur');
})