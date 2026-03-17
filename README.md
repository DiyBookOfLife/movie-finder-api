# Movie Finder API

A RESTful API built with Node.js and Express that allows users to search for movies and retrieve detailed movie information using the OMDb API.

## Features

- Search movies by title
- Get movie details by ID
- RESTful API endpoints
- External API integration

## Tech Stack

- Node.js
- Express.js
- OMDb API

## Endpoints

GET /api/search?title=batman  
GET /api/movies/:id

## Installation

npm install  
npm start

## Environment Variables

Create a .env file:

OMDB_API_KEY=your_api_key
PORT=8080
