import { CardBody } from "reactstrap";
import { TotalIncome } from "../../constant";
import { crmlineChartDataOption } from "./chartsData/chartJs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useEffect, useRef, useState } from "react";

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Tooltip,Legend);

const labels = ["", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];
export const data = {
  labels,
  datasets: [
    {
      pointBorderWidth: 3,
      pointRadius: 6,
      data: [5, 0, 15, 0, 5, 0, 10, 0],
      fillColor: "transparent",
      pointHighlightFill: "#fff",
      pointColor: "#fff",
    },
  ],
};

function createGradient(ctx) {
  const gradient = ctx.createLinearGradient(0, 0, 500, 0);

  gradient.addColorStop(0, "rgb(85, 77, 255)");
  gradient.addColorStop(0.3, "rgb(82, 86, 255)");
  gradient.addColorStop(0.4, "rgb(80, 102, 255)");
  gradient.addColorStop(0.5, "rgb(79, 113, 255)");
  gradient.addColorStop(0.7, "rgb(78, 114, 255)");
  gradient.addColorStop(0.8, "rgb(75, 130, 255)");
  gradient.addColorStop(0.9, "rgb(71, 154, 255)");
  gradient.addColorStop(1, "rgb(64, 200, 255)");

  return gradient;
}

const ProjectIncomeChartBody = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({ datasets: [] });

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        borderColor: createGradient(chart.ctx),
        pointBorderColor: createGradient(chart.ctx),
        pointBackgroundColor: "#fff",
  
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <CardBody className="crm-dashboard-chart">
      <div className="crm-top-chart">
        <h1 className="font-info mb-0 counter">{"32"}</h1>
        <span>{TotalIncome}</span>
        <span className="d-block f-12">
          <span className="d-inline-block up-icon-middle">
            <i className="fa fa-sort-up me-1 font-info"> </i>
          </span>
          {"100%"}
        </span>
      </div>
      <Chart
        ref={chartRef}
        type="line"
        data={chartData}
        options={crmlineChartDataOption}
        height={100}
      />
    </CardBody>
  );
};

export default ProjectIncomeChartBody;
