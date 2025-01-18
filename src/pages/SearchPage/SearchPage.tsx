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
                        <img className="iconBig" src={icon} alt="Погода"/>
                        <p className="textBig">{wType}</p>
                    <div className="weatherIcons">
                        <img className="icon" src="https://static.tildacdn.com/tild3863-6237-4836-b635-323930613138/noun_1065028.png" alt="Температура" />
                        <img className="icon"src="https://cdn4.iconfinder.com/data/icons/weather-meteorology-1/32/weather-wind-1024.png" alt="Ветер" />
                        <img className="icon" src="https://fcar-rus.ru/wa-data/public/shop/catimg2/10/image/chestirenka_4.png" alt="Давление" />
                        <p className="text">Температура: {temp} °C</p>
                        <p className="text">Ветер: {wind} км/ч</p>
                        <p className="text">Давление: {pressure} мм рт.ст.</p>
                    </div>
                    <input placeholder="Введите название города" className="inp" type="text" onChange={handleChange} value={city}/>
                    <button className="btn">Поиск</button>
                </form>
            </div>
        </div>
    )
}

export default SearchPage