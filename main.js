// Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (amount) {
    // Initialize a JavaScript object to hold the coins
    amount = amount * 100;
    var coinPurse = {};
    
    coinPurse.quarters = Math.floor(amount / 25);
    amount = amount % 25;
    
    coinPurse.dimes = Math.floor(amount / 10);
    amount = amount % 10;

    coinPurse.nickels = Math.floor(amount / 5);
    amount = amount % 5;

    coinPurse.pennies = Math.floor(amount / 1);
    amount = amount % 1;
  
    return coinPurse;
  }
  
  var coins = coinCounter()
  console.log(coinCounter(.87));
  console.log(coinCounter(3.99));


//NOT AN EFFICIENT WAY TO DO THIS
  // function coinCounter (userAmount) {
//   // Initialize a JavaScript object to hold the coins
//   var coinPurse = {};
  
//   coinPurse.quarters = 0;
//   coinPurse.dimes = 0;
//   coinPurse.nickels = 0;
//   coinPurse.pennies = 0;

//   console.log(coinPurse);

//   userAmount = 5.07;
//   let dollarAmount = userAmount.toString()[0];
//   console.log(dollarAmount);
//   let coinAmount1 = userAmount.toString()[2];
//   let coinAmount2 = userAmount.toString()[3];
//   let coinAmount = coinAmount1 + coinAmount2;
// //   console.log(dollarAmount);
//   console.log(coinAmount);

//   if ( coinAmount < 5) {
//     coinPurse.pennies = coinAmount2;
//     console.log(coinPurse.pennies);
//     } else if (coinAmount >= 5 && coinAmount < 10) {
//         coinPurse.nickel = 1
//         coinPurse.pennies = coinAmount2 - 5;
//         console.log(coinPurse);
//     } else if (coinAmount >= 10 && coinAmount < 15) {
//         coinPurse.dime = 1
//         coinPurse.pennies = coinAmount2;
//     } else if (coinAmount >=15 && coinAmount < 20) {
//         if (coinAmount = 15) {
//             coinPurse.dime = 1;
//             coinPurse.nickel = 1;
//         }
//         coinPurse.dime = 1
//         coinPurse.pennies = coinAmount2 - 5;
//     } else if (coinAmount >= 20 && coinAmount < 25) {
//         coinPurse.pennies = coinAmount2;   
//     } else if (coinAmount >= 25 && coinAmount < 30) {
//         coinPurse.pennies = coinAmount2 - 5;       
//     } else if (coinAmount >= 30 && coinAmount < 35) {
//         coinPurse.pennies = coinAmount2;              
//     } else if (coinAmount >= 35 && coinAmount < 40) {
//         coinPurse.pennies = coinAmount2 - 5;                
//     } else if (coinAmount >=40 && coinAmount < 45) {
//         coinPurse.pennies = coinAmount2;                    
//     } else if (coinAmount >=45 && coinAmount < 50) {
//         coinPurse.pennies = coinAmount2 - 5;                        
//     } else if (coinAmount >=50 && coinAmount < 55) {
//         coinPurse.pennies = coinAmount2;                           
//     } else if (coinAmount >=55 && coinAmount < 60) {
        
//         coinPurse.pennies = coinAmount2 - 5;                                     
//     } else if (coinAmount >=60 && coinAmount < 65) {
//         coinPurse.pennies = coinAmount2;
//     } else if (coinAmount >=65 && coinAmount < 70) {
//         coinPurse.pennies = coinAmount2 - 5;
//     } else if (coinAmount >=70 && coinAmount < 75) {
//         coinPurse.pennies = coinAmount2;
//     } else if (coinAmount >=75 && coinAmount < 80) {
//         coinPurse.pennies = coinAmount2 - 5;
//     } else if (coinAmount >=80 && coinAmount < 85) {
//         coinPurse.pennies = coinAmount2;
//     } else if (coinAmount >=85 && coinAmount < 90) {
//         coinPurse.pennies = coinAmount2 - 5;
//     } else if (coinAmount >=90 && coinAmount < 95) {
//         coinPurse.pennies = coinAmount2;
//     } else if (coinAmount >=95 && coinAmount < 100) {
//         coinPurse.pennies = coinAmount2 - 5;
//     } else if (coinAmount = 100) {
//         coinPurse.quarters = 4
// }
//     coinPurse = dollarAmount + coinAmount;
//     return coinPurse;
// }

// var coins = coinCounter();
// console.log(coinCounter());

// // console.log(coinCounter(6.98));

// // // console.log();
