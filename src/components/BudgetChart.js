import Chart from "chart.js/auto"
import { Line } from "react-chartjs-2"

export default function BudgetChart(props) {
    const data = {
        labels: ["2020", "2021", "2022", "2023", "2024", "2025", "2026"],
        datasets: [
            {
                label: "Budget Evolution",
                data: [150, 59, 80, 81, -56, 55, 40],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
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
