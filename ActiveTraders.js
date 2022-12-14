function mostActive(customers) {
  let trades = {};
  let biggestTraders = [];
  // First sort all the strings in ascending order
  customers.sort((a, b) => {
    return a.localeCompare(b);
  });
  //Loop over the customers array and fill the object properties with the names of each customer
  for (let i = 0; i < customers.length; i++) {
    trades[customers[i]] = 0;
  }
  //Loop over the customer array again and increment by 1 for each trade we have recorded in the customers Array
  for (let i = 0; i < customers.length; i++) {
    if (trades.hasOwnProperty(customers[i])) {
      trades[customers[i]] += 1;
    }
  }
  // Loop over each key in the object, and if the percentage of trades is greater than 11% record them as a valuable customer
  for (const numTrades in trades) {
    const percentage = (trades[numTrades] / customers.length) * 100;
    if (percentage >= 11) {
      biggestTraders.push(numTrades);
    }
  }
  console.log(biggestTraders);
  return biggestTraders;
}

mostActive([
  "Alpha",
  "Omega",
  "Alpha",
  "Alpha",
  "Alpha",
  "Alpha",
  "Alpha",
  "Alpha",
  "Alpha",
  "Zeta",
]);
