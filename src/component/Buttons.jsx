import React from 'react';
import { useDispatch } from 'react-redux';
import { decreas, increas } from '../redux/Actions';

import style from "../styles/buttons.css"


const Button = () => {

    
    const dispatch = useDispatch()


    return (
        <>
            <div className={style.buttoncontent}>
                <button className={style.firstbutton} onClick={() => dispatch(decreas())}>-</button>
                <button className={style.secondbutton} onClick={() => dispatch(increas({ id: 52 }))} >+</button>
            </div>
        </>
    );
}

export default Button;