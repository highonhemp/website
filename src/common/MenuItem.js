import React, { Component } from 'react';

type Props = {
  name: String;
}
class MenuItem extends Component {
  props: Props;

  render() {
    return (
      <p>
        {this.props.name}
      </p>
    )
  }
}

export default MenuItem;
