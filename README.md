# Weather Recipes Backend

This is the API used in the [Weather Recipes]( https://weatherrecipes-front.vercel.app/) project and was developed for [Biz Capital](https://bizcapital.com.br/)'s selection process.

## Tolling

NodeJs</br>
Express</br>
Jest</br>
Supertest</br>
Eslint</br>

## Requirements

You must have installed node and npm.

## How to run:

First run `npm i` to install all dependencies.

Then create a .env.development file following as an example the .env.example file, setting the environment variables accordingly. with data from your database.

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open http://localhost:PORT to view it in the browser.

The project will rebuild if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the sequencial mode.

### `npm run test:watch`

Launches the test runner in the interactive watch mode.

## Routes

### `GET /city/find?name={name}`
Returns a list of cities that match the searched name.

### `GET /weather?lat={lat}&lon={lon}`
Returns a list of weather information for the searched location.

### `GET /recipe?lat={lat}&lon={lon}`
Returns a random recipe based on the weather of the location you search and the weather information.

## Deployment

This api is deployed on Heroku, you can visit it by accessing the url https://weather-recipes.herokuapp.com/.
