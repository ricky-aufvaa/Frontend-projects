var panel= document.querySelectorAll('.panel')
var active= document.querySelectorAll('.active')
// console.log(panel[0])
panel.forEach((panel) =>{
    // console.log(panel)
    panel.addEventListener('click',() => {
        panel.classList.replace('panel','active')
        // document.querySelectorAll('.active')
        // var img = document.createElement("img");
        // img.src = './back.png';
        // var block = document.querySelectorAll('.active');
        // block.appendChild(img);
        // var x = document.createElement("IMG");
        // x.setAttribute("src", "back.png");
        // x.setAttribute("width", "304");
        // x.setAttribute("height", "228");
        // x.setAttribute("alt", "The Pulpit Rock");
        // document.body.appendChild(x);
        console.log(123)

    })
})

active.forEach((active) =>{
    active.addEventListener('click', () =>{
        console.log(123)
        // active.classList.replace('active','panel')
        
    })
})