
exports.up = function(knex) {
    return knex.schema
        .createTable('person', function (table) {
            table.increments('id').primary();
            table.string('Gender');
            table.integer('HeightCm').unsigned();
            table.integer('WeightKg').unsigned();
            table.integer('bmi').unsigned();
            table.string('bmiCategory');
            table.string('healthRisk');
            table.timestamps(true, true);
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('person')
};
