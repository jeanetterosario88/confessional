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
    this.state = {
      sorted: false
    }

  }

  componentDidMount(){
      this.props.getSecrets()
  }

  handleSort() {
    if (!this.state.sorted) {
    this.setState({
      sorted: true
    })}
    else {
    this.setState({
      sorted: false
    })}
  }

  render(){
  if(this.props.loading) return  (<h3>Loading...</h3>) 


  let secretList = [...this.props.secrets].sort((a,b) => {
    if (a.likes > b.likes) {
        return -1
    } else {
        return 1
    }
  })

  if (!this.state.sorted){
    secretList = this.props.secrets
  } 

  return (
    <div>
        <ul>
        {secretList.map((thesecret) => (
        <Secret key={thesecret.id} item={thesecret}/>
        )
        )}
        <button onClick={(event) => this.handleSort(event)}> Sort </button>
      </ul>
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