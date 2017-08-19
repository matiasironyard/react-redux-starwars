import React, {Component} from 'react';
import FilterBar from '../components/Filter-bar-sample';
import NavCards from '../components/Nav-cards';
import About from '../components/About';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class Explorer extends Component {

  render() {

    return (
      <div className="row justify-content-center no-gutters">
        <div className="col-10 app-body">
          <div className="row">
            <div className="col-lg-6  col-sm-12 exp-col">
              <About/>
            </div>
            <div className="col-lg-6  col-sm-12 exp-col">
              <FilterBar/>
              <NavCards/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Explorer;
