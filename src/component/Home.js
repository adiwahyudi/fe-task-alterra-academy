import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { gql, useLazyQuery, useQuery } from '@apollo/client'
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

const getAnggotaById = gql`
    query MyQuery($_eq: Int = 1) {
        anggota(where: {id: {_eq: $_eq}}) {
        nama
        umur
        jenis_kelamin
        id
        }
    }
`
function Home() {   
    const {data,loading,error} = useQuery(getAllAnggota)
    // const [getAnggotaId, {data,loading,error}] = useLazyQuery(getAnggotaById)
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
    // const getData = () => {
    //     getAnggota()
    //     setPassenger(data?.passenger)
    // }

    return (
        <div>
            <div>
                <Header />
                {/* <button onClick={getData}>Get Data Here</button> */}
                <ListPassenger data={data} hapusPengunjung={hapusPengunjung} />
                <PassengerInput tambahPengunjung={tambahPengunjung} />
            </div>
        </div>
    );
}

export default Home;