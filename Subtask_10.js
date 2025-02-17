function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    // Base fare
    let fare = 300;
  
    // Add charges based on class type
    if (classType === "business") {
      fare += 200;
    } else if (classType === "first") {
      fare += 500;
    }
  
    // Add luggage charges (every 10kg over 20kg is +$50)
    if (luggageWeight > 20) {
      const extraLuggage = Math.ceil((luggageWeight - 20) / 10);
      fare += extraLuggage * 50;
    }
  
    // Apply discounts for students and seniors
    if (isStudent) {
      fare *= 0.85; // 15% off for students
    } else if (isSenior) {
      fare *= 0.90; // 10% off for seniors
    }
  
    return fare;
  }
  
  // Example usage:
  console.log(calculateFlightFare("business", 25, true, false));  // Business class, 25kg luggage, student
  console.log(calculateFlightFare("first", 15, false, true));     // First class, 15kg luggage, senior
  console.log(calculateFlightFare("economy", 30, false, false)); // Economy class, 30kg luggage, no discounts
  