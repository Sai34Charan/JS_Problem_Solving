// Online Shopping Discount & Free Shipping
function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shipping = 0;

    // Apply discount based on the order amount
    if (orderAmount > 1000) {
        discount = 0.20; // 20% discount
    } else if (orderAmount >= 500 && orderAmount <= 1000) {
        discount = 0.10; // 10% discount
    }

    // Calculate the discounted amount
    const discountedAmount = orderAmount - (orderAmount * discount);

    // Determine shipping charges
    if (orderAmount > 50) {
        shipping = 0; // Free shipping
    } else {
        shipping = 10; // Express shipping
    }

    // Calculate the final amount
    const finalAmount = discountedAmount + shipping;

    return finalAmount;
}

// Example usage
console.log(calculateFinalAmount(1200)); // Final amount with 20% discount and free shipping
console.log(calculateFinalAmount(750));  // Final amount with 10% discount and free shipping
console.log(calculateFinalAmount(400));  // Final amount with no discount and express shipping
console.log(calculateFinalAmount(50));   // Final amount with no discount and express shipping
