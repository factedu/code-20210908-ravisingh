# code-20210908-ravisingh
Simple API to report BMI and Health Risk of Patients [POC-Repo]

# API Endpoint
https://code-20210908-ravisingh.herokuapp.com/api/reports/overweight

# Developmet Env Setup
```
git clone git@github.com:factedu/code-20210908-ravisingh.git
# Cd into code-20210908-ravisingh
$ cd code-20210908-ravisingh
$code-20210908-ravisingh/>npm install
```

### Intall knex globally 
This project needs knex as dev dependency in order to seed and migrate

## DB Migration
Edit db/migrations/*_initial.js to add or update fields
when done migrate the changes
```
npm run db:migrate
```

## Seed json data
There is a file seeds/people.js that contains initial data to seed the data to db just run the code below:
```
npm run db:seed
```

## Testing
This app uses jest as testing framework all the relevent test files are written as main_js_filename.test.js so anything ending with ".test.js" becomes a test file to run the test:
```
npm test
```

## CI/CD
This app uses heroku pipeline for CI/CD anything pushed to main branch will be deployed to heroku server and would be available at
https://code-20210908-ravisingh.herokuapp.com/api [API Endpoint]

## Documentation of api
Intracting Swagger based API Document can be found at
https://code-20210908-ravisingh.herokuapp.com/docs

## Deveoper Contact
Name : Ravi S Singh
Email : factedu@gmail.com
