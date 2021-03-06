


import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addLike} from '../actions/secrets'

class Likes extends Component {
    constructor(props){
        super()
        this.state = {
            show: true
        }
        this.handleLike = this.handleLike.bind(this)
    }

    handleLike(){
        let secret = this.props.secret
        this.props.onAddLike(secret)
        this.setState({show: false})
    }

    render(){
        let secret = this.props.secret
        if (!secret.likes) {
            return (
                    <div>
                        <i className="fas fa-heartbeat"
                        onClick={() => this.handleLike(secret)}
                        ></i>
                        {secret.likes}
                </div>
            )}
       else if (this.state.show) { 
           return (
            <div>
                <i 
                    className="fas fa-heartbeat" 
                    onClick={() => this.handleLike(secret)}></i>
                    {secret.likes}
            </div>
           )}
        else return  (
            <div>
                <p> {secret.likes} </p>
            </div>
                
        )}

}



const mapDispatchToProps = (dispatch) => {
    return {
      onAddLike: (secret) => dispatch(addLike(secret))
    }
  }

export default connect(null, mapDispatchToProps)(Likes)
