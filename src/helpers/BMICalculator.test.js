const BMICalculator = require("./BMICalculator");

test('getBMI function exists',()=>{
    expect(BMICalculator.getBMI).toBeTruthy();
})

test('getBMI caculates the BMI correctly',()=>{
    expect(BMICalculator.getBMI(75,175)).toBe(24.49);
})

test('getBMI to be NaN for wrong params',()=>{
    expect(BMICalculator.getBMI('asdfkg', 175)).toBe(NaN);
})

test('getBmiCategoryAndRisk function exists', () => {
    expect(BMICalculator.getBmiCategoryAndRisk(1.5)).toBeTruthy();
})