import {Dispatch} from 'redux';
import {api, ItemType, OneDayType, OneHourType} from "../DAL/Api";
import {restoreState, saveValue} from "../LocalStorage/LocalStorage";


export type InitialStateType = {
    error: string | null,
    city: string ,
    country: string,
    currentWeather: ItemType[],
    forecast: OneDayType[],
    hours: OneHourType[],
    disabled: boolean,
    isFetching: boolean
}

const initialState: InitialStateType = {
    error: null,
    city: restoreState().saveCity,
    country: restoreState().saveCountry,
    currentWeather: [],
    forecast: [],
    hours: [],
    disabled: false,
    isFetching: false
}

export const currentWeatherReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'APP/ERROR_DETECTED':
            return {
                ...state,
                error: action.error
            }

        case 'APP/SET_FORECAST_WEATHER':
            return {
                ...state,
                forecast: action.dailyData,
                country: action.country,
                city: action.city
            }
        case 'APP/SET_CURRENT_WEATHER':
            const stateCopy = {...state}
            stateCopy.city = action.weather[0].city_name
            stateCopy.country = action.weather[0].country_code
            stateCopy.currentWeather = action.weather
            saveValue(stateCopy.city, stateCopy.country)
            return stateCopy

        case 'APP/SET_HOURLY_FORECAST_WEATHER':
            return {
                ...state,
                hours: action.weather,
                country: action.country,
                city: action.city

            }

        case 'APP/SEARCHED-CITY': {
            return {
                ...state,
                city: action.inputValueSearch,
                country: action.country
            }
        }
        case 'APP/DISABLED_BUTTON': {
            return {
                ...state,
                disabled: action.disabled
            }
        }
        case 'APP/SET_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default:

            return state;
    }
}

type ActionsTypes = ReturnType<typeof errorDetectedAC>
    | ReturnType<typeof setForecastWeatherAC>
    | ReturnType<typeof setCurrentWeatherAC>
    | ReturnType<typeof setHourlyWeatherAC>
    | ReturnType<typeof searchedCityAC>
    | ReturnType<typeof disabledButtonAC>
    | ReturnType<typeof setIsFetchingAC>

//action creators
export const errorDetectedAC = (error: string | null) =>
    ({type: 'APP/ERROR_DETECTED', error} as const)

export const setForecastWeatherAC = (dailyData: OneDayType[], country: string, city: string) =>
    ({type: 'APP/SET_FORECAST_WEATHER', dailyData, country, city} as const)

export const setCurrentWeatherAC = (weather: ItemType[]) =>
    ({type: 'APP/SET_CURRENT_WEATHER', weather} as const)

export const setHourlyWeatherAC = (weather: OneHourType[], country: string, city: string) =>
    ({type: 'APP/SET_HOURLY_FORECAST_WEATHER', weather, country, city} as const)

export const searchedCityAC = (inputValueSearch: string, country: string) =>
    ({type: 'APP/SEARCHED-CITY', inputValueSearch, country} as const)

export const disabledButtonAC = (disabled: boolean) =>
    ({type: 'APP/DISABLED_BUTTON', disabled,} as const)

export const setIsFetchingAC = (isFetching: boolean) =>
    ({type: 'APP/SET_IS_FETCHING', isFetching} as const)


//thunk creators

export const getCurrentWeatherTC = (cityName: string, country: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setIsFetchingAC(true))
        const response = await api.getCurrentWeather(cityName, country);
        dispatch(setCurrentWeatherAC(response.data.data))
    } catch (error) {
        dispatch(errorDetectedAC('Error'))
    } finally {
        dispatch(setIsFetchingAC(false))
    }
}

export const getThreeDayForecastTC = (cityName: string, country: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setIsFetchingAC(true))
        const response = await api.getForecastWeather(cityName, country);
        const forecastData = response.data.data.slice(1, 4)
        const countryCode = response.data.country_code
        const city = response.data.city_name
        dispatch(setForecastWeatherAC(forecastData, countryCode, city))
    } catch (error) {
        dispatch(errorDetectedAC('Error'))
    } finally {
        dispatch(setIsFetchingAC(false))
    }
}

export const getForecastWeatherTC = (cityName: string, country: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(disabledButtonAC(true))
        const response = await api.getForecastWeather(cityName, country);
        const forecastData = response.data.data.slice(1, 11)
        const countryCode = response.data.country_code
        const city = response.data.city_name
        dispatch(setForecastWeatherAC(forecastData, countryCode, city))
        dispatch(disabledButtonAC(false))
    } catch (error) {
        dispatch(errorDetectedAC('Incorrect city name. Please try again!'))
    } finally {
        dispatch(setIsFetchingAC(false))
    }

}

export const getHourlyForecastWeatherTC = (cityName: string, country: string) => async (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true))
    try {
        dispatch(disabledButtonAC(true))
        const response = await api.getHourlyForecastWeather(cityName, country);
        const hourlyData = response.data.data
        const countryCode = response.data.country_code
        const city = response.data.city_name
        dispatch(setHourlyWeatherAC(hourlyData, countryCode, city))
        dispatch(setIsFetchingAC(false))
    } catch (error) {
        dispatch(errorDetectedAC('Incorrect city name. Please try again!'))
    } finally {
        dispatch(setIsFetchingAC(false))
    }
}


