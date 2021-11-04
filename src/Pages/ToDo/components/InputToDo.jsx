import style from './Components.module.css'
import { useState } from "react"

function InputToDo (props){
    const [data, setData] = useState({
        title: "",
        completed: false,
    });

    const onChange = (e) => {
        setData({...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmpty = data.title
        if (isEmpty) {
          const newData = {
            title: data.title,
            completed: data.completed,
          };
          props.addToDo(newData);
          setData({
            title: "",
            completed: false,
          });
        } else {
          alert("Title tidak boleh kosong");
        }
      }

      return (
          <div className={style.inputContainer}>
              <input type="text" placeholder="Add todo.." name="title" className={style.input} value={data.title} onChange={onChange}/>
              <button onClick={handleSubmit} className={style.handleSubmit}>Submit</button>
          </div>
      )
}

export default InputToDo    