import { useEffect, useRef } from "preact/hooks";

import Prisma from "@/generated/client/deno/index.d.ts";
import { PropsWithPrize } from "@/schemas/PropsWithPrize.ts";
import { BarChartData } from "@/schemas/PropsWithCharData.ts";

const ChartSample = ({ prizeData }: PropsWithPrize) => {
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
      chartDataObject[prize.region] += prize.prize;
    });
  }

  const chartData: BarChartData[] = [];

  for (const [key, value] of Object.entries(chartDataObject)) {
    const option = {
      region: key as Prisma.Region_type,
      prize: value,
    };
    chartData.push(option);
  }

  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current;

      // deno-lint-ignore ban-ts-comment
      // @ts-ignore
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: chartData.map((row) => row.region),
          datasets: [
            {
              label: "Total bonus by region",
              data: chartData.map((row) => row.prize),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
              ],
              borderWidth: 1,
            },
          ],
        },
      });
    }
  }, [chartRef]);

  return (
    <canvas ref={chartRef}>
    </canvas>
  );
};

export default ChartSample;
