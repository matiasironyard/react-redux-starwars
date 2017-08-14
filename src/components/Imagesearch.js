/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import Axios from 'axios';

import placeholder from '../images/icon2.png'; // Tell Webpack this JS file uses this image

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class ImageSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: placeholder
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <img src={this.state.img} alt="..."/>
      </div>
    )
  }
}
export default ImageSearch;
