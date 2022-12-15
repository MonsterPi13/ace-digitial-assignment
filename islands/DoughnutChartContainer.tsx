import { useEffect, useRef } from "preact/hooks";

const DoughnutChartContainer = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current;

      const CHART_COLORS = {
        red: "rgb(255, 99, 132)",
        orange: "rgb(255, 159, 64)",
        yellow: "rgb(255, 205, 86)",
        green: "rgb(75, 192, 192)",
        blue: "rgb(54, 162, 235)",
        purple: "rgb(153, 102, 255)",
        grey: "rgb(201, 203, 207)",
      };

      const data = {
        labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
        datasets: [
          {
            label: "Dataset 1",
            data: [1, 12, 33, 55, 66],
            backgroundColor: Object.values(CHART_COLORS),
          },
        ],
      };
      const config = {
        type: "doughnut",
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Chart.js Doughnut Chart",
            },
          },
        },
      };

      // deno-lint-ignore ban-ts-comment
      // @ts-ignore
      new Chart(ctx, config);
    }
  }, [chartRef]);

  return (
    <canvas ref={chartRef} class="mx-auto h-full">
    </canvas>
  );
};

export default DoughnutChartContainer;
