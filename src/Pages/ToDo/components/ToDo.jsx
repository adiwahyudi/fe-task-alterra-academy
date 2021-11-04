import style from './Components.module.css' 

export default function ToDo({ item, deleteToDo, checkToDo, uncheckToDo }) {
    return (
        <tr className={style.row}>
            <td>
                <input
                style={{ cursor: "pointer" }}
                defaultChecked={item.completed ? true : false}
                type="checkbox"
                onClick={
                    item.completed
                    ? () => uncheckToDo(item.id)
                    : () => checkToDo(item.id)
                }
                />
            </td>
            <td
                style={{ width: "300px" }}
                className={item.completed ? style.completed : ""}
            >
                {item.title}
            </td>
            <td className={style.content}>
                <button
                className={style.buttonDelete}
                onClick={() => deleteToDo(item.id)}
                >
                Delete
                </button>
            </td>
        </tr>
    )
}
