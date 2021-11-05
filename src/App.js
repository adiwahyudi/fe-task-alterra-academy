import './App.css';
import Home from './components/Home';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/profile/:name" component={Profile}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;