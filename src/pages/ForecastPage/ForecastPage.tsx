import { useNavigate } from "react-router-dom"
import "./ForecastPage.css"
import weatherRequest from "../../shared/api"
import { SetStateAction, useState } from "react"
import { IForecast } from "../../entities/forecast"

const ForecastPage = () => {

    const [city, setCity] = useState('')
    const [forecast, setForecast] = useState<IForecast | undefined>(undefined)

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    const handleChange = (e: { target: { value: SetStateAction<string> } }) =>{
        setCity(e.target.value)
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const cityRes = (await weatherRequest.cityReq(city))

        if (cityRes.length < 1) return

        const cityKey = cityRes[0].Key
        setForecast(await weatherRequest.forecastReq(cityKey))


        // console.log(map1)

        // setDay1(forecastRes.DailyForecasts[0].Date)
        // setDay2(forecastRes.DailyForecasts[1].Date)
        // setDay3(forecastRes.DailyForecasts[2].Date)
        // setDay4(forecastRes.DailyForecasts[3].Date)
        // setDay5(forecastRes.DailyForecasts[4].Date)

        // setWeather1("Макс. температура: " + forecastRes.DailyForecasts[0].Temperature.Maximum.Value.toString() +
        // + "Мин. температура: " +  forecastRes.DailyForecasts[0].Temperature.Minimum.Value.toString())

        // setWeather2("Макс. температура: " + forecastRes.DailyForecasts[1].Temperature.Maximum.Value.toString() +
        // + "Мин. температура: " +  forecastRes.DailyForecasts[1].Temperature.Minimum.Value.toString())
       
        // setWeather3("Макс. температура: " + forecastRes.DailyForecasts[2].Temperature.Maximum.Value.toString() +
        // + "Мин. температура: " +  forecastRes.DailyForecasts[2].Temperature.Minimum.Value.toString())
       
        // setWeather4("Макс. температура: " + forecastRes.DailyForecasts[3].Temperature.Maximum.Value.toString() +
        // + "Мин. температура: " +  forecastRes.DailyForecasts[3].Temperature.Minimum.Value.toString())
        
        // setWeather5("Макс. температура: " + forecastRes.DailyForecasts[4].Temperature.Maximum.Value.toString() +
        // + "Мин. температура: " +  forecastRes.DailyForecasts[4].Temperature.Minimum.Value.toString())
    }


    return(
    <div className="container2">
        <div className="cntr2">
            <form action="" className="form" onSubmit={handleSubmit}> 
                <div className="weatherInfo">
                    {forecast &&        forecast.DailyForecasts.map((el)=> (
                        <p className="text2">{el.Date}</p>

                    ))
                    }
                    {forecast &&        forecast.DailyForecasts.map((el)=> (
                        <p  className="text2">Макс:  {el.Temperature.Maximum.Value}°C <br/>
                        Мин:  {el.Temperature.Minimum.Value}°C</p>
                    ))
                    }

{/* 
{}
                        <p>Weather: {weather[0] && (`Макс. температура: ${weather[0].}`)}</p>
                        <p>Weather: {weather2}</p>
                        <p>Weather: {weather3}</p>
                        <p>Weather: {weather4}</p>
                        <p>Weather: {weather5}</p> */} 
                </div>
                    <input placeholder="Введите название города" className="inp" onChange={handleChange} type="text" value={city}/>
                    <button className="btn">Поиск</button>
                    <button className="btn" onClick={handleNavigate}>Прогноз на данный момент</button>
                </form>
            </div>
        </div>
    )
}

export default ForecastPage