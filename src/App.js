import { BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./Components/Header"
import Secrets from "./Screens/Secrets"
import SecretInput from "./Screens/SecretInput"
import SecretDetail from "./Screens/SecretDetail"
import { nativeTouchData } from "react-dom/test-utils"
//import {getSecrets} from './actions'
import { connect } from 'react-redux'
import React, { Component } from 'react'

//makes it class-based

// class App extends Component {
//   componentDidMount(){
  // this.props.getSecrets()
  // }
  //const thing = this.props.things.map((things, i) =>
  //return <li>key={i}> {thing.title}</li>
  //})
  // return(
  //   <div className = "App">
  //     <header className = "App-header">
  //       <h3>Confessional</h3>
  //       <ul>{this.props.loading ? <h3>Loading...</h3> :things }</ul>
  //     </header>
  //   </div>
  // )

class App extends Component {
  // componentDidMount(){}
  render(){
    return (
    <Router>
      <Header/>
    <div className="App">
      <Route path="/" component={Secrets} exact/>
      <Route path="/secret/:id" component={SecretDetail} />
      <Route path="/new" component={SecretInput} />
    </div>
    </Router>
  );
  } 
}

export default App;

//lets you pick and choose what you want from state

//const mapStateToProps = state => {
//  return{
//      ?things: state.reducers.reducers ?
//       loading: state.reducers.loading 
// }
//}
//export default connect(mapStateToProps, {getSecrets})(App);
