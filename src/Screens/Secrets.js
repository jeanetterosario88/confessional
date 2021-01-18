import React, { Component } from 'react';
import Secret from "../Components/Secret";
import { connect } from 'react-redux';
import { getSecrets } from '../actions/secrets';


class Secrets extends Component {
  //might be able to take out constructor and super, j
  //ust check that you still have access to props
  constructor(props) {
    super()
  }

  componentDidMount(){
      this.props.getSecrets()
  }

render(){
  console.log('Secrets Main', this.props)
  return (
    <div>
      {/* {this.props.secrets.length ? 'Yup' : 'no'} */}
       {this.props.loading ? <h3>Loading...</h3> : (
      
        <ul>
        {this.props.secrets.map((thesecret) => (
        <Secret item={thesecret} key={thesecret.id}/>
        )
        )}
      </ul>
       ) }
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