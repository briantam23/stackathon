# 🌤 Air Quality Index App

* Integrated the Google Maps API with AutoComplete & Geolocation along with the World Air Quality Index API's Map Overlay in order to display Air Quality Indexes around the world
* Incorporated matching Material Design (also by Google) along with Flexbox to create a Single Page Application (SPA) with a user-friendly UI / UX
* Implemented Responsive Web Design (RWD) using Media Queries

## Live Demo

Currently deployed to [Heroku](https://stackathon-btam.herokuapp.com)!

## Setting up

This app requires a Google API Key & Air Quality Index Key (from https://aqicn.org/api) which must be set in `.env.js` or set as an environment variable on `GOOGLE_API_KEY` & `AIR_QUALITY_INDEX_KEY`.

### Dependencies

* [Express](https://expressjs.com)
* [EJS](https://ejs.co)

### Installation

* `npm install` (or `yarn install`)
* `npm start`
* open up [localhost:3000](http://localhost:3000) in a web browser