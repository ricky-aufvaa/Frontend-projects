const circle = document.querySelectorAll('.circle')
const progress =document.getElementById('progress')
const next = document.getElementById('next') 
const prev = document.getElementById('prev')

currentActive = 1


next.addEventListener('click', () =>{
    currentActive++;

    if (currentActive>circle.length) {
        currentActive=circle.length
    }
    update()
    console.log(currentActive)
})
prev.addEventListener('click', () =>{
    currentActive--;

    if (currentActive<1) {
        currentActive=1
    }
    update()
    console.log(currentActive)
})

function update() {
    circle.forEach((circle, idx) => {
        if(idx<currentActive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    });
    const actives = document.querySelectorAll('.active')
    console.log(actives)
    progress.style.width=((actives.length-1)/(circle.length-1)*100 + '%')
    if (currentActive==1) {
        prev.disabled = true
    }
    else if (currentActive ==circle.length) {
        next.disabled =true
    }
    else {
        prev.disabled = false
        next.disabled =false
    }
}