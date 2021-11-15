import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './NotFound.module.css'

function NotFound() {
    const navigate = useNavigate();
    
    return (
        <div className={style['not-found']}>
            <h1 className={style.title404}>404</h1>
            <p className={style.message404}>Something went wrong!</p>
            <button onClick={() => navigate('/')} className={style['btn-back']}>RETURN TO HOME</button>
        </div>
    )
}

export default NotFound
