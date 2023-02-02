let price =document.querySelector('#price')
let basic =document.querySelector('#basic-one')
let standard =document.querySelector('#standard-one')
let premium =document.querySelector('#premium-one')
let basic1 =document.querySelector('#basic-two')
let standard1 =document.querySelector('#standard-two')
let premium1 =document.querySelector('#premium-two')
function moveToYear() {
    basic1.style.display ='block'
    standard1.style.display ='block'
    premium1.style.display ='block'
basic.style.display ='none'
standard.style.display ='none'
premium.style.display ='none'
}
function moveToMonth() {
    basic1.style.display ='none'
    standard1.style.display ='none'
    premium1.style.display ='none'
basic.style.display ='block'
standard.style.display ='block'
premium.style.display ='block'  
}