// Write your code for theme changes here
const switchTheme = document.querySelector("button")
const bodyBackground = document.querySelector('body')
const movieCard = document.querySelector('.movie-card')
let light = document.querySelectorAll(".light") 
let dark = document.querySelectorAll(".dark") 

/*
switchTheme.addEventListener("click", event => {
    bodyBackground.classList.toggle("dark")
    movieCard.classList.toggle("dark")
})
*/

switchTheme.addEventListener("click", event => {

    bodyBackground.classList.toggle("dark")
  
})

switchTheme.addEventListener("click", event => {

    movieCard.classList.toggle("dark")
 
})




