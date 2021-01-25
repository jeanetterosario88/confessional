import React, { Component } from 'react';
import Secret from "../Components/Secret";
import { connect } from 'react-redux';
import { getSecrets } from '../actions/secrets';
import {Button} from 'react-bootstrap'


class Secrets extends Component {
  //might be able to take out constructor and super, j
  //just check that you still have access to props
  constructor(props) {
    super()
  }

  componentDidMount(){
      this.props.getSecrets()
  }

render(){
  if(this.props.loading) return  (<h3>Loading...</h3>) 

  
  const sortedSecretList = this.props.secrets.sort((a,b) => {
    if (a.likes > b.likes) {
        return -1
    } else {
        return 1
    }
  })

  return (
    <div>
        <ul>
        {sortedSecretList.map((thesecret) => (
        <Secret key={thesecret.id} item={thesecret}/>
        )
        )}
      </ul>
      <Button variant="success">Testing </Button>
    </div>
  );
  }
};



const mapStateToProps = ({ secrets, loading }) => ({ secrets, loading });
const mapDispatchToProps = dispatch => ({
  getSecrets: () => dispatch(getSecrets())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Secrets)