import React, {ChangeEvent, useEffect, useState} from "react";
import style from "./SidePage.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../BLL/store";
import {OneHourType, OneDayType} from "../../../../DAL/Api";
import {OneDay} from "../MainPage/ForecastWeater/OneDay";
import {
    getForecastWeatherTC,
    getHourlyForecastWeatherTC,
    searchedCityAC
} from "../../../../BLL/weatherReducer";
import {NavLink, useHistory, useParams} from "react-router-dom";
import {HourlyForecast} from "./HourlyForecast/Hourly";
import {Preloader} from "../../Preloader/preloader";

export const SidePage = () => {

    const {cityName} = useParams<{ cityName: string }>()
    const history = useHistory()
    const dispatch = useDispatch()

    const name = useSelector<AppStateType, string>(state => state.weather.city)
    const forecast = useSelector<AppStateType, OneDayType[]>(state => state.weather.forecast)
    const hours = useSelector<AppStateType, OneHourType[]>(state => state.weather.hours)
    const error = useSelector<AppStateType, string | null>(state => state.weather.error)
    const isFetching = useSelector<AppStateType, boolean>(state => state.weather.isFetching)

    const [value, setValue] = useState<string>('')
    const [inputError, setInputError] = useState<boolean>(false)

    useEffect(() => {
        dispatch(getHourlyForecastWeatherTC(cityName))
    }, [dispatch, cityName])

    useEffect(() => {
        dispatch(getForecastWeatherTC(cityName))
    }, [dispatch, cityName])

    const getWeather = () => {
        dispatch(searchedCityAC(value))
        history.push(`/in/${value}`)
        setValue('')
    }

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        if ((e.currentTarget.value.length >= 1 &&
            (e.currentTarget.value.match("^[а-яА-ЯЁё]+$")))
        ) {
            setInputError(true)
        } else {
            setInputError(false)
        }
    }

    const inputFieldError = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.match("^[а-яА-ЯЁё]+$")) {
            setInputError(true)
        } else {
            setInputError(false)
        }
    }

    return (
        <>
            {isFetching ? <Preloader/>
                :
                <div className={style.container}>
                    <div className={style.form}>
                        <input type="text"
                               name="city"
                               placeholder="City name"
                               title="Use latin letters!"
                               pattern="^[a-zA-Z\s]+$"
                               onBlur={inputFieldError}
                               value={value}
                               onChange={changeInput}
                        />
                        <button className={style.btn} disabled={!value || inputError}
                                onClick={getWeather}>
                            Get weather
                        </button>
                        {inputError && <div style={{color: 'red', fontSize: '18px'}}>
                            Use latin letters!
                        </div>}
                    </div>
                    {hours ?
                        <div>
                            <div className={style.location}>
                                <span>{name}</span>
                                <div className={style.link}>
                                    <NavLink className={style.inactive} activeClassName={style.active} to={`/main`}>
                                        Current weather
                                    </NavLink>
                                </div>
                            </div>
                            <div className={style.block}>
                                <div className={style.longTermForecast}>
                                    <h3>Ten days forecast</h3>
                                    <div className={style.cards}>
                                        {forecast.map((day, index) => (
                                            <OneDay
                                                key={index}
                                                temp={day.high_temp}
                                                description={day.weather.description}
                                                ts={day.ts}
                                                icon={day.weather.icon}
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
                                                icon={hour.weather.icon}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <div className={style.error}>{error}</div>
                    }
                </div>
            }
        </>
    )
}
