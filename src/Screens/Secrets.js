import React, { Component } from 'react';
import Secret from "../Components/Secret";
import { connect } from 'react-redux';
import { getSecrets } from '../actions/secrets';


class Secrets extends Component {
  constructor(props) {
    super()
  }

  componentDidMount(){
      this.props.getSecrets()
  }

render(){
  console.log(this.props)
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

export default connect(mapStateToProps, mapDispatchToProps)(Secrets)