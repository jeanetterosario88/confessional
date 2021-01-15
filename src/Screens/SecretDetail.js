import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

 //using match to get params from url
 //filter secrets array to get that Id, display content

 //get request to get item
 //can put in localstate variable
const SecretDetail = (props) => {
    const [localsecret, setLocalsecret] = useState({})
    useEffect(()=>{
        // console.log(props.match.params.id)
        // let index = Number(props.match.params.id)
        // alert(props.secrets[index])
        // setLocalsecret(props.secrets[index])
    }, []
    )
    return (
        <div>
           <h1>{props.secrets[0].title}</h1>
           <p>{props.secrets[0].content}</p>
        </div>
    )
}

//after p, inside div, add a comment input form
//then show commentz
const mapStateToProps = ({ secrets }) => ({ secrets })

export default connect(mapStateToProps)(SecretDetail)