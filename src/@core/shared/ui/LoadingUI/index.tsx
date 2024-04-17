import { FC } from "react";
import './style.scss'


const LoadingUI:FC=()=>{
    return(
        <div role='spinbutton' aria-label="loading-ui" className="loader"></div>
    )
}

export default LoadingUI