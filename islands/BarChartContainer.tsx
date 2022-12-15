import { useEffect, useRef } from "preact/hooks";

const ChartSample = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current;

      const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];

      // deno-lint-ignore ban-ts-comment
      // @ts-ignore
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: "Acquisitions by year",
              data: data.map((row) => row.count),
              borderWidth: 2,
              borderRadius: Number.MAX_VALUE,
              borderSkipped: false,
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
