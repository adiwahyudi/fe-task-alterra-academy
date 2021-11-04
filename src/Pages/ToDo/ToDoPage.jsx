import Header from './components/Header'
import { Component } from 'react'
import { v4 as uuidv4 } from "uuid";
import InputToDo from './components/InputToDo';
import ListToDo from './components/ListToDo';

class ToDoPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
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
        }
    }

    deleteToDo = (id) => {
        const newListToDo = this.state.data.filter((item) => item.id !== id);
        this.setState({ data: newListToDo });
    }

    addToDo = (newToDo) => {
        const content = { id: uuidv4(), ...newToDo };
        this.setState({ data: [...this.state.data, content] });
    }

    checkToDo = (id) => {
        const toDo = this.state.data.map((toDo) => {
          if (toDo.id === id) {
            toDo.completed = true;
          }
          return toDo;
        });
        this.setState({ data: toDo });
      };
    
      uncheckToDo = (id) => {
        const toDo = this.state.data.map((toDo) => {
          if (toDo.id === id) {
            toDo.completed = false;
          }
          return toDo;
        });
        this.setState({ data: toDo });
      };

    render(){
        return (
            <div>
                <Header/>
                <InputToDo addToDo={this.addToDo}/>
                <ListToDo data={this.state.data} deleteToDo={this.deleteToDo} checkToDo={this.checkToDo} uncheckToDo={this.uncheckToDo}/>
            </div>
        )
    }
}

export default ToDoPage