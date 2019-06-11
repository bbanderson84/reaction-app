# reaction-app


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



### User Instructions 

To play the game, the user clicks an image. The score increases if the image has not been clicked before.<br>
If the image has been clicked, the user score will reset. To start a new game, the user must click an image that has not been clicked yet.

### Technology Used
- React
- Bootstrap, CSS
- Javascript

### Breakdown
Each component (Navbar, Header, Wrapper, ImageCard, and Footer) all have their seperate js files and are imported into the App.js file, which holds the logic and functionality of scoring and clicking on images, and also renders all of the components.

### Functionality
#### Component App , constructor is built from the images, sets score at 0, function to check if an image has been clicked - creates copy of images - uses random method to sort array - sets logic for click function
![Alt text](/screenshots/App1.png?raw=true "App.js File")

#### sets the state of user scores and top score if an image is clicked, sets state to reset the image array and score as 0, renders components to page
![Alt text](/screenshots/App2.png?raw=true "App.js File")

![Alt text](/screenshots/App3.png?raw=true "App.js File")


### Link to deployed App
![Alt text](https://bbanderson84.github.io/reaction-app/ "Deployed Working Application")

### Link to deployed App
![Deployed Working Application](https://bbanderson84.github.io/reaction-app/ "Deployed Working Application")
