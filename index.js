let navbar = document.querySelector('.navbar');
document.querySelector('#bar-btn').onclick = () => {
    
    navbar.classList.toggle('active');
    console.log('clicked')
}

window.onscroll = () => {
    navbar.classList.remove('active')
}