import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from "../actions/secrets";
import { Button } from 'react-bootstrap'

class CommentInput extends Component {
  constructor(props) {
    super()
    this.state = {
        content: '',
        errors: ''
      }

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnComment = this.handleOnComment.bind(this);
    }

    
    handleOnComment(event){
         this.setState({
         [event.target.name]: event.target.value
         })
    }

    handleOnSubmit(event) {
        event.preventDefault();
        //form validation
       if (100 < this.state.content.length || this.state.content.length < 5) {
          this.setState({
            errors: "Comment must be between 5 and 100 characters!"
          })      
        }
        else { 
          let newComment = {
              content: this.state.content,
              secret_id: this.props.theSecret.id
          };
          this.props.onAddComment(newComment);
          this.setState({
            content: '',
            errors: '',
          })
        }
    }

    render() {
        return (
          <div>
            {this.state.errors.length > 0 && <div className="errorContainer">{this.state.errors}</div> }
           
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
              <input
                type="text"
                name="content"
                value={this.state.content}
                onChange={(event) => this.handleOnComment(event)} />
                <p> </p>
              <Button type="submit" variant="dark">Submit</Button>
            </form>
          </div>
        );
      }
    };



    const mapDispatchToProps = (dispatch) => {
    return {
    onAddComment: (newComment) => dispatch(addComment(newComment))
    }
    }

    export default connect(null, mapDispatchToProps)(CommentInput)
