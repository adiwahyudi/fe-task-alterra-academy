import Header from './components/Header'
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import InputToDo from './components/InputToDo';
import ListToDo from './components/ListToDo';

const initData = [
  {
      id: 1,
      title: "Mengerjakan Exercise",
      completed: true,
    },
    {
      id: 2,
      title: "Mengerjakan Assignment",
      completed: false,
  },
]

function ToDoPage() {
  const [data, setData] = useState(initData)  

  const deleteToDo = (id) => {
      setData((toDo) => toDo.filter((item) => item.id !== id))
  }

  const addToDo = (newUser) => {
      const newOrang = { id: uuidv4(), ...newUser }
      setData((toDo) => [...toDo, newOrang])
  }

  // const checkToDo = (id) => {
  //     const toDo = this.state.data.map((toDo) => {
  //       if (toDo.id === id) {
  //         toDo.completed = true;
  //       }
  //       return toDo;
  //     });
  //     this.setState({ data: toDo });
  // }
    
  // const uncheckToDo = (id) => {
  //       const toDo = this.state.data.map((toDo) => {
  //         if (toDo.id === id) {
  //           toDo.completed = false;
  //         }
  //         return toDo;
  //       });
  //       this.setState({ data: toDo });
  // }

  const toggleToDoStatus = (id) => {
    setData((toDo) => toDo.map((item)=> item.id === id ? { ...item, completed: !item.completed} : item))
  }
  return (
      <div>
          <Header/>
          <InputToDo addToDo={addToDo}/>
          <ListToDo data={data} deleteToDo={deleteToDo} toggleToDoStatus={toggleToDoStatus} />
      </div>
  )
}

export default ToDoPage