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
    pressure: number
    wind_cdir_full: string
}

export const CurrentWeather: FC<PropsType> = React.memo(
    ({name, temp, country, ts, wind_spd, description, clouds, icon, pressure, wind_cdir_full}) => {
        const ms = ts * 1000;
        const get2digitString = (num: number) => num < 10 ? '0' + num : num
        const helper = (lang: string, options: {}) => new Date(ms).toLocaleString(lang, options)
        const weekdayName = helper('eng', {weekday: 'long'})
        const time = get2digitString(new Date(ms).getHours()) + ':' + get2digitString(new Date(ms).getMinutes())
        const date = helper('eng', {month: 'long', day: 'numeric'})
        return (
            <div className={style.main}>
                <div className={style.oneBlock}>
                    <h3>Current Weather</h3>
                    <div className={style.city}>
                         {name}, {country}</div>
                    <div className={style.date}>{weekdayName}, {date}, {time}</div>
                    <div className={style.temp}>
                        <div>
                            <WeatherIcon code={icon}/>
                        </div>
                        <div>{temp > 0 ? `+${temp} °C` : `${temp} °C`}</div>
                    </div>
                    <div style={{fontSize: '20px'}}> {description}</div>
                </div>

                <div className={style.twoBlock}>
                    <div className={style.partBlock}>
                        <div>Wind speed</div>
                        <div>Clouds</div>
                        <div>Pressure</div>
                        <div>Direction of the wind</div>
                    </div>
                    <div className={style.partBlock}>
                        <div>{Math.round(wind_spd)}m/s</div>
                        <div>{clouds} %</div>
                        <div>{pressure} mb </div>
                        <div>{wind_cdir_full} </div>
                    </div>
                </div>
            </div>
        )
    })