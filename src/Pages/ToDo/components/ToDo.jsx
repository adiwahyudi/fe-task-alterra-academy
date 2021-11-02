import style from './Components.module.css' 

export default function ToDo({ isi }) {
    return (
    <div className={style.content}>
        <p style={isi.completed ? { textDecoration: "line-through" } : null}>
            {isi.title}
        </p>
      </div>
    )
}
