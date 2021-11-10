import ToDo from "./ToDo"
import { useSelector, useDispatch } from "react-redux"
import { toggleToDoStatus, deleteToDo }  from '../../store/toDoSlice'
import style from './Components.module.css'

const ListToDo = (props) => {

    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()

    return (
        <div className={style.container}>   
            <table className={style.table}>
                <tbody>
                     {todos.map((content) => (
                        <ToDo
                            key={content.id}
                            item={content}
                            deleteToDo={() => { 
                                dispatch(deleteToDo(content.id))
                            }}
                            toggleToDoStatus={() => {
                                dispatch(toggleToDoStatus(content.id))
                            }}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListToDo