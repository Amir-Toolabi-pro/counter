import React from 'react';
import { useDispatch } from 'react-redux';
import { decreas, increas } from '../redux/Actions';

import "../styles/buttons.css"


const Button = () => {

    
    const dispatch = useDispatch()


    return (
        <>
            <div className="buttoncontent">
                <button className="firstbutton" onClick={() => dispatch(decreas())}>-</button>
                <button className="secondbutton" onClick={() => dispatch(increas({ id: 52 }))} >+</button>
            </div>
        </>
    );
}

export default Button;