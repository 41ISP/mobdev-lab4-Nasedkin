import { SetStateAction, useState } from "react"
import weatherRequest from "../../shared/api"
import "./SeacrhPage.css"

const SearchPage = () => {

    const [city, setCity] = useState('')
    const [temp, setTemp] = useState<undefined|number>(undefined)
    const handleChange = (e: { target: { value: SetStateAction<string> } }) =>{
        setCity(e.target.value)
    }

    const handleClick = async () =>{
        const cityKey = (await weatherRequest.cityReq(city))[0].Key
        setTemp((await weatherRequest.weatherReq(cityKey))[0].Temperature.Value)
    }

    return (
        <div className="container">
            <p className="temperatureText">Temperature: {temp} °C</p>
            <input className="inp" type="text" onChange={handleChange} value={city}/>
            <button className="btn" onClick={handleClick}>Click</button>
        </div>
    )
}

export default SearchPage