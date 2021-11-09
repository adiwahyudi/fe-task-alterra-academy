import React, { useRef, useState } from 'react'
import style from './FormBuku.module.css'

export default function FormPage() {

  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  }

  const baseError = {
    nama: "",
    email: "",
    noHandphone: "",
  }

  const [data, setData] = useState(baseData)
  const [errorMessage, setErrorMessage] = useState(baseError)
  
  const regexNama = /^[A-Za-z ]*$/
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  const regexNoHP = /^(\d{9,14})$/

  const suratKesungguhan = useRef('')


  const handleInput = e => {
    const name = e.target.name
    const value = e.target.value

    if (name === "nama") {
      if (regexNama.test(value)) {
        setErrorMessage({nama: ""})
      } else {
        setErrorMessage({nama: "Nama Lengkap Harus Berupa Huruf"})
      }
    }
    
    if (name === "email") {
      if (regexEmail.test(value)) {
        setErrorMessage({email: ""})
      } else {
        setErrorMessage({email: "Email Tidak Sesuai"})
      }
    }

    if (name === "noHandphone") {
      if (regexNoHP.test(value)) {
        setErrorMessage({noHandphone: ""})
      } else {
        setErrorMessage({noHandphone: "No Handphone Tidak Sesuai"})
      }
    }
    
    console.log(errorMessage);

    

    setData({
      ...data,
      [name]: value
    })

  }

  const handleSubmit = (event) => {
    if (errorMessage !== "") {
      alert("Data Pendaftar Tidak Sesuai")
    } else {
      alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`)
      resetData()
    }
    event.preventDefault()
  }

  const resetData = () => {
    setData(baseData)
    setErrorMessage("")
  }

  return (
    <div>
      <h1 style={{ "text-align": "center" }}>Pendaftaran Peserta Coding Bootcamp</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nama Lengkap:
          <input 
          type="text" 
          name="nama" 
          className={style.input} 
          value={data.nama} 
          onChange={handleInput} 
          required />
        </label>

        <label>
          Email:
          <input 
          type="text" 
          name="email" 
          className={style.input} 
          value={data.email} 
          onChange={handleInput} 
          required />
        </label>

        <label>
          No Handphone:
          <input 
          type="text" 
          name="noHandphone" 
          className={style.input} 
          value={data.noHandphone} 
          onChange={handleInput} 
          required />
        </label>
        
        <label style={{ "margin": "unset" }}>
          Latar Belakang Pendidikan:
          <div>
            <input 
            type="radio" 
            name="pendidikan" 
            value="IT" 
            onChange={handleInput} 
            checked={data.pendidikan === "IT" ? true : false} 
            required />

            <label>IT</label>

            <input 
            type="radio" 
            name="pendidikan" 
            value="Non IT"
            onChange={handleInput} 
            checked={data.pendidikan === "Non IT" ? true : false} 
            required />

            <label>Non IT</label>
          </div>
        </label>

        <label>
          Kelas Coding yang Dipilih:
          <select 
          type="text" 
          name="kelas" 
          className={style.input} 
          value={data.kelas} 
          onChange={handleInput} 
          required>
            <option value="" selected disabled hidden>Pilih Salah Satu Program</option>
            <option>Coding BackEnd with Golang</option>
            <option>Coding FrontEnd with ReactJS</option>
            <option>Fullstack Developer</option>
          </select>
        </label>

        <label>
          Foto Surat Kesungguhan:
          <input 
          type="file" 
          className={style.input} 
          refs={suratKesungguhan} />
        </label>

        <label>
          Harapan Untuk Coding Bootcamp ini:
          <textarea 
          name="harapan" 
          id="" 
          cols="30" 
          rows="5" 
          className={style.input} 
          value={data.harapan} 
          onChange={handleInput}></textarea>
        </label>

        {/* <p className={style.errorMessage}>{errorMessage.nama}</p>
        <p className={style.errorMessage}>{errorMessage.email}</p>
        <p className={style.errorMessage}>{errorMessage.noHandphone}</p> */}

        <ul>
            <li style={errorMessage.nama ? {color: 'red' } : { display : 'none'} }>{errorMessage.nama}</li>
            <li style={errorMessage.email ? {color: 'red' } : { display : 'none'} }>{errorMessage.email}</li>
            <li style={errorMessage.noHandphone ? {color: 'red' } : { display : 'none'} }>{errorMessage.noHandphone}</li>
        </ul>
        <div>
          <input type="submit" className={style.btn} value="Submit" />
          <button className={`${style.btn} ${style.btnReset}`} onClick={resetData}>Reset</button>
        </div>

      </form>
    </div>
  )
}