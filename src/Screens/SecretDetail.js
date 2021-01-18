import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../Components/Comment'
import { getSecret } from "../actions/secrets"
import Likes from '../Components/Likes';

 //using match to get params from url
 //filter secrets array to get that Id, display content

 //get request to get item
 //can put in localstate variable
class SecretDetail extends Component {

    componentDidMount(){
        let paramID = this.props.match.params.id;
        //get the secret from the server:
        this.props.getSecret(paramID);

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
            return (<h3>Loading...</h3>)
         }
            return(
                <div>
                   <h2>{this.props.secret.title}</h2>
                   <h3>{this.props.secret.content}</h3><br></br>
                   <Likes secret={this.props.secret}/>
                   <h4>Comments:</h4>
                   <Comment commentContent={this.props.secret.comments}/>

                </div>
            )
        }      
}

//after p, inside div, add a comment input form
//then show commentz
const mapStateToProps = ({ secrets, secret }) => ({ secrets, secret })
const mapDispatchToProps = (dispatch, id) => ({
  getSecret: (id) => dispatch(getSecret(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(SecretDetail)