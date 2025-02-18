const colorWheel1 = document.querySelectorAll('input')[0]
const colorWheel2 = document.querySelectorAll('input')[1]
// const enterButton = document.querySelector('button')
const body = document.querySelector('body')
const h3 = document.querySelector('h3')
const h32 = document.querySelectorAll('h3')[2]
const randomButton = document.querySelector("#random-button")
// document.querySelector("body").style.background = `linear-gradient(to right, ${colorWheel1.value}, ${colorWheel2.value})`

//First 2 functions were justin's idea

function printColorHashToPage(background_value,color1,color2){
    h3.textContent = `${background_value}`
    h32.textContent = `Color 1: ${color1} Color 2: ${color2}`
}

// function colorChanger(){
//     enterButton.addEventListener('click', function(event){
//         const value1 = colorWheel1.value
//         const value2 = colorWheel2.value
//         body.style.background = `linear-gradient(to right, ${value1}, ${value2})`
//         printColorHashToPage(body.style.background)
//     })
// }

function random6Numbers(){
    let randomList = []
    for (var i=0; i < 6; i++){
        let rand_int = Math.floor(Math.random() * 256)
        randomList.push(String(rand_int))
    }
    return randomList
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
  }

function randomColorBackground(){
    const randomList = random6Numbers()
    let color1 = rgbToHex(Number(randomList[0]),Number(randomList[1]),Number(randomList[2]))
    let color2 = rgbToHex(Number(randomList[3]),Number(randomList[4]),Number(randomList[5]))
    colorWheel1.value=color1
    colorWheel2.value=color2
    document.body.style.background = `linear-gradient(to right, rgb(${randomList[0]},${randomList[1]},${randomList[2]}), rgb(${randomList[3]},${randomList[4]},${randomList[5]}))`;
    printColorHashToPage(document.body.style.background,color1,color2)
}

function randomClickColorBackground(){
    randomButton.addEventListener('click', randomColorBackground)
}

//Andrei's way (with justin logic)

function setGradient(){
    body.style.background = `linear-gradient(to right, ${colorWheel1.value}, ${colorWheel2.value})`
    colorWheel1.setAttribute('value',colorWheel1.value)
    colorWheel2.setAttribute('value',colorWheel2.value)
    printColorHashToPage(body.style.background,colorWheel1.value,colorWheel2.value);
}

function colorFuckery(){
    colorWheel1.addEventListener('input', setGradient)
    colorWheel2.addEventListener('input', setGradient)
}
randomClickColorBackground()
colorFuckery()
// colorChanger()