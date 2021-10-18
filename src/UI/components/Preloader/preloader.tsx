import React from "react";
import preloader from "../../../assets/preloader.svg"
import style from "./preloader.module.css"

export const Preloader = () => {

    return <div className={style.main}>
           <img src={preloader} alt='preloader'/>
    </div>
}