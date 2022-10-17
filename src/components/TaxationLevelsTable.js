import { useState } from "react"

export default function TaxationLevelsTable() {
    const [rows, setRows] = useState([])
    function addRow(newTaxationLevelData) {
        if (checkValidInput(newTaxationLevelData)) {
            const newRow = (
                <tr key={rows.length + 1}>
                    <td> 3000 </td>
                    <td> [200 - 1000] </td>
                    <td> 10 </td>
                    <td> X </td>
                </tr>
            )
            setRows((prevTable) => [...prevTable, newRow])
        }
    }

    return (
        <div>
            <table className="table text-white" id="taxation-levels-table">
                <tr>
                    <th> Nº People </th>
                    <th> Income Range</th>
                    <th> Max% desired </th>
                    <th> Real% effect </th>
                </tr>
                {rows}
            </table>
            <br />
            <br />
            <div id="add-tx-lvl-input">
                Nº of people <input placeholder="natrual number" /> <br />
                Income range <input placeholder="[number-number]" /> <br />
                Max% desired <input placeholder="(0-100)%" /> <br />
                <button onClick={addRow} className="btn btn-warning">
                    {" "}
                    ADD TAXATION LEVEL{" "}
                </button>
            </div>
        </div>
    )
}

function checkValidInput(newTaxationLevelData) {
    if (true) {
        return true
    } else {
        alert("Invalid input for taxation level")
        return false
    }
}
