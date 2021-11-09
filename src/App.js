import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import ToDoPage from './Pages/ToDo/ToDoPage';
import Navbar from './Pages/SideNav/SideNav';
import AboutApp from './Pages/About/AboutApp';
import AboutAuthor from './Pages/About/AboutAuthor';
import NotFound404 from './Pages/NotFound/NotFound404';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './store/store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
         </PersistGate>
        </Provider>
    </div>
  );  
}

export default App;
