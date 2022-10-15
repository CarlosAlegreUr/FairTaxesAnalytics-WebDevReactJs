

export default function CountriesDataMenu() {
    return(
        <div id="countries-data-div">
            Select Real data:
            <select class="form-select" id="countries-data-menu">
                <option> Spain </option>
                <option> Switzerland </option>
                <option> Other </option>
            </select>
            <button class="btn btn-danger" id="analyze-country-button"> Analyzie Selected Country </button>
        </div>
    )
}
