const popup = document.querySelector(".popup-overlay")
document.getElementById('show-popup').onclick = function () {
    console.log('Привет от JavaScript!')
    popup.classList.add("popup-show")
}

document.getElementById('close').onclick = function () {
    console.log('Привет от JavaScript!')
    popup.classList.remove("popup-show")
}



// const acc = document.querySelectorAll(".accordion-content")
// const accordion = document.getElementById('accordion-header')
// console.log(acc);

// accordion.onclick = function() {
//     console.log('Привет от JavaScript!')
//     acc.classList.add("accordion-show")
// }




const accordionHeaders = document.querySelectorAll('.accordion-header')
const ach1 = document.getElementById('accordion-header-3')
const ach1c = document.getElementById('ach1c')
let clickh1 = 0
accordionHeaders.forEach((header) => {
    header.addEventListener('click', (event) => {
        if (event.target === ach1) {
            console.log("fff")
            ach1c.classList.add("accordion-show")
            ach1.classList.add("active")
            clickh1++
            console.log(clickh1)
            if (ach1c.classList.contains('accordion-show') && clickh1 === 2) {
                console.log("gjhyj")
                clickh1 = 0
                if (event.target === ach1) {
                    ach1c.classList.remove("accordion-show")
                    ach1.classList.remove("active")
                }
            }
        }

    })
})


const ach2 = document.getElementById('accordion-header-2')
const ach2c = document.getElementById('ach2c')
let clickh2 = 0
accordionHeaders.forEach((header) => {
    header.addEventListener('click', (event) => {
        if (event.target === ach2) {
            console.log("fff")
            ach2c.classList.add("accordion-show")
            ach2.classList.add("active")
            clickh2++
            console.log(clickh2)
            if (ach2c.classList.contains('accordion-show') && clickh2 === 2) {
                console.log("gjhyj")
                clickh2 = 0
                if (event.target === ach2) {
                    ach2c.classList.remove("accordion-show")
                    ach2.classList.remove("active")
                }
            }
        }

    })
})

const ach3 = document.getElementById('accordion-header-1')
const ach3c = document.getElementById('ach3c')
let clickh3 = 0
accordionHeaders.forEach((header) => {
    header.addEventListener('click', (event) => {
        if (event.target === ach3) {
            console.log("fff")
            ach3c.classList.add("accordion-show")
            ach3.classList.add("active")
            clickh3++
            console.log(clickh3)
            if (ach3c.classList.contains('accordion-show') && clickh3 === 2) {
                console.log("gjhyj")
                clickh3 = 0
                if (event.target === ach3) {
                    ach3c.classList.remove("accordion-show")
                    ach3.classList.remove("active")
                }
            }
        }

    })
})



const tabhed = document.querySelectorAll('.tab-header')
const tabs2 = document.querySelectorAll('.tab-btn')
const tabs = document.querySelectorAll('.tab-content')

const tab12 = document.getElementById('tab12')
const tab11 = document.getElementById('tab11')
tabhed.forEach((header) => {
    header.addEventListener('click', (event) => {
        if (event.target === tab11) {
            console.log('ura')
            console.log(tabs)
            for (tab of tabs) {
                console.log('1')
                tab.classList.remove("active")

            }
            for (tab of tabs2) {
                tab.classList.remove("active")
            }
            tab11.classList.add("active")
            tab12.classList.add('active')
        }


    })
})

const tab22 = document.getElementById('tab22')
const tab21 = document.getElementById('tab21')
tabhed.forEach((header) => {
    header.addEventListener('click', (event) => {
        if (event.target === tab21) {
            console.log('ura')
            console.log(tabs)
            for (tab of tabs) {
                console.log('1')
                tab.classList.remove("active")

            }
            for (tab of tabs2) {
                tab.classList.remove("active")
            }
            tab21.classList.add("active")
            tab22.classList.add('active')
        }


    })
})


const tab32 = document.getElementById('tab32')
const tab31 = document.getElementById('tab31')
tabhed.forEach((header) => {
    header.addEventListener('click', (event) => {
        if (event.target === tab31) {
            console.log('ura')
            console.log(tabs)
            for (tab of tabs) {
                console.log('1')
                tab.classList.remove("active")
            }
            for (tab of tabs2) {
                tab.classList.remove("active")
            }
            tab31.classList.add("active")
            tab32.classList.add('active')
        }


    })
})

const tooltipContainer = document.querySelectorAll(".tooltip")

const ttt1 = document.querySelector("#tt1")
function showttt1(ttt1) {
    ttt1.target.closest(".tooltip").querySelector(".tooltip-text").classList.add("showtt");
}
tooltipContainer[0].addEventListener("mouseover", showttt1)
function closettt1(ttt1) {
    ttt1.target.closest(".tooltip").querySelector(".tooltip-text").classList.remove("showtt");
}
tooltipContainer[0].addEventListener("mouseout", closettt1)



const ttt2 = document.querySelector("#tt2")
function showttt2(ttt2) {
    ttt2.target.closest(".tooltip").querySelector(".tooltip-text").classList.add("showtt");
}
tooltipContainer[1].addEventListener("mouseover", showttt2)
function closettt2(ttt2) {
    ttt2.target.closest(".tooltip").querySelector(".tooltip-text").classList.remove("showtt");
}
tooltipContainer[1].addEventListener("mouseout", closettt2)



const ttt3 = document.querySelector("#tt3")
function showttt3(ttt3) {
    ttt3.target.closest(".tooltip").querySelector(".tooltip-text").classList.add("showtt");
}
tooltipContainer[2].addEventListener("mouseover", showttt3)
function closettt3(ttt3) {
    ttt3.target.closest(".tooltip").querySelector(".tooltip-text").classList.remove("showtt");
}
tooltipContainer[2].addEventListener("mouseout", closettt3)




