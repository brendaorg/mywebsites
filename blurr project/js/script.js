const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
 const welcomeText = document.querySelector('.welcome-note')

let load = 0

let int = setInterval(blurring, 50)

 function blurring()
 {
     load++
 if (load > 99){
     clearInterval(int)
 }
 loadText.innerText = `${load}%`
 loadText.style.opacity =scale(load, 0, 100, 1, 0)
 bg.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`
welcomeText.style.opacity=scale(load, 0, 100, 0, 1)
//  welcomeText.style.filter = `blur(${scale(load, 0, 100, 0, 50)}px)`
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


 }