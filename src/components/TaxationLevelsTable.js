export default function TaxationLevelsTable(props) {
    function addRow() {
        const newTaxationLevelData = {
            taxTableRows: props.rows,
            budget: props.newBudget,
        }
        if (checkValidInput(newTaxationLevelData)) {
            calculateRealPercentage(newTaxationLevelData)
            updatePercentagesColors(newTaxationLevelData)
            const newRow = (
                <tr key={props.rows.length + 1}>
                    <td> 3000 </td>
                    <td> [200 - 1000] </td>
                    <td> 10 </td>
                    <td style={{ color: "red" }}> X </td>
                </tr>
            )
            props.setNewRow((prevTable) => [...prevTable, newRow])
        }
    }

    return (
        <div>
            <table className="table text-white" id="taxation-levels-table">
                <thead>
                    <th> Nº People </th>
                    <th> Income Range</th>
                    <th> Max% desired </th>
                    <th> Real% effect [worst case / best case] </th>
                </thead>
                <tbody>{props.rows}</tbody>
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

function calculateRealPercentage(taxLvlTableRows) {
    return true
}

function updatePercentagesColors() {}
