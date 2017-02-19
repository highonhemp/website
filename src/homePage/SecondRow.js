import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import "../style/IndexHome.css"

class SecondRow extends Component {
  render() {
    return (
      <Row>
        <Col md={4} >
          <div>
            <h1>
              Why Hemp?
            </h1>
            <p>
              Heres some wisdom
            </p>
          </div>
        </Col>
        <Col md={4} >
          <div>
          <h1>
            Green Giveaways
          </h1>
          <p>
            Highly unlikely you will find anything else like this
          </p>
          </div>
        </Col>
        <Col md={4} >
          <div>
          <h1>
            Blog
          </h1>
          <p>
            Stay up to date with everything Hemp
          </p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default SecondRow;
