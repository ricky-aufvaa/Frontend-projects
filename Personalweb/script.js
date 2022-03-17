const picture = document.querySelectorAll('.pic')
picture.forEach(pic =>{
    pic.addEventListener('click',()=>{
        deactivator()
        pic.classList.replace('pic','active')
    })
});
function deactivator() {
    picture.forEach(pic => {
        pic.classList.replace('active','pic')

    })
    
}
const myface =document.querySelectorAll('.myface')
console.log(myface)
// picture.forEach(pic =>{
//     pic.addEventListener('click',()=>{
//         // deactivator()
//         myface.classList.add('active')
//     })
// });
if ('.pic'.clicked ==true) {
    console.log(123)
} else {
    
}
// function deactivator() {
//     picture.forEach(pic => {
//         pic.classList.remove('active')

//     })
    
// }


