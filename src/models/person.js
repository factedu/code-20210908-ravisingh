const { database } = require("../data/init");

/**
 * get All data from person
 * @returns array of person
 */
exports.getAllPerson = ()=>{
    return database('person').select();
}

/**
 * get overweight person list
 * @returns array of person who are Overweight
 */
exports.getReport = ()=>{
    return database('person').where({bmiCategory:'Overweight'}).select();
}