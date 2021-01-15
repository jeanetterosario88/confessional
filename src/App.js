import { BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./Components/Header"
import Secrets from "./Screens/Secrets"
import SecretInput from "./Screens/SecretInput"
import Secret from "./Screens/Secret"

function App() {
  return (
    <Router>
      <Header/>
    <div className="App">
      <Route path="/" component={Index} exact/>
      <Route path="/secret/:id" component={View} />
      <Route path="/new" component={New} />
    </div>
    </Router>
  );
}

export default App;


