import React, { Component } from 'react';

class SecretInput extends Component {

  state = {
    title: '', 
    content: ''
  }

  handleOnChange(event) {
    this.setState({
      title: event.target.value,
      content: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addSecret(this.state);
    this.setState({
      title: '',
      conent: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.title}
            type="text"
            value={this.state.content}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default SecretInput;