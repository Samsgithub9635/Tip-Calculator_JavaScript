/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

// Get number of people from numberOfPeopleDiv
let countOfPeople = Number(numberOfPeopleDiv.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  // Get bill from user input & convert it into a number
  let billAmount = Number(billInput.value);
  
  // Get the tip from user & convert it into a percentage (divide by 100)
  let tipPercentage = Number(tipInput.value) / 100;
  
  // Get the total tip amount
  let tipAmount = billAmount * tipPercentage;
  
  // Calculate the total (tip amount + bill)
  let billTotal = tipAmount + billAmount;
  
  // Calculate the per-person total (total divided by number of people)
  let perPersonAmount = billTotal / countOfPeople;
  
  // Update the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerText = `$${perPersonAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};
  
// ** Splits the bill between more people **
const increasePeople = () => {
  // Increment the amount of people
  countOfPeople += 1;
  
  // Update the DOM with the new number of people
  numberOfPeopleDiv.innerText = countOfPeople;
  
  // Calculate the bill based on the new number of people
  calculateBill();
};
  
// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // Guard clause
  // If amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (countOfPeople <= 1) {
    alert("Number of People can't be less than 1 or negative");
    return;
  }
    
  // Decrement the amount of people
  countOfPeople -= 1;
  
  // Update the DOM with the new number of people
  numberOfPeopleDiv.innerText = countOfPeople;
  
  // Calculate the bill based on the new number of people
  calculateBill();
};
