let circle = document.querySelector(".circle")
let button = document.querySelector(".button")

let state = 1
button.addEventListener("click",function(){
    if (state === 1){
        circle.classList.add("on");
        button.innerHTML = "Off";
        state = 0;
    } else{
        circle.classList.remove("on");
        button.innerHTML = "On"
        state = 1
    }
})
