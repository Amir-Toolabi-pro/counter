import Button from "./Buttons";
import Count from "./Count";

import style from "../styles/Allcomponent.css"

const Allcomponent = () => {
    return ( 
        <div className={style.content}>
            <Button/>
            <Count/>
        </div>
     );
}
 
export default Allcomponent;