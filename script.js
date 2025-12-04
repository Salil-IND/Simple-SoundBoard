const btn = document.querySelector(".button")
const aud = document.querySelector("audio")

btn.addEventListener("click", function(){
    aud.pause();
    aud.play();
})