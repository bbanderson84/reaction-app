import React, { Component } from 'react';
import Header from "./components/Header/Header";
import ImageCard from "./components/ImageCard/ImageCard";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import images from "./images.json";

// component - constructor built from images, score starts at 0
class App extends Component {

  constructor(props) {

    super(props)

    this.state = {

      images: images,

      topScore: 0, 

      userScore: 0,
  };
  this.isClicked = this.isClicked.bind(this);
}

// checking to see if image has been clicked 
isClicked = (id) => {
  //creates copy of images
  let clickedImage = this.state.images.filter(images => images.id === id)[0];

  let imageCopy = this.state.images.slice();
  //use random method to sort array
  imageCopy.sort(function() {

    return 0.5 - Math.random();

  });
  // setting logic for click function
  if (!clickedImage.clicked) {

    clickedImage.clicked = true;

    imageCopy[imageCopy.findIndex((image) => image.id === id)] = clickedImage;
    // sets the state of user scores and top score if image is clicked
    this.setState({

      images: imageCopy,

      userScore: this.state.userScore + 1,

      topScore: (this.state.userScore + 1 > this.state.topScore ? this.state.userScore +1 : this.state.topScore),

    });

  } else {
    // 
    let resetImage = imageCopy.map((image) => {
      return {
        id: image.id,
        image: image.image,
        clicked: false,
      }
    });
    // sets state to reset the image array and to user score as 0
    this.setState({
      card: resetImage,
      userScore: 0,
    });

    }
  };

// rendering 
render() {
  return (
  <div id="parent">
    <div id="parent">
      <div className="navybar">
        <Navbar userScore = {this.state.userScore} topScore = {this.state.topScore} />
      </div>
       <div className="container">
        <Header />
      </div>
    </div>

    <div id="parent">
        <div id="container">
          <Wrapper>
              {this.state.images.map(image => (
              <ImageCard
                isClicked={this.isClicked}
                id={image.id}
                image={image.image}
                />
                ))}
          </Wrapper>
      </div>
      <div id="container">
        <Footer />
      </div>
    </div>
  </div>
    );
  }

}


export default App;
