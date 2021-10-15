import React, {FC} from "react";
import style from "../../MainPage/WeatherFor4Days/Card.module.css"

type PropsType = {
    temp: number
    description: string
    ts: number
}

export const HourlyForecast: FC<PropsType> = ({temp, description, ts}) => {
    const ms = ts * 1000;
    const get2digitString = (num: number) => num < 10 ? '0' + num : num
    const helper = (lang: string, options: {}) => new Date(ms).toLocaleString(lang, options)
    const weekdayName = helper('eng', {weekday: 'short'})
    const time = get2digitString(new Date(ms).getHours()) + ':' + get2digitString(new Date(ms).getMinutes())
    const date = helper('eng', {month: 'long', day: 'numeric'})
    return (
        <div className={style.card}>
            <div className={style.weekdayName}>{date}</div>
            <div className={style.weekdayName}>{weekdayName}, {time}</div>
            <div className={style.weekdayName}>{temp>0 ? `+${temp} °C` : `${temp} °C`}</div>
            <button className="btn btn-dark btn-outline-light">{description}</button>

        </div>
    )
}