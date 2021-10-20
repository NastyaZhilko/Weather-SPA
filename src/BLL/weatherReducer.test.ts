import {
    currentWeatherReducer, disabledButtonAC,
    errorDetectedAC,
    InitialStateType, searchedCityAC,
    setCurrentWeatherAC,
    setForecastWeatherAC, setHourlyWeatherAC, setIsFetchingAC
} from "./weatherReducer";

let startState: InitialStateType = {
    error: null,
    city: '',
    country: '',
    currentWeather: [],
    forecast: [],
    hours: [],
    disabled: false,
    isFetching: false
}
beforeEach(()=>{
    startState ={
        error: null,
        city: 'Kiev',
        country: 'UA',
        currentWeather: [],
        forecast: [],
        hours:[],
        disabled: false,
        isFetching: false
    }
})

test('correct errorDetectedAC', ()=>{
    const action = errorDetectedAC('Some error')
    const endState = currentWeatherReducer(startState, action)
    expect(endState).toEqual({
        error: 'Some error',
        city: 'Minsk',
        country: 'BY',
        currentWeather: [],
        forecast: [],
        hours:[],
        disabled: false,
        isFetching: false
        }
    )
    expect(typeof endState.error).toBe('string')
})

test('correct setForecastWeatherAC', ()=>{
    const action = setForecastWeatherAC([
        {
            moonrise_ts: 1634739837,
            wind_cdir: "S",
            rh: 67,
            pres: 995.286,
            high_temp: 7.1,
            sunset_ts: 1634739438,
            ozone: 287.893,
            moon_phase: 0.99698,
            wind_gust_spd: 12.6236,
            snow_depth: 0,
            clouds: 99,
            ts: 1634677260,
            sunrise_ts: 1634702952,
            app_min_temp: -2.3,
            wind_spd: 4.4376,
            pop: 55,
            wind_cdir_full: "south",
            slp: 1013.38,
            moon_phase_lunation: 0.46,
            valid_date: "2021-10-20",
            app_max_temp: -0.1,
            vis: 18.3243,
            dewpt: -2.8,
            snow: 0,
            uv: 0.781541,
            weather: {
                icon: "r04d",
                code: 520,
                description: "Light shower rain"
            },
            wind_dir: 186,
            max_dhi: null,
            clouds_hi: 81,
            precip: 1.19629,
            low_temp: 2.8,
            max_temp: 3.8,
            moonset_ts: 1634700646,
            datetime: "2021-10-20",
            temp: 3,
            min_temp: 2.1,
            clouds_mid: 90,
            clouds_low: 68
        },
        {
            moonrise_ts: 1634826739,
            wind_cdir: "SW",
            rh: 85,
            pres: 982.157,
            high_temp: 11.5,
            sunset_ts: 1634825693,
            ozone: 275.406,
            moon_phase: 0.996431,
            wind_gust_spd: 14.6954,
            snow_depth: 0,
            clouds: 100,
            ts: 1634763660,
            sunrise_ts: 1634789477,
            app_min_temp: -0.4,
            wind_spd: 4.91708,
            pop: 75,
            wind_cdir_full: "southwest",
            slp: 999.673,
            moon_phase_lunation: 0.49,
            valid_date: "2021-10-21",
            app_max_temp: 11.5,
            vis: 23.616,
            dewpt: 6.2,
            snow: 0,
            uv: 1.28642,
            weather: {
                icon: "c04d",
                code: 804,
                description: "Overcast clouds"
            },
            wind_dir: 223,
            max_dhi: null,
            clouds_hi: 100,
            precip: 2.89355,
            low_temp: 7.5,
            max_temp: 11.5,
            moonset_ts: 1634791661,
            datetime: "2021-10-21",
            temp: 8.6,
            min_temp: 3.6,
            clouds_mid: 92,
            clouds_low: 74
        },
        {
            moonrise_ts: 1634913704,
            wind_cdir: "SW",
            rh: 75,
            pres: 979.885,
            high_temp: 11.3,
            sunset_ts: 1634911950,
            ozone: 288.427,
            moon_phase: 0.975179,
            wind_gust_spd: 18.1338,
            snow_depth: 0,
            clouds: 81,
            ts: 1634850060,
            sunrise_ts: 1634876002,
            app_min_temp: 2.5,
            wind_spd: 5.13256,
            pop: 75,
            wind_cdir_full: "southwest",
            slp: 997.305,
            moon_phase_lunation: 0.53,
            valid_date: "2021-10-22",
            app_max_temp: 11.3,
            vis: 24.128,
            dewpt: 5,
            snow: 0,
            uv: 1.42038,
            weather: {
                icon: "r04d",
                code: 520,
                description: "Light shower rain"
            },
            wind_dir: 232,
            max_dhi: null,
            clouds_hi: 28,
            precip: 3.37109,
            low_temp: 4.6,
            max_temp: 11.3,
            moonset_ts: 1634882690,
            datetime: "2021-10-22",
            temp: 9.3,
            min_temp: 6,
            clouds_mid: 50,
            clouds_low: 61
        }
    ],'RU', 'Moscow')
    const endState = currentWeatherReducer(startState, action)
    expect(endState.forecast.length).toBe(  3)
    expect(endState.country).toBe('RU')
    expect(endState.city).toBe('Moscow')
})

test('correct setCurrentWeatherAC', ()=>{
    const action = setCurrentWeatherAC([{
        rh: 89.2963,
        pod: "n",
        lon: 27.56667,
        pres: 980.919,
        timezone: "Europe/Minsk",
        ob_time: "2021-10-20 18:43",
        country_code: "BY",
        clouds: 100,
        ts: 1634755418,
        solar_rad: 0,
        state_code: "04",
        city_name: "Minsk",
        wind_spd: 4.88354,
        wind_cdir_full: "southwest",
        wind_cdir: "SW",
        slp: 1006.2,
        vis: 5,
        h_angle: -90,
        sunset: "14:57",
        dni: 0,
        dewpt: 7.7,
        snow: 0,
        uv: 0,
        precip: 0,
        wind_dir: 219,
        sunrise: "04:46",
        ghi: 0,
        dhi: 0,
        aqi: 52,
        lat: 53.9,
        weather: {
        icon: "c04n",
            code: 804,
            description: "Overcast Clouds"
    },
    datetime: "2021-10-20:18",
        temp: 9.3,
        station: "UMMS",
        elev_angle: -26.83,
        app_temp: 9.3}
    ])
    const endState = currentWeatherReducer(startState, action)
    expect(endState.currentWeather.length).toBe(1)
    expect(endState.country).toBe('BY')
    expect(endState.city).toBe('Minsk')
    expect(endState.forecast.length).toBe(0)
})

test('correct setHourlyWeatherAC', ()=>{
    const action = setHourlyWeatherAC([{
        wind_cdir: "SSW",
        rh: 80,
        pod: "n",
        timestamp_utc: "2021-10-20T20:00:00",
        pres: 995.458,
        solar_rad: 0,
        ozone: 281.5,
        weather: {
            icon: "r04n",
            code: 520,
            description: "Light shower rain"
        },
        wind_gust_spd: 14.4271,
        timestamp_local: "2021-10-20T22:00:00",
        snow_depth: 0,
        clouds: 100,
        ts: 1634760000,
        wind_spd: 4.96323,
        pop: 30,
        wind_cdir_full: "south-southwest",
        slp: 1001.77,
        dni: 0,
        dewpt: 13.3,
        snow: 0,
        uv: 0,
        wind_dir: 203,
        clouds_hi: 100,
        precip: 0.4169921875,
        vis: 24.128,
        dhi: 0,
        app_temp: 16.6,
        datetime: "2021-10-20:20",
        temp: 16.6,
        ghi: 0,
        clouds_mid: 82,
        clouds_low: 64
    }], 'FR','Paris')
    const endState = currentWeatherReducer(startState, action)
    expect(endState.currentWeather).toEqual([])
    expect(endState.country).toBe('FR')
    expect(endState.city).toBe('Paris')
    expect(typeof endState.hours[0].weather).toBe('object')
})

test('correct searchedCityAC', ()=>{
    const action = searchedCityAC('Minsk','')
    const endState = currentWeatherReducer(startState, action)
    expect(endState.currentWeather).toEqual([])
    expect(endState.hours.length).toBe(0)
    expect(endState.forecast).toEqual([])
    expect(endState.country).toBe('')
    expect(endState.city).toBe('Minsk')

})

test('correct disabledButtonAC', ()=>{
    const action = disabledButtonAC(true)
    const endState = currentWeatherReducer(startState, action)
    expect(endState.disabled).toBe(true)
    expect(endState.isFetching).toEqual(false)
    expect(typeof endState.disabled).toBe('boolean')

})

test('correct setIsFetchingAC', ()=>{
    const action = setIsFetchingAC(true)
    const endState = currentWeatherReducer(startState, action)
    expect(endState.disabled).toBe(false)
    expect(endState.isFetching).toEqual(true)
    expect(typeof endState.isFetching).toBe('boolean')

})
