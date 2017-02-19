import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import "../style/IndexHome.css"

class FirstRow extends Component {
  render() {
    return (
      <Row>
        <Col md={8} >
          <div className="Main">
            <h1>
              We define pupose, uses & benefits
            </h1>
          </div>
        </Col>
        <Col md={4} >
          <div>
            Stay educated, There is no harm in learning
          </div>
        </Col>
      </Row>
    );
  }
}

export default FirstRow;
