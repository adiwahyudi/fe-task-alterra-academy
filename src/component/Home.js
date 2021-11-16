import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { gql, useLazyQuery } from '@apollo/client'
import LoadingSvg from "./LoadingSvg";

const getAllAnggota = gql`
    query MyQuery {
        anggota{
            id
            nama
            umur
            jenis_kelamin
        }
    }
  
`
function Home() {

    const [getAnggota, {data,loading,error}] = useLazyQuery(getAllAnggota)
    const [passenger, setPassenger] = useState([]);

    if (loading) {  
        return(<LoadingSvg/>)
    }

    if (error) {
        console.log(error);
        return null
    }
    const hapusPengunjung = (id) => {
        const newData = [...passenger].filter((item) => item.id !== id);
        setPassenger(newData);
    };

    const tambahPengunjung = (newUser) => {
        const newData = [newUser, ...passenger];
        setPassenger(newData);
    };
    const getData = () => {
        getAnggota()
        setPassenger(data?.passenger)
    }

    return (
        <div>
            <div>
                <Header />
                <button onClick={getData}>Get Data Here</button>
                <ListPassenger passenger={passenger} hapusPengunjung={hapusPengunjung} />
                <PassengerInput tambahPengunjung={tambahPengunjung} />
            </div>
        </div>
    );
}

export default Home;