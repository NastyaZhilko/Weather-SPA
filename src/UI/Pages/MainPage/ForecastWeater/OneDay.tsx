import React, {FC} from "react";
import style from "./OneDay.module.css"
import {WeatherIcon} from "../../../components/WeatherIcon/WeatherIcon";

type PropsType = {
    temp: number
    description: string
    ts: number
    icon: string
}

export const OneDay: FC<PropsType> = React.memo (({temp, description, ts, icon}) => {
    const ms = ts * 1000;
    const weekdayName = new Date(ms).toLocaleString('eng', {weekday: 'long'})
    const dateName = new Date(ms).toLocaleString('eng', {year: 'numeric', month: 'long', day: 'numeric', })
    return (

        <div className={style.card}>
            <div className={style.weekdayName}>{dateName}</div>
            <div className={style.weekdayName}>{weekdayName}</div>
            <div className={style.weekdayName}>{temp>0 ? `+${temp} °C` : `${temp} °C`}</div>
            <div><WeatherIcon code={icon}/></div>
            <div>{description}</div>

        </div>
    )
})