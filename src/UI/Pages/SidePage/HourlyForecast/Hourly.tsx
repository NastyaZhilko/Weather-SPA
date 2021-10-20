import React, {FC} from "react";
import style from "../../MainPage/ForecastWeater/OneDay.module.css"
import {WeatherIcon} from "../../../components/WeatherIcon/WeatherIcon";

type PropsType = {
    temp: number
    description: string
    ts: number
    icon: string
}

export const HourlyForecast: FC<PropsType> = React.memo(({temp, description, ts, icon}) => {
    const ms = ts * 1000;
    const get2digitString = (num: number) => num < 10 ? '0' + num : num
    const helper = (lang: string, options: {}) => new Date(ms).toLocaleString(lang, options)
    const weekdayName = helper('eng', {weekday: 'short'})
    const time = get2digitString(new Date(ms).getHours()) + ':' + get2digitString(new Date(ms).getMinutes())
    const date = helper('eng', {month: 'long', day: 'numeric'})
    return (
        <div className={style.card}>
            <div>{date}</div>
            <div>{weekdayName}, {time}</div>
            <div>{temp > 0 ? `+${temp} °C` : `${temp} °C`}</div>
            <div><WeatherIcon code={icon}/></div>
            <div>{description}</div>
        </div>
    )
})