# JS_Problem_Solving
# Project Overview

This repository contains a collection of various JavaScript-based functions designed to solve common real-world problems. Each function implements a specific business logic for scenarios ranging from ATM withdrawals, online shopping discounts, to flight ticket pricing. Below is an overview of each project along with a description of the function’s functionality.

---

## 1. ATM Withdrawal System

### Description:
The function simulates an ATM withdrawal system by validating the user’s PIN, checking for sufficient balance, and ensuring that the withdrawal amount is a multiple of 100.

### Function:
```javascript
function atmWithdrawal(balance, amount, pin, enteredPin)
```

### Logic:
- Verifies if the entered PIN matches the actual PIN.
- Ensures sufficient funds are available.
- Checks if the withdrawal amount is in multiples of 100.

---

## 2. Online Shopping Discount & Free Shipping

### Description:
This function calculates the final payable amount after applying discounts based on the order amount and shipping charges.

### Function:
```javascript
function calculateFinalAmount(orderAmount)
```

### Logic:
- Discounts are applied as:
  - 20% for orders above $1000
  - 10% for orders between $500 and $1000
  - No discount for orders below $500
- Shipping charges:
  - Free shipping for orders above $50
  - Express shipping ($10) for orders below $50

---

## 3. Student Grading System with Extra Credit

### Description:
The function determines the student's final grade based on their marks and attendance, with extra credit added for high attendance.

### Function:
```javascript
function calculateGrade(marks, attendance)
```

### Logic:
- Assigns grades based on marks.
  - A for 90+ marks, B for 80-89, C for 70-79, D for 60-69, and F for below 60.
- Adds 5 extra marks if attendance is above 90%.

---

## 4. Smart Traffic Light System

### Description:
This function controls the duration of the green traffic light based on traffic density.

### Function:
```javascript
function trafficLightControl(density)
```

### Logic:
- "Heavy Traffic" → Green light for 60 seconds.
- "Moderate Traffic" → Green light for 40 seconds.
- "Light Traffic" → Green light for 20 seconds.

---

## 5. Movie Ticket Pricing with Time and Age Discount

### Description:
The function calculates the movie ticket price based on age and showtime.

### Function:
```javascript
function calculateTicketPrice(age, showTime)
```

### Logic:
- Standard price is $12.
- Discounts based on age:
  - 30% off for seniors (above 60).
  - 40% off for children (below 12).
- Matinee shows (before 5 PM) get a 20% discount.

---

## 6. Job Application Filter

### Description:
This function checks if an applicant is eligible for a job based on age, experience, and qualification.

### Function:
```javascript
function isEligibleForJob(age, experience, qualification)
```

### Logic:
- Age should be between 21 and 55 years.
- At least 2 years of experience required.
- Minimum qualification: Bachelor's Degree.

---

## 7. E-commerce Coupon Redemption

### Description:
The function applies a coupon discount based on the coupon code provided.

### Function:
```javascript
function applyCoupon(orderAmount, couponCode)
```

### Logic:
- "DISCOUNT10" → 10% off for orders above $500.
- "FREESHIP" → Free shipping for orders above $200.
- Both coupons cannot be used together.

---

## 8. Fitness Membership Plan

### Description:
This function suggests the best gym membership plan based on the user’s preferences.

### Function:
```javascript
function choosePlan(planType, wantsTrainer, wantsDietPlan)
```

### Logic:
- Provides different plans:
  - Basic: $20/month, gym access only.
  - Premium: $50/month, gym access + personal trainer.
  - VIP: $80/month, gym access + trainer + diet plan.

---

## 9. Electricity Bill Calculation with Peak Hours

### Description:
The function calculates the electricity bill based on consumption and time of day, considering peak-hour surcharges.

### Function:
```javascript
function calculateElectricityBill(units, timeOfDay)
```

### Logic:
- Normal hours (8 AM - 8 PM):
  - $5 per unit for up to 100 units.
  - $4 per unit for 100-300 units.
  - $3 per unit for above 300 units.
- Peak hours (8 PM - 8 AM) apply a 10% surcharge.

---

## 10. Flight Ticket Booking System

### Description:
This function calculates the flight fare based on class, luggage weight, and applicable discounts.

### Function:
```javascript
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior)
```

### Logic:
- Base fare: $300
- Additional charges:
  - $200 for Business class.
  - $500 for First class.
  - $50 per 10kg extra for luggage over 20kg.
- Discounts:
  - 15% off for students.
  - 10% off for seniors (above 60 years).

---

## How to Use

Each function can be called with the respective parameters based on the scenario. Below is a general structure for calling any function:

```javascript
const result = functionName(parameters);
console.log(result);  // Display the result
```

### Example:

For the **Flight Ticket Booking System**, you can call it like this:

```javascript
const flightFare = calculateFlightFare("business", 25, true, false);
console.log(flightFare);  // Output the final price
```

---

## Conclusion

These projects provide solutions to real-world scenarios and showcase the versatility of JavaScript for solving practical problems. You can extend and modify the logic as needed based on additional requirements or business rules.

---
