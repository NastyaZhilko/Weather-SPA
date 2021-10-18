import axios from 'axios'

const API_KEY = '86512471b71842648e15cb207e3c98df'


const instance = axios.create({
    baseURL: `https://api.weatherbit.io/v2.0`
})
export const api = {
    getCurrentWeather(cityName: string, country: string) {
        return instance
            .get<CurrentWeatherResponseType>(`/current?&city=${cityName},${country}&key=${API_KEY}`)
    },
    getForecastWeather(cityName: string) {
        return instance
            .get<ForecastResponseType>(`/forecast/daily?city=${cityName}&key=${API_KEY}`)
    },
    getHourlyForecastWeather(cityName: string){
        return instance
            .get<HourlyForecastResponseType>(`/forecast/hourly?city=${cityName}&key=${API_KEY}&hours=10`)
    }

}


//Response Types
export type ItemType = {
    rh: number,
    pod: string,
    lon: number,
    pres: number,
    timezone: string,
    ob_time: string,
    country_code: string,
    clouds: number,
    ts: number,
    solar_rad: number,
    state_code: string,
    city_name: string,
    wind_spd: number,
    wind_cdir_full: string,
    wind_cdir: string,
    slp: number,
    vis: number,
    h_angle: number,
    sunset: string,
    dni: number,
    dewpt: number,
    snow: number,
    uv: number,
    precip: number,
    wind_dir: number,
    sunrise: string,
    ghi: number,
    dhi: number,
    aqi: number,
    lat: number,
    weather: {
        icon: string,
        code: number,
        description: string
    }
    datetime: string,
    temp: number,
    station: string,
    elev_angle: number,
    app_temp: number
}
export type CurrentWeatherResponseType = {
    data: ItemType[],
    count: number
}

export type OneDayType = {
    moonrise_ts: number,
    wind_cdir: string,
    rh: number,
    pres: number,
    high_temp: number,
    sunset_ts: number,
    ozone: number,
    moon_phase: number,
    wind_gust_spd: number,
    snow_depth: number,
    clouds: number,
    ts: number,
    sunrise_ts: number,
    app_min_temp: number,
    wind_spd: number,
    pop: number,
    wind_cdir_full: string,
    slp: number,
    moon_phase_lunation: number,
    valid_date: string,
    app_max_temp: number,
    vis: number,
    dewpt: number,
    snow: number,
    uv: number,
    weather: {
        icon: string,
        code: number,
        description: string
    },
    wind_dir: number,
    max_dhi: null,
    clouds_hi: number,
    precip: number,
    low_temp: number,
    max_temp: number,
    moonset_ts: number,
    datetime: string,
    temp: number,
    min_temp: number,
    clouds_mid: number,
    clouds_low: number
}
export type ForecastResponseType = {
    data: OneDayType[],
    city_name: string,
    lon: string,
    timezone: string,
    lat: string,
    country_code: string,
    state_code: string
}

export type OneHourType ={
    wind_cdir: string,
    rh: number,
    pod: string,
    timestamp_utc: string,
    pres: number,
    solar_rad: number,
    ozone: number,
    weather: {
        icon: string,
        code: number,
        description: string
    },
    wind_gust_spd: number,
    timestamp_local: string,
    snow_depth: number,
    clouds: number,
    ts: number,
    wind_spd: number,
    pop: number,
    wind_cdir_full: string,
    slp: number,
    dni: number,
    dewpt: number,
    snow: number,
    uv: number,
    wind_dir: number,
    clouds_hi: number,
    precip: number,
    vis: number,
    dhi: number,
    app_temp: number,
    datetime: string,
    temp: number,
    ghi: number,
    clouds_mid: number,
    clouds_low: number
}
export type HourlyForecastResponseType ={
    data: OneHourType[],
    city_name: string,
    lon: string,
    timezone: string,
    lat: string,
    country_code: string,
    state_code: string
}
