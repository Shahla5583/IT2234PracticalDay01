function getMaxPurchase(budget, keyboards, mice) {
    let maxPurchase = -1;
    
    for (let keyboard of keyboards) {
        for (let mouse of mice) {
            let total = keyboard + mouse;
            if (total <= budget && total > maxPurchase) {
                maxPurchase = total;
            }
        }
    }
    
    return maxPurchase;
}

// Test cases
console.log(getMaxPurchase(60, [40,50,60], [5,8,12])); 
console.log(getMaxPurchase(10, [3,1], [5,2,8])); 
console.log(getMaxPurchase(20, [30,15], [8,10,6])); 
