import React, {useState, Component} from 'react';
import Secret from "../Components/Secret";
// import {useSelector} from 'react-redux';
import { connect } from 'react-redux'


class Secrets extends Component {
//ComponentDidMount
//dispatch action to get request
render(){
  return (
    <div>
       {this.props.loading ? <h3>Loading...</h3> : (
        <ul>
        {this.props.secrets.map((thesecret, index) => (
        <Secret index={index} item={thesecret} key={index}/>
        )
        )}
      </ul>
       ) }
    </div>
  );
  }
};

const mapStateToProps = ({ secrets, loading }) => ({ secrets, loading });

export default connect(mapStateToProps)(Secrets)