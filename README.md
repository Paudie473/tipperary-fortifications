# Tipperary Castles and Fortifications

A web application for documenting and viewing castles and other historical fortified sites of County Tipperary

## Features

- Functional User Portal with Sign Up and Login Routes
- Add a site with location and historical details
- Add feature details of your site
- Upload an image to represent your site
- Admin login for moderation
- Persistent site data in a Mongo Atlas DB

## Technologies

### Infrastructure

- node
- openapi
- mongo
- render

### Back End

- @hapi/hapi
- @hapi/cookie
- @hapi/vision
- @hapi/inert
- @hapi/boom
- hapi-auth-jwt2
- joi
- lowdb
- mongoose

### Components

- hapi-swagger
- dotenv
- uuid
- axios
- cloudinary

### Components

- nodemon
- eslint
- prettier
- chai
- mocha
- mongoose-seeder

### Front End

- bulma
- font-awesome
- handlebars

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a .env file in project route directory following the example set in the .env_example file

3. Start the app

    ```bash
   npm run start
   ```

To start the app with Nodemon for automatic restarts when file changes

    ```bash
   npm run dev
   ```

4. Open the web app on http://localhost:3000

5. Run the tests

    ```bash
   npm run testmodels
   npm run testapi
   ```

6. To view api documentation visit http://localhost:3000/documentation when the app is running