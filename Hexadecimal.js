function HexSWC(decimal) {
    const hexMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    return hexMap[decimal];
}

function decimalToHex(decimal) {
    if (decimal === 0) return '0';
    let hex = '';
    while (decimal > 0) {
        hex = HexSWC(decimal % 16) + hex;
        decimal = Math.floor(decimal / 16);
    }
    return hex;
}

// Test cases
console.log(decimalToHex(255)); 
console.log(decimalToHex(16));  
console.log(decimalToHex(4095)); 
