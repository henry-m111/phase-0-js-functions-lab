function calculateTax(amount) {
    return amount * 0.10;
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function isPalindrome(word) {
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}

// Tests (Optional - you can remove these before submitting)
console.log(calculateTax(100));            // Should be 10
console.log(convertToUpperCase("hello"));  // Should be HELLO
console.log(findMaximum(5, 10));           // Should be 10
console.log(isPalindrome("radar"));        // Should be true

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    // 1. Calculate the discount (e.g., 100 * 0.20 = 20)
    let discount = originalPrice * (discountPercentage / 100);
    // 2. Subtract the discount from the original (e.g., 100 - 20 = 80)
    return originalPrice - discount;
}
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };


