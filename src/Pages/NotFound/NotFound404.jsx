import React from 'react'
import style from '../ToDo/Components.module.css'
import {useHistory} from 'react-router-dom'

export default function NotFound404() {
    const history = useHistory();
    
    function toHome() {
        history.push('/');
    }
    return (
        <div className={style['not-found']}>
            <h1 className={style.title404}>404</h1>
            <p className={style.message404}>Something went wrong!</p>
            <button className={style['btn-back']} onClick={toHome}>RETURN TO HOME</button>
        </div>
    )
}
