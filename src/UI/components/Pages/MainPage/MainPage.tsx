import React, {useEffect, useState} from "react";
import style from "./MainPage.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CurrentWeather} from "./CurrentWeather/CurrentWeather";
import {AppStateType} from "../../../BLL/store";
import {getCurrentWeatherTC, getThreeDayForecastTC} from "../../../BLL/weatherReducer";
import {OneDayType} from "../../../DAL/Api";
import {OneDay} from "../SidePage/OneDay";


export const MainPage = () => {
    const name = useSelector<AppStateType, string>(state => state.weather.city)
    const country = useSelector<AppStateType, string>(state => state.weather.country)
    const temp = useSelector<AppStateType, number>(state => state.weather.temp)
    const forecast = useSelector<AppStateType, OneDayType[]>(state => state.weather.forecast)
    const ts = useSelector<AppStateType, number>(state => state.weather.ts)
    const wind_spd = useSelector<AppStateType, number>(state => state.weather.wind_spd)
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>(name)

    useEffect(() => {
        dispatch(getThreeDayForecastTC(value))
    }, [dispatch, value])


    useEffect(() => {
        dispatch(getCurrentWeatherTC(value))
    }, [dispatch, value])

    const onClickHandlerMoscow = () => {
        setValue('Moscow')
    }
    const onClickHandlerBratislava = () => {
        setValue('Bratislava')
    }
    const onClickHandlerMinsk = () => {
        setValue('Minsk,BY')
    }
    return (
        <div className={style.block}>
            <div className={style.container}>
                <div className={style.currentWeather}>
                    <CurrentWeather
                        temp={temp}
                        name={name}
                        country={country}
                        ts={ts}
                        wind_spd={wind_spd}
                    />
                </div>
                <div className={style.buttons}>
                    <span>Select city</span>
                    <button onClick={onClickHandlerMinsk}>Minsk</button>
                    <button onClick={onClickHandlerMoscow}>Moscow</button>
                    <button onClick={onClickHandlerBratislava}>Bratislava</button>
                </div>

            </div>
            <div className={style.cardsBlock}>
                <span>Three days forecast</span>
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

            <div>
                <NavLink to={`/in/${name}`}>
                    Прогноз на 10 дней
                </NavLink>
            </div>
        </div>
    )
}