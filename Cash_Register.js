function checkCashRegister(price, cash, cid) {
    const usdAmount = {
      "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }
    var totalCID = 0;
    for(var element of cid) {
      totalCID += element[1];  
    }
    totalCID = totalCID.toFixed(2);
    var changeArray = [];
    let changeToGive = cash - price;
    if (changeToGive > totalCID) {
      return {status: "INSUFFICIENT_FUNDS", change: changeArray}
    } else if (changeToGive.toFixed(2) === totalCID) {
      return {status: "CLOSED", change: cid};
    } else {
      cid = cid.reverse();
      for (var elem of cid) {
        let temp = [elem[0], 0];
        while (changeToGive >= usdAmount[elem[0]] && elem[1] > 0) {
          temp[1] += usdAmount[elem[0]];
          elem[1] -= usdAmount[elem[0]];
          changeToGive -= usdAmount[elem[0]];
          changeToGive = changeToGive.toFixed(2);
        }
        if (temp[1] > 0) {
          changeArray.push(temp);
        }
      }
    }
    if (changeToGive > 0) {
      return {status: "INSUFFICIENT_FUNDS", change:[]}   
    } else {
      return {status: "OPEN", change: changeArray}
    }
  }
    
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));