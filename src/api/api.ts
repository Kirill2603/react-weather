import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    // withCredentials: true,
    params: {
        appid: '3929ddf77b924b797c8a4c1418ff771f'
    }
})

export const weatherAPI = {
    weatherByCity(param: any) {
        debugger
        return instance.get(`weather?q=${param}`)
    },
    weatherByCity5days(param: any) {
        return instance.get(`forecast?q=${param}`)
    }

}