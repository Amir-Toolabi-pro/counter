import React from 'react';
import { useSelector } from 'react-redux';

import "../styles/count.css"


const Count = () => {

    const number = useSelector(state=>state)

    return ( 
        <>
            <p className="countercontent">Number is <span className={number > 0 ? "uper" : "lower"}> {number}</span></p>
        </>
     );
}
 
export default Count;