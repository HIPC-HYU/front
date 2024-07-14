import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);
const data = {
    labels: ["목표", "남은 문제"],
    datasets: [
        {
            data: [
                400,
                100,
            ],
            backgroundColor: ["rgba(96, 165, 250, 1)", "rgba(192, 192, 192, 0.6)"],
            borderColor: ["rgba(96, 165, 250, 1)", "rgba(192, 192, 192, 0.6)"],
            borderWidth: 1,
        },
    ],
};

const options = {
    cutout: "60%",
    plugins: {
        legend: {
            display: false,
        },
        datalabels: {
            display: false,
        },
    },
};
export default function DoughnutChart() {
    return (<Doughnut data={data} options={options}></Doughnut>
    )
}