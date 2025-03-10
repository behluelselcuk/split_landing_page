'use strict'

// Ziel
// Wenn man über die jeweiligen Kinder-divs (ps5-conatainer / xbox-series-x-container) vom div .container hovert
//     dann soll das div, über das gehovert wird, die Klasse .hover-active erhalten
//     dann soll das div, über das nicht gehovert wird, die Klasse .hover-passive erhalten
// Wenn man dann über das andere div hovert
//     dann soll das aktuelle div, welches die Klasse .hover-active hat, diese entfernt und die Klasse .hover-passive hinzugefügt bekommen
//     das andere div soll die Klasse .hover-passive entfernt und die Klasse .hover-active hinzugefügt bekommen
// Wenn man über keines der Kinder-divs vom div .container hovert
//     dann sollen beide divs ihre Klassen .hover-active und .hover-passive entfernt bekommen



// Eingabe
const ps5Div = document.querySelector('.ps5-container')
const xboxDiv = document.querySelector('.xbox-series-x-container')
const container = document.querySelector('.container')



// Verarbeitung

// Beim Überfahren der PS5-Seite
ps5Div.addEventListener('mouseenter', () => {
    ps5Div.classList.add('hover-active');
    xboxDiv.classList.add('hover-passive');
})

ps5Div.addEventListener('mouseleave', () => {
    ps5Div.classList.remove('hover-active');
    xboxDiv.classList.remove('hover-passive');
})


// Beim Überfahren der XBox-Seite
xboxDiv.addEventListener('mouseenter', () => {
    xboxDiv.classList.add('hover-active');
    ps5Div.classList.add('hover-passive');
})

xboxDiv.addEventListener('mouseleave', () => {
    xboxDiv.classList.remove('hover-active');
    ps5Div.classList.remove('hover-passive');
})