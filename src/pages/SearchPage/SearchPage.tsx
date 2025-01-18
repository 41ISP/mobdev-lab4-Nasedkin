import { SetStateAction, useState } from "react"
import weatherRequest from "../../shared/api"
import "./SeacrhPage.css"

const SearchPage = () => {

    const [city, setCity] = useState('')
    const [icon, setIcon] = useState('')
    const [wind, setWind] = useState('')
    const [wType, setwType] = useState('')
    const [pressure, setPressure] = useState('')
    const [temp, setTemp] = useState<undefined|number>(undefined)
    const handleChange = (e: { target: { value: SetStateAction<string> } }) =>{
        setCity(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        const cityRes = (await weatherRequest.cityReq(city))

        if (cityRes.length < 1) return

        const cityKey = cityRes[0].Key
        const weatherRes = (await weatherRequest.weatherReq(cityKey))

        setTemp(weatherRes[0].Temperature.Metric.Value)
        
        const pic = weatherRes[0].WeatherIcon.toString()
        setIcon("https://developer.accuweather.com/sites/default/files/"+pic.padStart(2,'0')+"-s.png")
        
        setWind(weatherRes[0].Wind.Speed.Metric.Value.toString())
        
        setwType(weatherRes[0].WeatherText.toString().toUpperCase())

        setPressure(weatherRes[0].Pressure.Metric.Value.toString())
    }

    return (
        <div className="container">
            <div className="cntr">
                <form className="form" onSubmit={handleSubmit} action="">
                    <img className="icon" src={icon} alt="тут будет иконка погоды"/>
                    <p className="wtype">{wType}</p>
                    <p className="temperatureText">Температура: {temp} °C</p>
                    <p className="wind">Ветер: {wind} км/ч</p>
                    <p className="pressure">Давление: {pressure} мм рт.ст.</p>
                    <input placeholder="Введите название города" className="inp" type="text" onChange={handleChange} value={city}/>
                    <button className="btn">Поиск</button>
                </form>
            </div>
        </div>
    )
}

export default SearchPage