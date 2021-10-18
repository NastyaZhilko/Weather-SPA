import React, {FC} from "react";
import style from './CurrentWeather.module.css'
import {WeatherIcon} from "../../../WeatherIcon/WeatherIcon";

type PropsType = {
    name: string
    country: string
    temp: number
    ts: number
    wind_spd: number
    description: string
    clouds: number
    icon: string
}

export const CurrentWeather: FC<PropsType> = React.memo (
    ({name, temp, country, ts, wind_spd, description,clouds, icon}) => {
        const ms = ts * 1000;
        const get2digitString = (num: number) => num < 10 ? '0' + num : num
        const helper = (lang: string, options: {}) => new Date(ms).toLocaleString(lang, options)
        const weekdayName = helper('eng', {weekday: 'long'})
        const time = get2digitString(new Date(ms).getHours()) + ':' + get2digitString(new Date(ms).getMinutes())
        const date = helper('eng', {month: 'long', day: 'numeric'})
        return (
            <div className={style.main}>
                <div className={style.oneBlock}>
                    <div className={style.city}>{name}, {country}</div>
                    <div className={style.date}>{weekdayName}, {date}, {time}</div>
                    <div><WeatherIcon code={icon}/></div>
                    <div className={style.temp}>{temp > 0 ? `+${temp} °C` : `${temp} °C`}</div>
                </div>

                <div className={style.twoBlock}>
                    <div>Wind speed................................... <span>{Math.round(wind_spd)}m/s</span></div>
                    <div>Description............ <span>{description}</span></div>
                    <div>Clouds.............................................. <span>{clouds} %</span></div>
                </div>
            </div>
        )
    })