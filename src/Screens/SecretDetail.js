import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../Components/Comment'
 //using match to get params from url
 //filter secrets array to get that Id, display content

 //get request to get item
 //can put in localstate variable
class SecretDetail extends Component {
    constructor(props) {
      super()
    }
    // const [localsecret, setLocalsecret] = useState({})
    // useEffect(()=>{
        // console.log(props.match.params.id)
        // let index = Number(props.match.params.id)
        // alert(props.secrets[index])
        // setLocalsecret(props.secrets[index])
    render() {
        let id = this.props.match.params.id;
        let secret = this.props.secrets.filter(elem => elem.id = id)[0]

        return (
        <div>
           <h1>{secret.attributes.title}</h1>
           <p>{secret.attributes.content}</p>
           <Comment commentContent={secret.relationships.comments.data}/>
        </div>
    )
}
}
//after p, inside div, add a comment input form
//then show commentz
const mapStateToProps = ({ secrets }) => ({ secrets })

export default connect(mapStateToProps)(SecretDetail)