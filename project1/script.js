const picture = document.querySelectorAll('.pic')
picture.forEach(pic => {
    pic.addEventListener('click', ()=>{
        deactivator()
        pic.classList.add('active')
    
    })
});
function deactivator() {
    picture.forEach(pic => {
        pic.classList.remove('active')

    })
    
}
