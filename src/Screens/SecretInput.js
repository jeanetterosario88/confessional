import React, { Component } from 'react';
import { connect } from 'react-redux'

class SecretInput extends Component {

  state = {
    title: '', 
    content: '',
    id: 1
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value, //for multiple inputs: event.target.name gets name attribute from field that you're typing in, and the right side gets the value you typed in
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    let newid = this.state.id + 1
    this.props.addSecret(this.state); //we're making addSecret function a prop, using MapDispatchToProps, passing this.state gets sent to reducer 
    this.setState({
      title: '',
      content: '',
      id: newid
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(event) => this.handleOnChange(event)} />
          <input 
            type="text"
            name="content"
            value={this.state.content}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({ addSecret: secret => dispatch({ type: "ADD_SECRET", secret}) })

export default connect(null, mapDispatchToProps)(SecretInput)