import { useNavigate } from "react-router-dom"
import "./ForecastPage.css"
import weatherRequest from "../../shared/api"
import { SetStateAction, useState } from "react"
import { IForecast } from "../../entities/forecast"
import { nanoid } from "nanoid"

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

    }


    return(
    <div className="container2">
        <div className="cntr2">
            <form action="" className="form" onSubmit={handleSubmit}> 
                <div className="weatherInfo">
                    {forecast &&        forecast.DailyForecasts.map((el)=> (
                        <div key={nanoid()}>
                            <img className="icon" src={"https://developer.accuweather.com/sites/default/files/"+el.Day.Icon.toString().padStart(2,'0')+"-s.png"} alt="Иконка погоды" />
                            <p className="text2">{el.Date.substring(5, 10).replace('-', '.')}</p>
                            <p className="text2">{el.Day.IconPhrase}</p>
                        </div>

                    ))
                    }
                    {forecast &&        forecast.DailyForecasts.map((el)=> (
                        <p  className="text2" key={nanoid()}>Макс:  {el.Temperature.Maximum.Value} °C <br/>
                            Мин:  {el.Temperature.Minimum.Value} °C</p>
                    ))
                    }
                </div>
                    <p >{forecast?.Headline.Text}</p>
                    <input placeholder="Введите название города" className="inp" onChange={handleChange} type="text" value={city}/>
                    <button className="btn">Поиск</button>
                    <button className="btn" onClick={handleNavigate}>Прогноз на данный момент</button>
                </form>
            </div>
        </div>
    )
}

export default ForecastPage