import React, {useState, useRef} from 'react'
import style from './FormBuku.module.css'

export default function FormPage() {
    const dataKosong = {
        judul: "",
        pengarang: "",
        cetakan: "",
        tahunTerbit: "",
        kotaTerbit: "",
        harga: 0,
    }
    const [data,setData] = useState(dataKosong)
    const regex = /^[A-Za-z ]*$/
    const [errMsg, setErrMsg] = useState("")

    const fotoSampul = useRef(null)

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "pengarang"){
            if (regex.test(value)){
                setErrMsg("")
            } else {
                setErrMsg("Nama pengarang harus berupa huruf")
            }
        }
        setData({
            ...data,
            [name]: value
        })
        // console.log("data",data);
    }

    const handleSubmit = (event) => {
        if (errMsg !== ""){
            alert("Terdapat data kosong")
        } else {
            alert(`Data buku "${data.judul}" berhasil diterima`)
        }
        resetData()
        event.preventDefault()
    }

    const resetData = () => {
        setData(dataKosong)
        setErrMsg("")
    }
    return (
        <div>
            <h1 style={{"text-align":"center"}}> Formulir Buku Baru</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Judul:
                    <input 
                        type="text"
                        name="judul"
                        onChange={handleInput}
                        required
                        value={data.judul}
                        className={style.input}
                    />
                </label>
                <label>
                    Pengarang:  
                    <input 
                        type="text"
                        name="pengarang"
                        onChange={handleInput}
                        required
                        value={data.pengarang}
                        className={style.input}
                    />
                </label>
                <label>
                    Cetakan:
                    <input 
                        type="text"
                        name="cetakan"
                        onChange={handleInput}
                        value={data.cetakan}
                        className={style.input}
                    />
                </label>
                <label>
                    Tahun Terbit:
                    <input 
                        type="number"
                        name="tahunTerbit"
                        onChange={handleInput}
                        value={data.tahunTerbit}
                        className={style.input}
                    />
                </label>
                <label>
                    Kota Terbit:
                    <input 
                        type="text"
                        name="kotaTerbit"
                        onChange={handleInput}
                        value={data.kotaTerbit}
                        className={style.input}
                    />
                </label>
                <label>
                    Harga:
                    <input 
                        type="number"
                        name="harga"
                        onChange={handleInput}
                        value={data.harga}
                        className={style.input}
                    />
                </label>
                <label>
                    Foto Samput:
                    <input 
                        type="file"
                        refs={fotoSampul}
                        className={style.input}
                    />
                </label>
                <span className={style.errorMessage}>{errMsg}</span>
                <input className={style.btn} type="submit" value="submit" />
                <button className={style.btn} onClick={resetData} >Reset</button>
            </form>
        </div>
    )
}   
