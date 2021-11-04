import style from './Components.module.css'
import ToDo from "./ToDo"
const ListToDo = (props) => {
    const { data, deleteToDo, toggleToDoStatus } = props;

    return (
        <div className={style.container}>
        <table className={style.table}>
            <tbody>
            {data.map((content) => (
                <ToDo
                key={content.id}
                item={content}
                deleteToDo={deleteToDo}
                toggleToDoStatus={toggleToDoStatus}
                />
            ))}
            </tbody>
        </table>
        </div>
    )
}

export default ListToDo