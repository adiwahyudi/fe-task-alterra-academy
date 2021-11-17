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
    query MyQuery($_eq: Int!) {
        anggota(where: {id: {_eq: $_eq}}) {
        id
        nama
        umur
        jenis_kelamin
        }
    }
`
function Home() {   

    // const {data,loading,error} = useQuery(getAllAnggota)
    const [getAnggotaId, {data,loading,error}] = useLazyQuery(getAnggotaById)
    const [userId,setUserId] = useState('')
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

    const getDataById = () => {
        getAnggotaId({variables:{
            _eq: userId
        }})
        setPassenger(data?.passenger)
    }

    const onChangeId = (e) => {
        if (e.target) {
            setUserId(e.target.value)
        }
    }

    return (
        <div>
            <div>
                <Header />
                <input value={userId} onChange={onChangeId} placeholder="input id here.."/>
                <tr></tr>
                <button onClick={getDataById}>Get Data By ID Here</button>
                <ListPassenger data={data} hapusPengunjung={hapusPengunjung} />
                <PassengerInput tambahPengunjung={tambahPengunjung} />
            </div>
        </div>
    );
}

export default Home;