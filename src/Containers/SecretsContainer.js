import React, { Component } from 'react'
import SecretInput from '../components/SecretInput';
import Secrets from '../components/Secrets';
import { connect } from 'react-redux'

class SecretsContainer extends Component {
  render() {
    return (
      <div>
        <SecretInput addSecret={this.props.addSecret}/>
        <Secrets secrets={this.props.secrets}/>
      </div>
    )
  }
}

const mapStateToProps = ({ secrets }) => ({ secrets })

const mapDispatchToProps = dispatch => ({ addSecret: secret => dispatch({ type: "ADD_SECRET", secret }) })

export default connect(mapStateToProps, mapDispatchToProps)(SecretsContainer)