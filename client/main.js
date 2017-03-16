//Any JS in here is automatically ran for us


// Import the React library
import React, {Component} from "react";
import ReactDOM from "react-dom";
import ImageList from "./components/image-list";
import Header from "./components/page-header";
import axios from "axios";



//Create a Component

class App extends Component  {


  constructor(props) {
    super(props);

    this.state = {images: [] };
  }

  componentWillMount() {
    //fantastic place to load data!

   axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
    .then(response => this.setState({images: response.data.data}));
  }

  render() {
    console.log(this.state.images)
    return (
    <div>
      <Header />
      <ImageList images={this.state.images}/>
    </div>
    );
  }
};

//Render this component
Meteor.startup(() => {
  ReactDOM.render(<App/>, document.querySelector(".container"));
});

