import {Dispatch} from 'redux';
import {api, ItemType, OneDayType, OneHourType} from "../DAL/Api";
import {restoreState, saveValue} from "../LocalStorage/LocalStorage";


type InitialStateType = {
    error: string | null,
    city: string,
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
                forecast: action.dailyData
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
                hours: action.weather

            }

        case 'APP/SEARCHED-CITY': {
            return {
                ...state,
                city: action.inputValueSearch
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

export const setForecastWeatherAC = (dailyData: OneDayType[]) =>
    ({type: 'APP/SET_FORECAST_WEATHER', dailyData} as const)

export const setCurrentWeatherAC = (weather: ItemType[]) =>
    ({type: 'APP/SET_CURRENT_WEATHER', weather} as const)

export const setHourlyWeatherAC = (weather: OneHourType[]) =>
    ({type: 'APP/SET_HOURLY_FORECAST_WEATHER', weather} as const)

export const searchedCityAC = (inputValueSearch: string) =>
    ({type: 'APP/SEARCHED-CITY', inputValueSearch,} as const)

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

export const getThreeDayForecastTC = (cityName: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setIsFetchingAC(true))
        const response = await api.getForecastWeather(cityName);
        const forecastData = response.data.data.slice(1, 4)
        dispatch(setForecastWeatherAC(forecastData))
    } catch (error) {
        dispatch(errorDetectedAC('Error'))
    } finally {
        dispatch(setIsFetchingAC(false))
    }
}

export const getForecastWeatherTC = (cityName: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(disabledButtonAC(true))
        const response = await api.getForecastWeather(cityName);
        const forecastData = response.data.data.slice(1, 11)
        dispatch(setForecastWeatherAC(forecastData))
        dispatch(disabledButtonAC(false))
    } catch (error) {
        dispatch(errorDetectedAC('Incorrect city name. Please try again!'))
    } finally {
        dispatch(setIsFetchingAC(false))
    }

}

export const getHourlyForecastWeatherTC = (cityName: string) => async (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true))
    try {
        dispatch(disabledButtonAC(true))
        const response = await api.getHourlyForecastWeather(cityName);
        const hourlyData = response.data.data
        dispatch(setHourlyWeatherAC(hourlyData))
        dispatch(setIsFetchingAC(false))
    } catch (error) {
        dispatch(errorDetectedAC('Incorrect city name. Please try again!'))
    } finally {
        dispatch(setIsFetchingAC(false))
    }
}


