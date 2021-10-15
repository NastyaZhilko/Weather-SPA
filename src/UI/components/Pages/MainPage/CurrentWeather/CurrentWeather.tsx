import React, {FC} from "react";
import style from './CurrentWeather.module.css'

type PropsType = {
    name: string
    country: string
    temp: number
    ts: number
    wind_spd: number
}

export const CurrentWeather: FC<PropsType> = ({name, temp, country, ts,wind_spd}) => {
    const ms = ts * 1000;
    const get2digitString = (num: number) => num < 10 ? '0' + num : num
    const helper = (lang: string, options: {}) => new Date(ms).toLocaleString(lang, options)
    const weekdayName = helper('eng', {weekday: 'long'})
    const time = get2digitString(new Date(ms).getHours()) + ':' + get2digitString(new Date(ms).getMinutes())
    const date = helper('eng', {month: 'long', day: 'numeric'})
    return (
        <div className={style.main}>
            <div className={style.city}>{name}, {country}</div>
            <div className={style.date}>{weekdayName}, {date}, {time}</div>
            <div className={style.temp}>{temp > 0 ? `+${temp} °C` : `${temp} °C`}</div>
            <div className={style.date}><span>Wind speed: </span>{Math.round(wind_spd)} m/s</div>

        </div>
    )
}