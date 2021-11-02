import './App.css';
import { todoMock } from './mockData'; 
import ToDoPage from './Pages/ToDo/ToDoPage';

function App() {
  return (
    <div className="App">
      <ToDoPage data={todoMock}/>
    </div>
  );
}

export default App;
