import './App.css';
import Home from './components/Home';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './store/store'
function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <PersistGate Loading={null} persistor={persistor}>
         <Home/>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;