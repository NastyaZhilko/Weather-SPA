import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import style from "./SidePage.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../BLL/store";
import {OneHourType, OneDayType} from "../../../DAL/Api";
import {OneDay} from "../MainPage/ForecastWeater/OneDay";
import {
    getForecastWeatherTC,
    getHourlyForecastWeatherTC,
    searchedCityAC
} from "../../../BLL/weatherReducer";
import {Link, useHistory, useParams} from "react-router-dom";
import {HourlyForecast} from "./HourlyForecast/Hourly";
import {Preloader} from "../../components/Preloader/preloader";
import {Search} from "../../components/Search/Search";

export const SidePage = () => {

    const {cityName} = useParams<{ cityName: string }>()
    const history = useHistory()
    const dispatch = useDispatch()

    const name = useSelector<AppStateType, string>(state => state.weather.city)
    const country = useSelector<AppStateType, string>(state => state.weather.country)
    const forecast = useSelector<AppStateType, OneDayType[]>(state => state.weather.forecast)
    const hours = useSelector<AppStateType, OneHourType[]>(state => state.weather.hours)
    const error = useSelector<AppStateType, string | null>(state => state.weather.error)
    const isFetching = useSelector<AppStateType, boolean>(state => state.weather.isFetching)

    const [value, setValue] = useState<string>('')
    const [inputError, setInputError] = useState<boolean>(false)

    useEffect(() => {
        dispatch(getHourlyForecastWeatherTC(cityName, country))
    }, [cityName, country])

    useEffect(() => {
        dispatch(getForecastWeatherTC(cityName, country))
    }, [cityName, country])

    const getWeather = useCallback(() => {
        dispatch(searchedCityAC(value, ''))
        history.push(`/in/${value}`)
        setValue('')
    },[value])

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
                <div className={style.main}>
                    <Search
                        inputFieldError={inputFieldError}
                        value={value}
                        changeInput={changeInput}
                        inputError={inputError}
                        getWeather={getWeather}
                    />
                    {hours ?
                        <div>
                            <div className={style.location}>
                                <span>{name}, {country}</span>
                                <div className={style.link}>
                                    <button>
                                        <Link to={`/main`}>
                                            Current weather
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className={style.container}>
                                <div className={style.block}>
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
                                <div className={style.block}>
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
