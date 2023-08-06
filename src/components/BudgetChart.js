import Chart from "chart.js/auto"
import { useEffect } from "react"
import { Line } from "react-chartjs-2"

export default function BudgetChart(props) {
    const yearLabels = createYearLabels("2020", props.yearsToShow)
    const budgetData = Array(yearLabels.length).fill(0)
    const data = {
        labels: yearLabels,
        datasets: [
            {
                label: "Budget Evolution",
                data: [props.initialBudget, ...budgetData],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.15,
            },
        ],
    }
    fillData(data, props.taxLvlRows)
    useEffect(() => {
        console.log("Budget chart rendered")
    })
    return (
        <section id="chart-section">
            <header> Budget Evolution Chart </header>
            <Line data={data} />
        </section>
    )
}

function fillData(data, taxTableRows) {
    const nOfPeople = []
    const incomeLvl = []
    const maxDes = []
    taxTableRows.map((col) => {
        nOfPeople.push(col.props.children[1].props.children)
        incomeLvl.push(col.props.children[2].props.children)
        maxDes.push(col.props.children[3].props.children)
    })
    console.log("updating data (BudgetChart.js)")
}

function createYearLabels(startingYear, yearsToShow) {
    const start = parseInt(startingYear)
    let i = 0
    const yValues = []
    while (i < yearsToShow) {
        yValues.push((start + i).toString())
        i++
    }
    return yValues
}
