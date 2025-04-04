function maxRearrange(num) {
    if (num < 10) return num; // Ensuring at least two digits
    
    let digits = [...num.toString()].map(Number);
    digits.sort((a, b) => b - a);
    
    return Number(digits.join(''));
}

// Test cases
console.log(maxRearrange(215)); 
console.log(maxRearrange(1093));
console.log(maxRearrange(507)); 
