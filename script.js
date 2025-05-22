const popup = document.querySelector(".popup-overlay")
document.getElementById('show-popup').onclick = function() {
    console.log('Привет от JavaScript!')
    popup.classList.add("popup-show")
}

document.getElementById('close').onclick = function() {
    console.log('Привет от JavaScript!')
    popup.classList.remove("popup-show")
}



const acc = document.querySelector(".accordion-content")
document.getElementById('accordion-header').onclick = function() {
    console.log('Привет от JavaScript!')
    acc.classList.add("accordion-show")
}

// const accordionHeaders = document.querySelectorAll('.accordion-header')

// accordionHeaders.forEach((header) => {
//     header.addEventListener('click', () => {
//         const content = header.nextElementSibling
//         if (header.classList.contains('active')) {
//             content.style.maxHeight = content.scrollHeight + 'px'
//         } else {
//             content.style.maxHeight = null
//         }
//     })
// })