"use strict"




let saveDonation = []

function Donatin(name, ammount) {
    this.name = name
    this.ammount = ammount
this.randoumNumber=[]
    Donatin.all.push(this)
}
Donatin.all = []

console.log(Donatin.all );

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


Donatin.prototype.getRandomNum = function () {
    let randomAge = 0
    for (let i = 0; i < Donatin.all.length; i++) {

        randomAge = random(20, 60)
    this.randoumNumber.push(randomAge)

    }

    console.log(randomAge);

}


let donatForm = document.getElementById('donatForm')
donatForm.addEventListener('submit', handelSubmit)


function handelSubmit(event) {
    event.preventDefault()
    let theName = event.target.name.value
    console.log(theName);

    let theAmmount = document.getElementById('select').value
    console.log(theAmmount);


    let theDonation = new Donatin(theName, theAmmount)
    console.log(theDonation);

    saveDonation.push(theDonation)
    let stringSave = JSON.stringify(saveDonation)
    localStorage.setItem('selected', stringSave)

    theRender() 
    donatForm.removeEventListener('submit', handelSubmit)
    upLoad()

}



function upLoad() {

    let getSelected=localStorage.getItem('selected')
    let parsSelected=JSON.parse(getSelected)

    if (parsSelected!==null) {
        for (let i = 0; i < parsSelected.length; i++) {
            new Donatin (parsSelected[i].name,parsSelected[i].ammount)
        }
    }
    
}

let tableDon = document.getElementById('tableDon')




Donatin.prototype.renderDonation = function () {

    
    let tbodyElemnt = document.createElement('tbody')
    tableDon.appendChild(tbodyElemnt)


// for (let i = 0; i < Donatin.all.length; i++) {
   
    

    let trElemnt = document.createElement('tr')
    tbodyElemnt.appendChild(trElemnt)

    let td1Elemnt = document.createElement('td')
    let td2Elemnt = document.createElement('td')
    let td3Elemnt = document.createElement('td')

    trElemnt.appendChild(td1Elemnt)
    trElemnt.appendChild(td2Elemnt)
    trElemnt.appendChild(td3Elemnt)

    td1Elemnt.textContent = this.name
    td2Elemnt.textContent = this.ammount
    td3Elemnt.textContent=this.randoumNumber
}
// }


function theRender() {
    
for (let i = 0; i < Donatin.all.length; i++) {
    Donatin.all[i].renderDonation();
    Donatin.all[i].getRandomNum();
    
}

}


