import React, { Component } from "react";
import axios from "axios";
import SliderTemplates from "./SliderTemplates";
import {URL} from '../../../config';

class NewsSlider extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    axios
      .get(`${URL}?_start=${this.props.start}&_end=${this.props.end}`)
      .then(response => {
        this.setState({
          news: response.data
        });
      });
  }
  render() {
    return (
      <div>
        <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
      </div>
    );
  }
}

export default NewsSlider;
