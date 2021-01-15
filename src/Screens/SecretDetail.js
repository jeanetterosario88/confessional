import React from 'react'

 //using match to get params from url
 //filter secrets array to get that Id, display content
const SecretDetail = (props) => 

    return (
        <div>
           
        </div>
    )
}

const mapStateToProps = ({ secrets }) => ({ secrets })

export default connect(mapStateToProps)(SecretDetail)