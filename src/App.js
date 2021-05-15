import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route path="/search">
         <SearchPage/>       
        </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
