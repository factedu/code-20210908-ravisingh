const data = require('../src/data/person.seed.json');
const { getBMI, getBmiCategoryAndRisk } = require('../src/helpers/BMICalculator');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('person').del()
    .then(function () {
      const dataToBeAdded = data.map(d=>{
        d.bmi= getBMI(d.WeightKg,d.HeightCm);
        const addedData = getBmiCategoryAndRisk(d.bmi);
        return {...d,...addedData};
      })
      console.log(dataToBeAdded);
      // return dataToBeAdded;
      // Inserts seed entries
      return knex('person').insert(dataToBeAdded);
    });
};
