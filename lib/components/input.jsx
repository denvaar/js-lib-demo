import React, { Component } from 'react';


export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  render() {
    const { value } = this.props;

    return (
      <input
        defaultValue={value}
        onChange={(e) => this.setState({ value: e.target.value })} />
    );
  }
};
