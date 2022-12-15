import { useEffect, useRef } from "preact/hooks";

const PieChartContainer = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current;

      const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor: [
            "#CB4335",
            "#1F618D",
            "#F1C40F",
            "#27AE60",
            "#884EA0",
            "#D35400",
          ],
        }],
      };

      const config = {
        type: "pie",
        data: data,
        options: {
          plugins: {
            legend: {
              onLeave: (
                evt: any,
                item: any,
                legend: {
                  chart: {
                    data: {
                      datasets: { backgroundColor: (string | any[])[] }[];
                    };
                    update: () => void;
                  };
                },
              ) => {
                legend.chart.data.datasets[0].backgroundColor.forEach(
                  (
                    color: string | any[],
                    index: string | number,
                    colors: { [x: string]: any },
                  ) => {
                    colors[index] = color.length === 9
                      ? color.slice(0, -2)
                      : color;
                  },
                );
                legend.chart.update();
              },
              onHover: (
                evt: any,
                item: { index: any },
                legend: {
                  chart: {
                    data: { datasets: { backgroundColor: any[] }[] };
                    update: () => void;
                  };
                },
              ) => {
                legend.chart.data.datasets[0].backgroundColor.forEach(
                  (color, index, colors) => {
                    colors[index] = index === item.index || color.length === 9
                      ? color
                      : color + "4D";
                  },
                );
                legend.chart.update();
              },
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

export default PieChartContainer;
