import { BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./Components/Header"
import Index from "./Screens/Index"
import New from "./Screens/New"
import View from "./Screens/View"

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


