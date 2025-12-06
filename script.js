// const btn = document.querySelector(".button")
// const aud = document.querySelector("audio")

// btn.addEventListener("click", function(){
//     aud.pause();
//     aud.play();
// })

const btnList = document.querySelectorAll(".button")
const srchBtn = document.querySelector(".mag-glass-cont")
const volSlider = document.querySelector(".vol-slider")

btnList.forEach(function(btn){
    const btnID = btn.classList[1]
    const aud = document.querySelector(`audio.${btnID}`)
    btn.addEventListener("click", function(){
        aud.play()
        aud.volume = newVol
    })

})
volSlider.addEventListener("input", function(){
    const newVol = Number(volSlider.value)
    document.querySelectorAll("audio").forEach(function(audio){
        audio.volume = newVol
    })
})
srchBtn.addEventListener("click", function(){
    const srchText = document.querySelector("textarea").value

    const titleList = document.querySelectorAll(".title")
    titleList.forEach(function(title){
        if (!title.innerText.includes(srchText)){
            title.parentElement.style.display = "none"
        } else {
            title.parentElement.style.display = "flex"
        }
    })
})


