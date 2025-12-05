// const btn = document.querySelector(".button")
// const aud = document.querySelector("audio")

// btn.addEventListener("click", function(){
//     aud.pause();
//     aud.play();
// })

const btnList = document.querySelectorAll(".button")

btnList.forEach(function(btn){
    const btnID = btn.classList[1]
    const aud = document.querySelector(`audio.${btnID}`)
    btn.addEventListener("click", function(){
        aud.play()
    })
})