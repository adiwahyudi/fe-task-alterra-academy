import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import ToDoPage from './Pages/ToDo/ToDoPage';
import Navbar from './Pages/ToDo/components/SideNav/SideNav';
import AboutApp from './Pages/ToDo/components/About/AboutApp';
import AboutAuthor from './Pages/ToDo/components/About/AboutAuthor';
import NotFound404 from './Pages/ToDo/components/NotFound404';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Navbar/>
            <ToDoPage/>
          </Route>
          <Route path="/about/about-app">
            <Navbar/>
            <AboutApp/>
          </Route>
          <Route path="/about/about-author">
            <Navbar/>
            <AboutAuthor/>
          </Route>
          <Route path="*">
            <NotFound404/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );  
}

export default App;
