import Header from './components/Header'
import ToDo from './components/ToDo'

export default function ToDoPage({ data }) {
    return (
        <div>
            <Header />
            {data.map((isi) => (
                <ToDo key={isi.id.toString()} isi={isi}/>
            ))}  
        </div>
    )
}
