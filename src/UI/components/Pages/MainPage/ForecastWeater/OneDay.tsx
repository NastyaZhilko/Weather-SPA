import React, {FC} from "react";
import style from "../MainPage/WeatherFor4Days/Card.module.css"

type PropsType = {
    date: string
    temp: number
    description: string
    ts: number
}

export const OneDay: FC<PropsType> = ({date, temp, description, ts}) => {
    const ms = ts * 1000;
    const weekdayName = new Date(ms).toLocaleString('eng', {weekday: 'long'})
    const dateName = new Date(ms).toLocaleString('eng', {year: 'numeric', month: 'long', day: 'numeric', })
    return (
        <div className={style.card}>
            <div className={style.weekdayName}>{dateName}</div>
            <div className={style.weekdayName}>{weekdayName}</div>
            <div className={style.weekdayName}>{temp>0 ? `+${temp} °C` : `${temp} °C`}</div>
            <button>{description}</button>

        </div>
    )
}