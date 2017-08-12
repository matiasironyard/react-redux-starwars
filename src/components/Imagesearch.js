/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
REACT IMPORTS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
import React, {Component} from 'react';
import Axios from 'axios';
import  GoogleImages from 'google-images';


import placeholder from '../images/icon2.png'; // Tell Webpack this JS file uses this image

const client = new GoogleImages('CSE ID', 'API KEY');
console.log('c', client)

client.search('Steve Angello')
    .then(images => {
      console.log(images)

    });


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
