import React, {ChangeEvent, useState} from 'react'
import {setWeather5Days, setWeatherThunk} from "./store/weather-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Heading, Input, Text} from "@chakra-ui/react";
import {AppRootStateType} from "./store/store";

export const Weather = () => {

    const city = useSelector<AppRootStateType, string>(state => state.WeatherReducer.city)
    const {temp, feels_like,} = useSelector<AppRootStateType, any>(state => state.WeatherReducer.temp)
    const dispatch = useDispatch()

    const [cityName, setCityName] = useState<string>('Minsk')
    let currentTemp
    if (temp) {
        currentTemp = Math.round(temp - 273.15)
    }
    let feelsLike
    if (temp) {
        feelsLike = Math.round(feels_like - 273.15)
    }

    const changeCityName = (e: ChangeEvent<HTMLInputElement>) => {
        setCityName(e.currentTarget.value)
    }

    const getWeather = () => {
        dispatch(setWeatherThunk(cityName))
    }

    const getWeather5Days = () => {
        dispatch(setWeather5Days(cityName))
    }
    return (<>
            <Box boxSize={"md"} border={'4px'}>
                <Input type="text" onChange={changeCityName} value={cityName}/>
                <Button onClick={() => getWeather()}>Get</Button>
                <Heading>{city}</Heading>
                <Text>Temperature : {currentTemp} ℃</Text>
                <Text>Feels like : {feelsLike} ℃</Text>
            </Box>
            <Box boxSize={"md"} border={'4px'}>
                <Input type="text" onChange={changeCityName} value={cityName}/>
                <Button onClick={() => getWeather5Days()}>Get</Button>
                <Heading>{city}</Heading>
                <Text>Temperature : {currentTemp} ℃</Text>
                <Text>Feels like : {feelsLike} ℃</Text>
            </Box>
        </>
    )
}
