

let FirstUnit = document.querySelector(".FirstUnit");
let SecondUnit = document.querySelector(".SecondUnit");
let FirstUnitValue = document.querySelector(".FirstUnitValue");
let SecondUnitValue = document.querySelector(".SecondUnitValue");
let CalculateValuesOfCurrencies = document.querySelector(".CalculateValuesOfCurrencies");
let reversePointers = document.querySelector(".reversePointers");
let CleanValues = document.querySelector(".CleanValues");
const currency = new Currency();

CalculateValuesOfCurrencies.addEventListener("click",exchange)

function exchange() {
    let amount = Number(FirstUnitValue.value.trim());
    let firstCurrencyValue = FirstUnit.options[FirstUnit.selectedIndex].textContent;
    let secondCurrencyValue = SecondUnit.options[SecondUnit.selectedIndex].textContent;
    currency.exchange(amount,firstCurrencyValue,secondCurrencyValue)
    .then((result) => {
      SecondUnitValue.value = result.toFixed(2);
    })
  
}
reversePointers.addEventListener("click",()=>{
  let firstCurrencyValue = FirstUnit.options[FirstUnit.selectedIndex].textContent;
  let secondCurrencyValue = SecondUnit.options[SecondUnit.selectedIndex].textContent;
  SecondUnit.options[SecondUnit.selectedIndex].textContent = firstCurrencyValue;
  FirstUnit.options[FirstUnit.selectedIndex].textContent = secondCurrencyValue;

  let FirstUnitValueForReverse = FirstUnitValue.value;
  let SecondUnitValueForReverse = SecondUnitValue.value;
  FirstUnitValue.value = SecondUnitValueForReverse;
  SecondUnitValue.value = FirstUnitValueForReverse;
  
  
});
CleanValues.addEventListener("click",()=>{
  FirstUnitValue.value = "";
  SecondUnitValue.value = "";
})
