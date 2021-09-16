const express = require('express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000;

/**
 * Routers
 */
const reportRouter =require("./src/routes/report.router.js");

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MedDoc API',
            version: '1.0.0',
            contact:{
                name:'Ravi S. Singh',
                url:'https://ravissingh.wordpress.com'
            }
        },
        servers: [
            {
                url: `http://localhost:${port}`,
                description: 'Development server',
            },
            {
                url: `https://code-20210908-ravisingh.herokuapp.com`,
                description: 'Production server',
            },
        ],
    },
    apis: ['./src/routes/*.js'], // files containing annotations as above
};

const swaggerSpec = swaggerJSDoc(options);

//enable cors for all domain
app.use(cors())

app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/reports',reportRouter);


app.get('/', (req, res) => {
    res.send('Server is healthy')
})



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})