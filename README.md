# README

## Internet Flicks
[Live Demo](https://internet-flicks.herokuapp.com/#/)

Internet Flicks is a movie viewing app drawing inspiration from Netflix with a cult classics twist. This application was made using Rails/PostgreSQL for the backend and React.js and Redux for the frontend.

## Features

### User Auth
  * Users can sign up for an account, login, and demo login for easy access
  * Keep user information safe by authentifying users using BCrypt
  
  ![](/app/assets/gifs/UserAuth.gif)
  
### Video Hosting
  * Hosted videos on AWS S3 so application can scale
  * Pulled videos on hosted on AWS S3 into application and creating components for each genre of movies
  
  ![](/app/assets/gifs/Movies.gif)
  
### CRUD Features
  * Implemented CRUD features such as creating a list item and removing items from myList
  * Clicking on the thumbnail of the movie opens a popout that shows more information about the movie
  * Clicking on the play now button leads to a movie show page
  
  ![](/app/assets/gifs/CRUD.gif)
  
### Search Bar
  * Implemented search bar allowing users to search movies by name or genre
  
  ![](/app/assets/gifs/Search.gif)

## Technologies

The backend is designed to make API requests, process data, and respond back with the data requested by our front end. RESTful routes were used to keep a clean structure to follow.

The frontend uses React with Redux framework to dynamically display content.


