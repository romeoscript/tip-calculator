let billInput = document.getElementById('bill')
let fivePe = document.querySelector(".five")
let tenPe = document.querySelector(".ten")
let fiveInPe = document.querySelector(".fifteen")
let twelPe = document.querySelector(".teln")
let fifetyPe = document.querySelector(".fifty")
let numPeople = document.getElementById('people')
let val = document.querySelector('#val')
let val2 = document.getElementById('val2')
let errClass = document.querySelector('.error')
let custom = document.querySelector(".cus")
console.log(errClass)


fivePe = 5/100
tenPe = 10/100
fiveInPe = 15/100
twelPe = 25/100
fifetyPe = 50/100




function customFunction(){
    let customDomain = custom.value
    let customMath = customDomain/100
   
    let inputBill = billInput.value
    let peopleOut = numPeople.value
    let ans = customMath * inputBill
    
    let outPut = ans/peopleOut
    let finalOutPut = outPut.toFixed("2")
    let pplAns = (inputBill/peopleOut) + outPut
    let pplfix = pplAns.toFixed("2")
    val.innerHTML = `$ ${finalOutPut}`
    val2.innerHTML = `$ ${pplfix}`
}


function fivePercent() {
    let inputBill = billInput.value
    let peopleOut = numPeople.value
    let ans = fivePe * inputBill
    let outPut = ans/peopleOut
    let finalOutPut = outPut.toFixed("2")
    let pplAns = (inputBill/peopleOut) + outPut
    let pplfix = pplAns.toFixed("2")
    val.innerHTML = `$ ${finalOutPut}`
    val2.innerHTML = `$ ${pplfix}`
     errCl()
}
    function tenPercent(){
        let inputBill = billInput.value
        let peopleOut = numPeople.value
        let ans = tenPe * inputBill
        let outPut = ans/peopleOut
        let finalOutPut = outPut.toFixed("2")
        let pplAns = (inputBill/peopleOut) + outPut
        let pplfix = pplAns.toFixed("2")
        val.innerHTML = `$ ${finalOutPut}`
        val2.innerHTML = `$ ${pplfix}`
        errCl()
    }
 function fifteenPercent(){
    let inputBill = billInput.value
    let peopleOut = numPeople.value
    let ans = fiveInPe * inputBill
    let outPut = ans/peopleOut
    let finalOutPut = outPut.toFixed("2")
    let pplAns = (inputBill/peopleOut) + outPut
    let pplfix = pplAns.toFixed("2")
    val.innerHTML = `$ ${finalOutPut}`
    val2.innerHTML = `$ ${pplfix}`
    errCl()
}
 function twentyFivePercent(){
    let inputBill = billInput.value
    let peopleOut = numPeople.value
    let ans = twelPe * inputBill
    let outPut = ans/peopleOut
    let finalOutPut = outPut.toFixed("2")
    let pplAns = (inputBill/peopleOut) + outPut
    let pplfix = pplAns.toFixed("2")
    val.innerHTML = `$ ${finalOutPut}`
    val2.innerHTML = `$ ${pplfix}`
    errCl()
}
function ffityPercent(){
    let inputBill = billInput.value
    let peopleOut = numPeople.value
    let ans = fifetyPe * inputBill
    let outPut = ans/peopleOut
    let finalOutPut = outPut.toFixed("2")
    let pplAns = (inputBill/peopleOut) + outPut
    let pplfix = pplAns.toFixed("2")
    val.innerHTML = `$ ${finalOutPut}`
    val2.innerHTML = `$ ${pplfix}`
    errCl()
}


function errCl(){
    if(numPeople.value < 1){
        errClass.style.display = 'block'
        reset()
        numPeople.classList.add("classerro")
    }
    else if(numPeople.value >= 1){
        errClass.style.display = 'none'
        numPeople.classList.remove("classerro")
    }
    

}

    numPeople.addEventListener("input", errCl)
  

    function reset(){
        billInput.value = 0
        val2.innerText = '$' + "0.00"
        val.innerHTML = '$' + "0.00"
        numPeople.value = 0
        custom.value = ''
    
    }