const { database } = require("../data/init");
const { getAllPerson, getReport } = require("./person");

test('that database exists ', () => {
    expect(database).toBeDefined();
})

test('should get list of all people',async()=>{
    const data = await getAllPerson();
    expect(data.length).toBe(6);
})

test('should get list overweight people',async()=>{
    const data = await getReport();
    expect(data.length).toBe(2);
})



