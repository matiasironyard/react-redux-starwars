/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import placeholder from '../images/icon2.png'; // Tell Webpack this JS file uses this image
import Axios from 'axios';

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

  componentDidMount() {
    if(this.props.getImage === false ){
      return
    } else {
      let self = this;
      let query = encodeURIComponent(this.props.name);
      Axios.get('https://wikijs.herokuapp.com/swapi?search=' + query).then(function(response) {
           let url = response.data;
           self.setState({img: url})
      })

    }
  }

  render() {
    let style = {
      "backgroundImage": "url("+this.state.img+")",
      "backgroundSize" : "cover",
      "backgroundPosition": "top",
      "height": "400px"
    }
    return (
      <div>
        <div style={style}></div>
      </div>
    )
  }
}
export default ImageSearch;
