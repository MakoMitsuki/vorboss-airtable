# Vorboss Airtable Admin Console

Alice has recently started a business selling 3D printed jewellery for cats. 
As you would expect business is booming and Alice wants to keep track of the success of the business with a metrics dashboard.

She is currently managing her orders in a spreasheet in [Airtable](https://airtable.com), and would like to continue to be able to do so.

She would like her dashboard to contain some key figures, such as:
- Total Orders
- Total Orders this month
- Number of orders in progress
- Revenue
- A list of the most recent few orders

..and anything else that you think that she may find useful.

## Prerequisites
- NodeJS / NPM

## Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### To Run
- `npm i`
- `npm run start`

By default, the app will run in `http://localhost:3000`
## Backend

Created using Express. The backend is connected to a specific Airtable API.
Make sure to change accordingly.

### To Run
- `npm i`
- `npm run build`
- `npm run start`

By default, the app will run in `http://localhost:3001`

Ensure that you create a .env in the backend folder using the `.env.sample` file.

## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.