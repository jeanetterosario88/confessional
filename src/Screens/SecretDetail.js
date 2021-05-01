import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comments from '../Components/Comments'
import { getSecret } from "../actions/secrets"
import Likes from '../Components/Likes';
import { Badge } from 'react-bootstrap'


 //using match to get params from url
 //filter secrets array to get that Id, display content
 //get request to get item
 //can put in localstate variable
 
class SecretDetail extends Component {

    componentDidMount(){
        let paramID = this.props.match.params.id;
 
        this.props.getSecret(paramID); //get the secret from the server:

        // let secret = this.props.secrets.filter( elem => elem.id === paramID)
        // console.log("hardcoded",this.props.secrets[15]);
        // console.log("secrets",this.props.secrets.filter(el => el.id === 15));
        // this.setState({
        //     secret: secret
        // })
    }

    render() {
        
        console.log('In Secret detail', this.props)
        if (!this.props.secret.id){
            return( 
                <div className = "loading">
                <h3>Loading... </h3>
                </div>
            )
         }
            return(
                <div className = "detail">
                   <h2>{this.props.secret.title}</h2>
                   <h3>{this.props.secret.content} <Badge variant="secondary"> <Likes secret={this.props.secret}/></Badge> </h3>
                   <hr></hr>
                   <Comments commentContent={this.props.secret.comments} theSecret={this.props.secret}/>
                </div>
            )
        }      
}

const mapStateToProps = ({ secrets, secret }) => ({ secrets, secret })
const mapDispatchToProps = (dispatch, id) => ({
  getSecret: (id) => dispatch(getSecret(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(SecretDetail)