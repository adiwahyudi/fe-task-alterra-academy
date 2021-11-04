import { Component } from 'react'
import style from './Components.module.css'

class InputToDo extends Component {
    state = {
        title: "",
        completed: false,
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const isEmpty = this.state.title === "";
        if (!isEmpty) {
          const newData = {
            title: this.state.title,
            completed: this.state.completed,
          };
          this.props.addToDo(newData);
          this.setState({
            title: "",
            completed: false,
          });
        } else {
          alert("Title tidak boleh kosong");
        }
      }

      render() {
          return (
              <div className={style.inputContainer}>
                  <input type="text" placeholder="Add todo.." name="title" className={style.input} value={this.state.title} onChange={this.onChange}/>
                  <button onClick={this.handleSubmit} className={style.handleSubmit}>Submit</button>
              </div>
          )
      }
}

export default InputToDo    