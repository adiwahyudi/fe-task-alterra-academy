import style from './Components.module.css'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addToDo } from '../../store/toDoSlice'

function InputToDo(){
    const dispatch = useDispatch()

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
          dispatch(addToDo(newData))
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
              <input 
                type="text" 
                placeholder="Add todo.." 
                name="title" 
                className={style.input} 
                value={data.title} 
                onChange={onChange}
              />
              <button 
                className={style.handleSubmit} 
                onClick={handleSubmit}>
                Submit
              </button>
          </div>
      )
}

export default InputToDo    