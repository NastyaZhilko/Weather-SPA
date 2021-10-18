import React, {useEffect, useState} from "react";
import style from "./MainPage.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CurrentWeather} from "./CurrentWeather/CurrentWeather";
import {AppStateType} from "../../../../BLL/store";
import {getCurrentWeatherTC, getThreeDayForecastTC} from "../../../../BLL/weatherReducer";
import {ItemType, OneDayType} from "../../../../DAL/Api";
import {OneDay} from "./ForecastWeater/OneDay";
import {Preloader} from "../../Preloader/preloader";

export const MainPage = () => {
    const name = useSelector<AppStateType, string>(state => state.weather.city)
    const country = useSelector<AppStateType, string>(state => state.weather.country)
    const forecast = useSelector<AppStateType, OneDayType[]>(state => state.weather.forecast)
    const currentWeather = useSelector<AppStateType, ItemType[]>(state => state.weather.currentWeather)
    const isFetching = useSelector<AppStateType, boolean>(state => state.weather.isFetching)

    const dispatch = useDispatch()
    const [value, setValue] = useState<string>(name)
    const [valueCountry, setValueCountry] = useState<string>(country)

    useEffect(() => {
        dispatch(getThreeDayForecastTC(value))
    }, [dispatch, value, valueCountry])


    useEffect(() => {
        dispatch(getCurrentWeatherTC(value, valueCountry))
    }, [dispatch, value, valueCountry])

    const onClickHandlerMoscow = () => {
        setValue('Moscow')
        setValueCountry('RU')
    }
    const onClickHandlerBratislava = () => {
        setValue('Bratislava')
        setValueCountry('SK')
    }
    const onClickHandlerMinsk = () => {
        setValue('Minsk')
        setValueCountry('BY')
    }
    return (
        <>
            {isFetching ? <Preloader/>
            :
                <div className={style.block}>
                    <div className={style.container}>
                        <div className={style.currentWeather}>
                            {currentWeather.map((current, index) => <CurrentWeather
                                    key={index}
                                    temp={current.temp}
                                    name={name}
                                    country={country}
                                    ts={current.ts}
                                    wind_spd={current.wind_spd}
                                    description={current.weather.description}
                                    clouds={current.clouds}
                                    icon={current.weather.icon}
                                />
                            )}
                        </div>

                        <div className={style.buttons}>
                            <span>Select city</span>
                            <button onClick={onClickHandlerMinsk}>Minsk</button>
                            <button onClick={onClickHandlerMoscow}>Moscow</button>
                            <button onClick={onClickHandlerBratislava}>Bratislava</button>
                        </div>
                    </div>
                    <div className={style.link}>
                        <NavLink className={style.inactive} activeClassName={style.active}
                                 to={`/in/${name}`}>
                            Ten days forecast and hourly forecast
                        </NavLink>
                    </div>
                    <div className={style.cardsBlock}>
                        <span>Three days forecast</span>
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
                </div>
            }
        </>
    )
}