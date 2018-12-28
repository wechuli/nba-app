import React, { Component } from "react";
import axios from "axios";
import SliderTemplates from "./SliderTemplates";

class NewsSlider extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3004/articles?_start=0&_end=5`)
      .then(response => {
        this.setState({
          news: response.data
        });
      });
  }
  render() {
    return (
      <div>
        <SliderTemplates data={this.state.news}/>
      </div>
    );
  }
}

export default NewsSlider;
