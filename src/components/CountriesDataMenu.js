import { useEffect, useState } from "react"

export default function CountriesDataMenu(props) {
    const [selectedCountry, setSelectedCountry] = useState("none")
    const [wannaAnalyze, setWannaAnalyze] = useState(false)

    useEffect(() => {
        const countryData = getData(selectedCountry)
        //TODO:
        // Update taxLvlTableRows with the data
    }, [wannaAnalyze])

    return (
        <div id="countries-data-div">
            Select Real data:
            <select
                onChange={(event) => {
                    setSelectedCountry(event.target.value)
                }}
                className="form-select"
                id="countries-data-menu"
            >
                <option value="none"> -- Select country -- </option>
                <option value="Spain"> Spain </option>
                <option value="Switzerland"> Switzerland </option>
            </select>
            <button
                onClick={() => {
                    setWannaAnalyze((prevState) => !prevState)
                }}
                className="btn btn-danger"
                id="analyze-country-button"
            >
                Analyzie Selected Country
            </button>
        </div>
    )
}

//TODO: Should be an API call that returns the needed data from an official database owned by the
// selected country
function getData(country) {
    if(country != "none")
        alert("Fetching data from " + country + "'s official goverment's site is not implemented yet.")
    return null
}
