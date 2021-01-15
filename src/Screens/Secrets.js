import React, {useState} from 'react';
import Secret from "../Components/Secret";
// import {useSelector} from 'react-redux';
import { connect } from 'react-redux'


const Secrets = (props) => {
  // const secrets = props.secrets.map((secret, index) => {
  //   return <li key={index}>{secret.name}</li>;
  // });

// const secrets = useSelector(state => state.secrets) //finding secrets from store and setting it here in variable "secrets"

  return (
    <div>
      <ul>
      {props.secrets.map((thesecret, index) => (
        <Secret index={index} item={thesecret} key={index}/>
      )
      )}
      </ul>
    </div>
  );

};
const mapStateToProps = ({ secrets }) => ({ secrets });

export default connect(mapStateToProps)(Secrets)