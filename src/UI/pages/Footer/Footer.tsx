import React from "react";
import style from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.name}>Anastasia Zhilko</div>
            <div className={style.copyright}>2021 All Rights Reserved.</div>
        </div>
    )
}