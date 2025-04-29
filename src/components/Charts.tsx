import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


interface BarChartProps {
    horizontal?: boolean,
    data_1: number[],
    data_2: number[],
    title_1: string,
    title_2: string,
    bgColor_1: string,
    bgColor_2: string,
    labels?: string[]
}

export const BarChart = ({
   horizontal = false,
   data_1 = [],
   data_2 = [],
   title_1,
   title_2,
   bgColor_1,
   bgColor_2,
   labels = [...months] } : BarChartProps ) => {
    const options:ChartOptions<"bar"> = {
        responsive: true,
        indexAxis: horizontal ? "y" : "x",
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
      };
            
    const data:ChartData<"bar", number[], string > = {
        labels,
        datasets: [
          {
            label: title_1,
            data: data_1,
            backgroundColor: bgColor_1,
            barPercentage:1,
            barThickness: "flex",
            categoryPercentage: 0.4
          },
          {
            label: title_2,
            data: data_2,
            backgroundColor: bgColor_2,
            barPercentage:1,
            barThickness: "flex",
            categoryPercentage: 0.4
          },
        ],
      };
  return <Bar options={options} data={data} />;
}


interface DoughnutChartProps{
  labels: string[];
  data: number[];
  backgroundColor:string[];
  cutout?: number | string;
  legends?: boolean ;
  offset?: number[] ;

}

export const DoughnutChart = ({
  labels,
  data,
  backgroundColor,
  cutout,
  legends = true,
  offset
} : DoughnutChartProps) => {

  const doughnutChartData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        offset,
      }
    ]
  }

  const doughnutChartOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "bottom",
        labels: {
          padding: 40,
        },
      },
    },
    cutout
  }

  return <Doughnut data={doughnutChartData} options={doughnutChartOptions} />

}