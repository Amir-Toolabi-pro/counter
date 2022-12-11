import React from 'react';
import { useSelector } from 'react-redux';

import style from "../styles/count.css"


const Count = () => {

    const number = useSelector(state=>state)

    return ( 
        <>
            <p className={style.countercontent}>Number is <span className={number > 0 ? style.uper : style.lower}> {number}</span></p>
        </>
     );
}
 
export default Count;