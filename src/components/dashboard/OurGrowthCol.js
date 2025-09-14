import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { OurGrowth, Profit } from "../../constant";
import { useRef, useEffect, useState } from "react";
import { lineChartOptions } from "./chartsData/chartJs";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "aug", "sup"];
export const data = {
  labels,
  datasets: [
    {
      data: [28, 45, 28, 55, 40, 60, 50, 80, 60],
    },
  ],
};

function createGradient(ctx) {
  const gradient = ctx.createLinearGradient(0, 0, 150, 0);

  gradient.addColorStop(0, "rgb(255, 246, 243)");
  gradient.addColorStop(0.5, "rgb(255, 230, 220)");
  gradient.addColorStop(1, "rgb(255, 84, 24)");
  return gradient;
}

const OurGrowthCol = () => {
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
        fill: false,
        borderWidth: 4,
        pointRadius: 6,
        lineTension: 0.4,
        pointBorderWidth: 2,
        pointBorderColor: "rgb(255, 84, 24) ",
        pointBackgroundColor: "#fff",
        scaleShowLabels: false,
        pointHoverRadius: "6",
        pointHoverBorderWidth: "3",
        borderColor: createGradient(chart.ctx),
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <Col xl="7" className="xl-100 box-col-12">
      <Card className="sales-overview">
        <CardHeader className="card-header">
          <h5>{OurGrowth}</h5>
        </CardHeader>
        <CardBody className="chart-block">
          <div className="chartjs-size-monitor">
            <Chart
              ref={chartRef}
              type="line"
              data={chartData}
              options={lineChartOptions}
              height={60}
            />
          </div>
          <div className="chart-value-box pull-right">
            <div className="value-square-box-warning"></div>
            <span>{Profit}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OurGrowthCol;
