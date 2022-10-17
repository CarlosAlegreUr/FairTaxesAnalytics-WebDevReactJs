async function analyzeCountryData(country) {
    alert(
        "ANALYZING DATA FROM " +
            country +
            " PLEASE CLOSE THIS ALERT, THIS FUNCTION IS NOT IMPLEMENTED YET"
    )
}

export default function CountriesDataMenu() {
    return (
        <div id="countries-data-div">
            Select Real data:
            <select className="form-select" id="countries-data-menu">
                <option> Spain </option>
                <option> Switzerland </option>
                <option> Other </option>
            </select>
            <button
                onClick={analyzeCountryData}
                className="btn btn-danger"
                id="analyze-country-button"
            >
                Analyzie Selected Country
            </button>
        </div>
    )
}
