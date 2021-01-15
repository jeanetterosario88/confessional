import { BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./Components/Header"
import Secrets from "./Screens/Secrets"
import SecretInput from "./Screens/SecretInput"
import SecretDetail from "./Screens/SecretDetail"

function App() {
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

export default App;


