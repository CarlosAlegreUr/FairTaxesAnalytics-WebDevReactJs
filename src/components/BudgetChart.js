import Chart from "chart.js/auto"
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
    fillData(data, props.taxTableRows)
    return (
        <section id="chart-section">
            <header> Budget Evolution Chart </header>
            <Line data={data} />
        </section>
    )
}

function fillData(data, taxTableRows) {
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
