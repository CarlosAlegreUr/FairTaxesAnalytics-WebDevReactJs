import { useState } from "react"

export default function TaxationLevelsTable(props) {
    const [newRowData, setNewRowData] = useState({
        nOfPeople: 0,
        incomeRange: [0, 0],
        maxPerDes: 0,
    })

    //TODO: be able to select some rows and delete them
    const [selectedRows, setSelectedRows] = useState([0])

    function manageNewRowsInputs(event) {
        if (event.target.name != "incomeRange") {
            setNewRowData((prevInput) => {
                return { ...prevInput, [event.target.name]: event.target.value }
            })
        } else {
            const [lowNumber, maxNumber] = getValuesFromIncomeInput(
                event.target.value
            )
            if (lowNumber != null && maxNumber != null)
                setNewRowData((prevInput) => {
                    return { ...prevInput, incomeRange: [lowNumber, maxNumber] }
                })
        }
    }

    function addRow() {
        const newTaxationLevelData = {
            taxTableRows: props.rows,
            budget: props.budget,
        }
        if (checkValidInput(newRowData)) {
            const realPercentage = calculateRealPercentage(newTaxationLevelData)
            const newRow = (
                <tr key={props.rows.length + 1}>
                    <td> <input type="checkbox"></input> </td>
                    <td> {newRowData.nOfPeople} </td>
                    <td>
                        {" "}
                        {newRowData.incomeRange[0]} -{" "}
                        {newRowData.incomeRange[1]}{" "}
                    </td>
                    <td> {newRowData.maxPerDes} </td>
                    <td
                        style={{
                            color:
                                realPercentage > newRowData.maxPerDes
                                    ? "red"
                                    : "green",
                        }}
                    >
                        {" "}
                        {realPercentage}{" "}
                    </td>
                </tr>
            )
            props.setNewRow((prevTable) => [...prevTable, newRow])
        }
    }

    return (
        <div>
            <table className="table text-white" id="taxation-levels-table">
                <thead>
                    <th> </th>
                    <th> Nº People </th>
                    <th> Income Range</th>
                    <th> Max% desired </th>
                    <th> Real% effect [worst case / best case] </th>
                </thead>
                <tbody>{props.rows}</tbody>
            </table>
            {selectedRows.length > 0 && (
                <button className="btn btn-danger"> DELETE SELECTED </button>
            )}
            <br />
            <br />
            <div id="add-tx-lvl-input">
                Nº of people{" "}
                <input
                    onChange={manageNewRowsInputs}
                    type="number"
                    placeholder="natrual number"
                    name="nOfPeople"
                />{" "}
                <br />
                Income range{" "}
                <input
                    onChange={manageNewRowsInputs}
                    placeholder="lowest-max"
                    name="incomeRange"
                />{" "}
                <br />
                Max% desired{" "}
                <input
                    onChange={manageNewRowsInputs}
                    type="number"
                    placeholder="(0-100)%"
                    name="maxPerDes"
                />{" "}
                <br />
                <button onClick={addRow} className="btn btn-warning">
                    {" "}
                    ADD TAXATION LEVEL{" "}
                </button>
            </div>
        </div>
    )
}

//TODO: prohibit negative numbers in incomeRange
// make sure second number in incomeRange is bigger or equal
// than first one
function checkValidInput(newRowData) {
    if (
        newRowData.nOfPeople > 0 &&
        newRowData.maxPerDes >= 0 &&
        newRowData.maxPerDes <= 100 &&
        newRowData.incomeRange[0] >= 0
    ) {
        return true
    } else {
        alert("Invalid input in adding taxation level")
        return false
    }
}

//TODO
function calculateRealPercentage(newTaxationLevelData) {
    return 23
}

//TODO: make it works properly with all inputs using JS regular expresions
function getValuesFromIncomeInput(incomeInput) {
    if (incomeInput.length > 3) {
        const index = incomeInput.indexOf("-")
        const lowNumber = incomeInput.substr(0, index)
        const maxNumber = incomeInput.substr(index + 1, incomeInput.length - 1)
        return [lowNumber, maxNumber]
    } else {
        return [null, null]
    }
}
