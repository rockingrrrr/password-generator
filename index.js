const legalUnit = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*!()'
const legalArray = legalUnit.split("");
const generateBtn = document.getElementById("generate-password")
let containerAllPasswordEl = document.getElementById("container-all-password")
let basePassword = ""
let indexRandom = 0
let newUnit = ""
let newUnitHTML = ""
let newPasswordHTML = ""

//test for special characters
function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

//test if containing a number
function hasNumber(myString) {
  return /\d/.test(myString);
}

function generatePassword(){
    
    //generate a 14-unit password 
    for (let i = 0; i < 15; i++){
        
        //pick a random unit
        indexRandom = Math.floor( Math.random()*(legalArray.length) ) 
        newUnit = legalArray[indexRandom]
        
        //test the unit's nature and add HTML tag accordingly
        if (containsSpecialChars(newUnit)){
            newUnitHTML = `<span class="symbol">${newUnit}</span>`
        }
        else if (hasNumber(newUnit)){
            newUnitHTML = `<span class="number">${newUnit}</span>`
        }
        else if (newUnit == newUnit.toUpperCase()){
            newUnitHTML = `<span class="uppercase">${newUnit}</span>`
        }
        else {
            newUnitHTML = newUnit
        }
        //attach the new unit, its HTML tags, and its wrapper's HTML tags to the base string 
        basePassword += newUnitHTML
    }
}


function renderPassword(){
    generatePassword()
    //insert the base password & its HTML tag to a div wrapper
    newPasswordHTML = `<div class="container-password">${basePassword}<p class="password">`
    //initiate variables
    basePassword = ""
    //put the wrapper HTML into the DOM
    containerAllPasswordEl.innerHTML += newPasswordHTML
}



function renderPasswordMultipleTimes(number){
    containerAllPasswordEl.innerHTML = ""
    for (let i = 0; i < number; i++){
        renderPassword()
    }
}


renderPasswordMultipleTimes(3)

generateBtn.addEventListener("click", function(){
    renderPasswordMultipleTimes(3)
})