import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';

import "../style/IndexHome.css"

class IndexHome extends Component {
  render() {
    return (
      <div>
        <FirstRow/>
        <SecondRow/>
      </div>
    );
  }
}

export default IndexHome;
