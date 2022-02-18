import {Dispatch} from "redux";
import {weatherAPI} from "../api/weather-api";

type InitWeatherStateType = {
    city: string
    temp: {
        temp: number | null
        feels_like: number | null
        temp_min: number | null
        temp_max: number | null
        pressure: number | null
        humidity: number | null
        sea_level: number | null
        grnd_level: number | null
    }
}

const initWeatherState = {
    city: '',
    temp: {
        temp: null,
        feels_like: null,
        temp_min: null,
        temp_max: null,
        pressure: null,
        humidity: null,
        sea_level: null,
        grnd_level: null,
    },
}

export const WeatherReducer = (
    state: InitWeatherStateType = initWeatherState,
    action: WeatherActionsType): InitWeatherStateType => {

    switch (action.type) {
        case "SET_WEATHER": {
            return {...state, temp: action.param}
        }
        case "SET_CITY_NAME": {
            return {...state, city: action.param}
        }
        default:
            return state
    }
}


export const setWeather = (param: any) =>
    ({type: 'SET_WEATHER', param});
export const setCityName = (param: any) =>
    ({type: 'SET_CITY_NAME', param});

type WeatherActionsType =
    | ReturnType<typeof setWeather>
    | ReturnType<typeof setCityName>

export const setWeatherThunk = (param: string) => (dispatch: Dispatch) => {
    weatherAPI.weatherByCity(param)
        .then(res => {
            dispatch(setCityName(res.data.name))
            dispatch(setWeather(res.data.main))
        })
        .catch(err => {
            console.log(err)
        })
}

export const setWeather5Days = (param: string) => (dispatch: Dispatch) => {
    weatherAPI.weatherByCity5days(param)

}