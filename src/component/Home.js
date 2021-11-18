import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client'
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

const deleteAnggotaGQL = gql`
    mutation MyMutation($_eq: Int!) {
        delete_anggota(where: {id: {_eq: $_eq}}) {
        affected_rows
        }
    }
`
const addAnggotaGQL = gql`
    mutation InsertPassenger($nama: String!, $umur: Int!, $jenis_kelamin: String!) {
        insert_anggota( objects: { nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin } ) {
            affected_rows
        }
    }
`
const updateAnggotaGQL = gql`
    mutation MyMutation(
        $nama: String
        $umur: Int
        $jenis_kelamin: String
        $id: Int!
    ) {
        update_pengunjung_by_pk(
        pk_columns: { id: $id }
        _set: { nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin }
        ) {
        id
        }
    }
`
function Home() {   

    const {data,loading,error} = useQuery(getAllAnggota)
    const [insertAnggota,{loading:loadingInsert}] = useMutation(addAnggotaGQL,{
        refetchQueries:[getAllAnggota]
    })
    const [deleteAnggota,{loading:loadingDelete}] = useMutation(deleteAnggotaGQL,{
        refetchQueries:[getAllAnggota]
    })

    // const [getAnggotaId, {data,loading,error}] = useLazyQuery(getAnggotaById)
    // const [passenger, setPassenger] = useState([]);
    
    const [userId,setUserId] = useState('')

    if (loading || loadingInsert || loadingDelete) {  
        return(<LoadingSvg/>)
    }

    if (error) {
        console.log(error);
        return null
    }
    const hapusPengunjung = (idx) => {
        deleteAnggota({
            variables:{
                _eq:idx
            }
        })
    };

    const tambahPengunjung = (newUser) => {
        
        
        insertAnggota({
            variables:{
                nama: newUser.nama,
                umur: newUser.umur,
                jenis_kelamin: newUser.jenisKelamin
            }
        })
    }   

    const editPengunjung = (newUser) => {
        insertAnggota({
            variables:{
                nama: newUser.nama,
                umur: newUser.umur,
                jenis_kelamin: newUser.jenisKelamin
            }
        })
    }   
    return (
        <div>
            <div>
                <Header />
                {/* <input value={userId} onChange={onChangeId} placeholder="input id here.."/> */}
                {/* <tr></tr> */}
                {/* <button onClick={getDataById}>Get Data By ID Here</button> */}
                <ListPassenger data={data} hapusPengunjung={hapusPengunjung} editPengunjung={editPengunjung} />
                <PassengerInput tambahPengunjung={tambahPengunjung} />
            </div>
        </div>
    );
}

export default Home;