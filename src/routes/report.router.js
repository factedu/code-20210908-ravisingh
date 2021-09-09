const express = require('express');
const { getAllPerson, getReport } = require('../models/person');

const router = express.Router();

/**
 * @swagger
 * /api/reports/:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.get('/', async(request, response) => {
    try {
        const person = await getAllPerson();
        response.status(200).json(person);
    } catch (error) {
        response.status(500).json({error});
    }
})

/**
 * @swagger
 * /api/reports/overweight:
 *   get:
 *     summary: Retrieve a list overweight people.
 *     description: This open api is use to get the list of overweight people
 *     responses:
 *       200:
 *         description: A list of people.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The doc ID.
 *                         example: 0
 *                       Gender:
 *                         type: string
 *                         description: The gender of person.
 *                         example: Leanne Graham
 *                       HeightCm:
 *                         type: integer
 *                         description: The height of personin Cm.
 *                         example: 171
 *                       WeightKg:
 *                         type: integer
 *                         description: The weight of person in Kg.
 *                         example: 77
 *                       bmiCategory:
 *                         type: string
 *                         description: BMI Category of person.
 *                         example: Overweight
 *                       healthRisk:
 *                         type: string
 *                         description: Level of health risk the person is in.
 *                         example: Enhanced Risk
 */
router.get('/overweight',async(request,response)=>{
    try {
        const person = await getReport();
        response.status(200).json(person);
    } catch (error) {
        response.status(500).json({ error });
    }
})


module.exports = router;