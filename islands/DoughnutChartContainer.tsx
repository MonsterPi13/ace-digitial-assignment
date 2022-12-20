import { useEffect, useRef } from "preact/hooks";

import Prisma from "@/generated/client/deno/index.d.ts";
import { PropsWithPrize } from "@/schemas/PageProps.ts";
import { DoughnutChartData } from "@/schemas/ChartData.ts";

const DoughnutChartContainer = ({ prizeData }: PropsWithPrize) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current;

      const chartDataObject = {
        "WEU": 0,
        "EEU": 0,
        "CN": 0,
        "SEA": 0,
        "NA": 0,
        "SA": 0,
      };

      if (prizeData) {
        prizeData.forEach((row) => {
          if (row.place <= 8) {
            chartDataObject[row.region]++;
          }
        });
      }

      const chartData: DoughnutChartData[] = [];

      for (const [key, value] of Object.entries(chartDataObject)) {
        const option = {
          region: key as Prisma.Region_type,
          numberOfTopEightTeams: value,
        };
        chartData.push(option);
      }

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
        labels: chartData.map((row) => row.region),
        datasets: [
          {
            label: "Number of top eight teams",
            data: chartData.map((row) => row.numberOfTopEightTeams),
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
              text: "Number of top eight teams",
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
