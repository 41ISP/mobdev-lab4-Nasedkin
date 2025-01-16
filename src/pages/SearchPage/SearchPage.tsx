import { SetStateAction, useState } from "react"
import weatherRequest from "../../shared/api"
import "./SeacrhPage.css"

const SearchPage = () => {

    const [city, setCity] = useState('')
    const [icon, setIcon] = useState('')
    const [cords, setCords] = useState('')
    const [wType, setwType] = useState('')
    const [temp, setTemp] = useState<undefined|number>(undefined)
    const handleChange = (e: { target: { value: SetStateAction<string> } }) =>{
        setCity(e.target.value)
    }

    const handleClick = async () =>{
        const cityKey = (await weatherRequest.cityReq(city))[0].Key
        setTemp((await weatherRequest.weatherReq(cityKey))[0].Temperature.Value)
        const pic = (await weatherRequest.weatherReq(cityKey))[0].WeatherIcon.toString()
        setIcon("https://developer.accuweather.com/sites/default/files/"+pic.padStart(2,'0')+"-s.png")
        setCords((await weatherRequest.cityReq(city))[0].GeoPosition.Latitude.toString() + ", " + (await weatherRequest.cityReq(city))[0].GeoPosition.Longitude.toString())
        setwType((await weatherRequest.weatherReq(cityKey))[0].IconPhrase.toString().toUpperCase())
    }

    return (
        <div className="container">
            <img className="icon" src={icon} alt="тут будет иконка погоды"/>
            <p className="wtype">{wType}</p>
            <p className="temperatureText">Temperature: {temp} °C</p>
            <p>Coordinates: {cords}</p>
            <input className="inp" type="text" onChange={handleChange} value={city}/>
            <button className="btn" onClick={handleClick}>Click</button>
        </div>
    )
}

export default SearchPage