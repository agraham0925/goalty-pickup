# Goaltimate Pickup
This served as my final project for General Assembly's Web Development Immersive course. This app is intended to aid a group of individuals who regularly play pickup games of Goaltimate on weekends to schedule where and what time the games will occur.

This project is a work in progress. I hope to convert to an express/node.js app.

## Challenges:
I faced a lot more challenges building this application than I thought I would going into it. I chose to use Firebase for storing my data, a technology that was new to me. While the platform markets it's simplicity, the learner curve has proven to be a bit more challenging than anticipated. Some challenges that I encountered:
* Storage of user email and password separate from rest of data:
    ** As Firebase creates users only with an email and password, I realized that I would need to create a separate table to store the additional user info I wanted to collect. I was able to hard code some data for this connection, however it does not work when a new user registers. I've consulted the Firebase documentation and attempted to use the user creation event listener, but have not been able to successfully execute.
* Event listener for number of users:   
    ** As I began working with the database queries to listen for 8+ users to confirm availability for a game, I've run into challenges for accessing my nested data.

## In the future, I would like to add:
* Connection to weather API to display the expected conditions for the weekend
* A component to visually represent the current status of location and time voting
* Deleting users in games automatically each week
* On screen and text message notification to users to let them know if a game is on or not for the weekend

## Wireframes:
Registration and login:
![alt text](public/images/login.png)
Voting for field pickup options page:
![alt text](public/images/usergameavailability.png)