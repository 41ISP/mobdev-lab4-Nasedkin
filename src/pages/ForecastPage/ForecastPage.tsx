import { useNavigate } from "react-router-dom"
import "./ForecastPage.css"
import weatherRequest from "../../shared/api"
import { SetStateAction, useState } from "react"

const ForecastPage = () => {

    const [city, setCity] = useState('')
    const [day1, setDay1] = useState('')
    const [day2, setDay2] = useState('')
    const [day3, setDay3] = useState('')
    const [day4, setDay4] = useState('')
    const [day5, setDay5] = useState('')
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
        const forecastRes = (await weatherRequest.forecastReq(cityKey))
        
        setDay1(forecastRes.)
    }


    return(
    <div className="container2">
        <div className="cntr2">
            <form action="" className="form" onSubmit={handleSubmit}> 
                <div className="weatherInfo">
                        <p>{day1}</p>
                        <p>{day2}</p>
                        <p>{day3}</p>
                        <p>{day4}</p>
                        <p>{day5}</p>

                        <p>Weather:</p>
                        <p>Weather:</p>
                        <p>Weather:</p>
                        <p>Weather:</p>
                        <p>Weather:</p>
                </div>
                    <input className="inp" onChange={handleChange} type="text" value={city}/>
                    <button className="btn">Поиск</button>
                    <button className="btn" onClick={handleNavigate}>Прогноз на данный момент</button>
                </form>
            </div>
        </div>
    )
}

export default ForecastPage