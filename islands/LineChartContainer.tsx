import { useEffect, useRef } from "preact/hooks";

import Prisma from "@/generated/client/deno/index.d.ts";
import { PropsWithPrize } from "@/schemas/PropsWithPrize.ts";
import { LineChartData } from "@/schemas/PropsWithCharData.ts";

const LineChartContainer = ({ prizeData }: PropsWithPrize) => {
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
        prizeData.forEach((prize) => {
          chartDataObject[prize.region] += 1;
        });
      }

      const chartData: LineChartData[] = [];

      for (const [key, value] of Object.entries(chartDataObject)) {
        const option = {
          region: key as Prisma.Region_type,
          participatingTeamCount: value,
        };
        chartData.push(option);
      }

      const data = {
        labels: chartData.map((row) => row.region),
        datasets: [
          {
            label: "Number of participating teams",
            data: chartData.map((row) => row.participatingTeamCount),
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
