import { useEffect, useRef } from "preact/hooks";

const LineChartContainer = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current;

      const data = {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
        datasets: [
          {
            label: "Dataset",
            data: [-11, 12, 23, 34, 45, 66],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            pointStyle: "circle",
            pointRadius: 10,
            pointHoverRadius: 15,
          },
        ],
      };

      const config = {
        type: "line",
        data: data,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: (
                text: {
                  chart: { data: { datasets: { pointStyle: string }[] } };
                },
              ) => "Point Style: " + text.chart.data.datasets[0].pointStyle,
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
    <canvas ref={chartRef}>
    </canvas>
  );
};

export default LineChartContainer;
