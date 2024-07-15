function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let impuesto = preTaxAndTipAmount * 0.095;
    let propina = preTaxAndTipAmount * 0.15;
    return preTaxAndTipAmount + impuesto+ propina;
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
