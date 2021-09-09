/**
 * Calculate the BMI Index as per given mass and height
 * The BMI(Body Mass Index) in (kg/m2) is equal to the weight in kilograms (kg) 
 * divided by your height in meters squared(m)^2
 * @param {number} mass body mass in kg
 * @param {number} height body height in centimeter
 * @returns {number} caculated BMI returns NaN for unexpected params type
 */
const getBMI = (mass,height)=>{
    // type safety checks
    mass = parseInt(mass);
    height = parseInt(height);
    const heightInMt = height / 100;
    return parseFloat((mass / (heightInMt ** 2)).toFixed(2));
}

/**
 * Get Category and Risk data for given BMI
 * @param {number} bmi Body Mass Index
 * @returns {object} sample { bmiCategory:'Underweight',healthRisk:'Malnutrition risk'}
 */
const getBmiCategoryAndRisk=(bmi)=>{
    if(bmi<=18.4){
        return { bmiCategory:'Underweight',healthRisk:'Malnutrition risk'};
    }
    if(bmi<=24.9){
        return { bmiCategory: 'Normal weight', healthRisk: 'Low risk' };;
    }
    if(bmi<=29.9){
        return { bmiCategory: 'Overweight', healthRisk: 'Enhanced risk' };;
    }
    if(bmi<=34.9){
        return { bmiCategory: 'Moderately obese', healthRisk: 'Medium risk' };;
    }
    if(bmi<=39.9){
        return { bmiCategory: 'Severely obese', healthRisk: 'High risk' };;
    }
    return { bmiCategory: 'Very severely obese', healthRisk: 'Very high risk' };;
}

module.exports = { getBMI, getBmiCategoryAndRisk};