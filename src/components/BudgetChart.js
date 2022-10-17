import Chart from "chart.js/auto"
import { Line } from "react-chartjs-2"

const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
        {
            label: "Budget Evolution",
            data: [150, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
        },
    ],
}

export default function BudgetChart() {
    return (
        <section id="chart-section">
            <header> Debt Evolution Chart </header>
            <Line data={data} />
        </section>
    )
}
