const billDisplay = document.querySelector('#dollar');
const tipPercentageButtons = document.querySelectorAll('.percentage');
const numPeopleDisplay = document.querySelector('#people');
const tipAmountDisplay = document.querySelector('#tip-amount');
const totalAmountDisplay = document.querySelector('#total-bill');
const resetButton = document.querySelector('#reset-button');
const customPercentageButton = document.querySelector('#custom');
const msg = document.querySelector('#msg');


let bill;
let tipPercentage; 
let numberOfPeople; //Number(numPeopleDisplay.value);

billDisplay.addEventListener('keyup', (e)=>{
    bill = Number(e.target.value);
    // bill = parseFloat(e.target.value);
     console.log(bill);
    calculate()
})

for(let tipPercentageButton of tipPercentageButtons) {
    tipPercentageButton.addEventListener('click',  ()=>{
        // console.log(tipPercentageButton.textContent);
        tipPercentage = Number(tipPercentageButton.textContent.slice(0, -1));
        tipPercentage = tipPercentage/100
        console.log(tipPercentage);
        calculate();

    })
}

/*or this loop
for (let i = 0; i < tipPercentageButtons.length; i++ ){
    tipPercentageButtons[i].addEventListener('click', function () {
        console.log(tipPercentageButtons[i].textContent);
    })
}*/

numPeopleDisplay.addEventListener('keyup', (e)=>{
    if (bill === '') {
        numberOfPeople = 1;
    }else {
        numberOfPeople = parseInt(e.target.value);
    }
    console.log(numberOfPeople)

    calculate()
})

const calculate = function () {
    console.log({bill, tipPercentage, numberOfPeople});
    if (isNaN(bill)){
        // return alert('bill must be a number please');
        msg.classList.add('error')
        msg.textContent = ('bill must be a number please !')
        setTimeout(()=>msg.remove(), 4000)
    }

    if (isNaN(tipPercentage)){
        return
    }

    if (isNaN(numberOfPeople)){
        return
    }
    let tip = bill * tipPercentage;
    let tipPerPerson = tip/numberOfPeople;
    let billPerPeson = bill/numberOfPeople;
    let totalBillPerPerson = billPerPeson + tipPerPerson;
    tipAmountDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalAmountDisplay.textContent = `$${totalBillPerPerson.toFixed(2)}`;
    // console.log({tip, tipPerPerson});
}

resetButton.addEventListener('click', ()=>{
    totalAmountDisplay.textContent = ('$0.00');
    tipAmountDisplay.textContent = ('$0.00');
    tipPercentage = undefined;
    numPeopleDisplay.value = ('1');
    billDisplay.value = ('');
    resetButton.classList.add('disabled');
});

customPercentageButton.addEventListener('click', ()=>{
    tipPercentage = prompt('Enter your tip percentage');
    tipPercentage = parseFloat(tipPercentage);
    console.log({tipPercentage});
    if(isNaN(tipPercentage)) {
        return alert('Please enter a valid tip percentage')
    }
    calculate()
})





