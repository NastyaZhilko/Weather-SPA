import React, {useEffect, useState} from "react";
import style from "./SidePage.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../BLL/store";
import {OneHourType, OneDayType} from "../../../DAL/Api";
import {OneDay} from "./OneDay";
import {
    getForecastWeatherTC,
    getHourlyForecastWeatherTC,
    searchedCityAC
} from "../../../BLL/weatherReducer";
import {useHistory, useParams} from "react-router-dom";
import {HourlyForecast} from "./HourlyForecast/Hourly";

export const SidePage = () => {

    const {cityName} = useParams<{ cityName: string }>()
    const history = useHistory()
    const dispatch = useDispatch()

    const forecast = useSelector<AppStateType, OneDayType[]>(state => state.weather.forecast)
    const hours = useSelector<AppStateType, OneHourType[]>(state => state.weather.hours)

    const [value, setValue] = useState<string>('')

    useEffect(() => {
        dispatch(getHourlyForecastWeatherTC(cityName))
    }, [dispatch, cityName])

    useEffect(() => {
        dispatch(getForecastWeatherTC(cityName))
    }, [dispatch, cityName])
    console.log('h+1')
    const getWeather = () => {
        dispatch(searchedCityAC(value))
        history.push(`/in/${value}`)
    }
    /*    console.log(cityName)
        console.log(name)*/
    return (
        <div className={style.container}>
            <div className={style.form}>
                <input type="text"
                       name="city"
                       placeholder="Enter your city"
                       value={value}
                       onChange={(e) => setValue(e.currentTarget.value)}
                />
                <button onClick={getWeather}>Get weather</button>
            </div>
            <div className={style.location}>
                <h3>{cityName}</h3>

            </div>
            <div className={style.longTermForecast}>
                <h3>Daily forecast</h3>
                <div className={style.cards}>
                    {forecast.map((day, index) => (
                        <OneDay
                            key={index}
                            temp={day.high_temp}
                            date={day.valid_date}
                            description={day.weather.description}
                            ts={day.ts}
                        />
                    ))
                    }
                </div>

            </div>
            <div className={style.hourlyForecast}>
                <h3>Hourly forecast</h3>
                <div className={style.cards}>
                    {hours.map((hour, index) => (
                        <HourlyForecast
                            key={index}
                            temp={hour.app_temp}
                            description={hour.weather.description}
                            ts={hour.ts}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}