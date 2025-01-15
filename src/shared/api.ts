import axios from "axios";
import { ICityRDO } from "../entities/city";
import { ITemperature, Temperature } from "../entities/temperature";

const axiosWeatherInstance = axios.create({
    baseURL: "https://dataservice.accuweather.com/"
})

const weatherRequest = {
        cityReq: async(cityName: string) =>{
            const response = await axiosWeatherInstance.get<ICityRDO[]>("locations/v1/cities/search", {
                withCredentials: false,
                params:{
                    apikey: "UWJ38WTrCqzQ1YM3cakTy9tTY9TInnIG",
                    q: cityName
                }
            })
            return response.data
        },
        weatherReq: async(cityKey: string) =>{
            const response = await axiosWeatherInstance.get<ITemperature[]>("forecasts/v1/hourly/1hour/"+cityKey,{
                withCredentials: false,
                params:{
                    apikey: "UWJ38WTrCqzQ1YM3cakTy9tTY9TInnIG",
                    metric: true
                }
            })
            return response.data
        }
        
    }


export default weatherRequest