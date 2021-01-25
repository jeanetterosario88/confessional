import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSecret } from "../actions/secrets";
import { Button } from 'react-bootstrap'

class SecretInput extends Component {
  constructor(props) {
    super()
    this.state = {
      title: '', 
      content: '',
      errors: [],
      // newSecret: {},
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }


  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value, //for multiple inputs: event.target.name gets name attribute from field that you're typing in, and the right side gets the value you typed in
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    //form validation
    if (this.state.title.length < 6 || this.state.title.length > 40) {
      this.setState({
        errors: [...this.state.errors, "Title must be between 6 and 40 characters!"]
      })
    } 
    else if (400 < this.state.content.length || this.state.content.length < 12) {
      this.setState({
        errors: [...this.state.errors, "Content must be between 12 and 400 characters!"]
      })      
    }
    else { 
      // (this.state.errors.length === 0) 
      let secret = this.state;
      this.props.onAddSecret(secret); // we're making addSecret function a prop, using MapDispatchToProps, passing this.state gets sent to reducer 
      this.setState({
        title: '',
        content: '',
        errors: [],
      })
      // if pushing to secret*: put in evaluation of the server response to see if there are new errors// pass in the id of the payload that is returned from the successful server call
      this.handleSuccessfulPost()

    }
  }
  handleSuccessfulPost(){
    this.props.history.push(`/`)
  }


  
  render() {
    const errors = this.state.errors.map((error, i) => <h3 key={i}>{error}</h3>);
    return (
      <div className = "form">
        <h2>Add A Secret:</h2>
        {this.state.errors.length > 0 && <div className="errorContainer">{errors}</div> }
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>Title:</p>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(event) => this.handleOnChange(event)} />
          <p>Content:</p>
          <input 
            type="text"
            name="content"
            value={this.state.content}
            onChange={(event) => this.handleOnChange(event)} />
          <Button type="submit" variant="dark">Submit</Button>
        </form>
      </div>
    );
  }
};
const mapStateToProps = state => ({
  secrets: state.secrets,
  secret: state.secret
})

const mapDispatchToProps = (dispatch, secret) => {
  return {
    onAddSecret: (secret) => dispatch(addSecret(secret))
  }
}

// dispatch => ({ addSecret: secret => dispatch({ type: "ADD_SECRET", secret}) })

//export default connect(null, { addSecret })(SecretInput)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecretInput)