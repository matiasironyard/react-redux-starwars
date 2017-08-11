/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import Axios from 'axios';
import wiki from 'wikijs';
import placeholder from '../images/icon2.png'; // Tell Webpack this JS file uses this image

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENT
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

class ImageSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      img: placeholder
    }
  }

  componentDidMount(){
    wiki().page(this.props.name)
    .then(page => page.mainImage())
    .then((response)=>{
      this.setState({img: response})
    });
  }


  render() {

    return (
      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <img src={this.state.img}  alt="..." className="img-thumbnail"/>
      </div>
    )
  }
}
export default ImageSearch;
