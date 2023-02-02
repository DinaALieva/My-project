let market = document.querySelector('#Market')
let consult =document.querySelector('#Consulting')
let brand =document.querySelector('#Branding')
let consult1 =document.querySelector('#Consult')
let finance = document.querySelector('#Finance')
let brand1= document.querySelector('#Brand')
let portfolio =document.querySelector('#portfolio')

function getViewall() {
    market.style.display='block'
    consult.style.display ='block'
    brand.style.display= 'block'
    consult1.style.display ='block'
    finance.style.display= 'block'
    brand1.style.display ='block'  
}
function getMarket() {
market.style.display='block'
consult.style.display ='none'
brand.style.display= 'none'
consult1.style.display ='none'
finance.style.display= 'none'
brand1.style.display ='none'
}
function getConsult() {
    market.style.display='none'
    consult.style.display ='flex'
    brand.style.display= 'none'
    consult1.style.display ='flex'
    finance.style.display= 'none'
    brand1.style.display ='none' 
}
function getBrand(){
    market.style.display='none'
    consult.style.display ='none'
    brand.style.display= 'flex'
    consult1.style.display ='none'
    finance.style.display= 'none'
    brand1.style.display ='flex' 
}
function getFinance(){
    market.style.display='none'
    consult.style.display ='none'
    brand.style.display= 'none'
    consult1.style.display ='none'
    finance.style.display= 'block'
    brand1.style.display ='none' 
}


