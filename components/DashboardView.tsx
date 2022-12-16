import { Head } from "$fresh/runtime.ts";
import { FunctionalComponent } from "preact";
import BarChartContainer from "@/islands/BarChartContainer.tsx";
import LineChartContainer from "@/islands/LineChartContainer.tsx";
import PieChartContainer from "@/islands/PieChartContainer.tsx";
import DoughnutChartContainer from "@/islands/DoughnutChartContainer.tsx";

const DashboardView: FunctionalComponent = () => {
  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </Head>
      <section class="grid grid-cols-3 grid-rows-2 gap-4 h-full p-8">
        <div class="bg-[#FAF7F0] p-8">
          <BarChartContainer />
        </div>
        <div class="bg-[#FAF7F0] p-8">
          <LineChartContainer />
        </div>
        <div class="bg-[#FAF7F0] p-8">
          <DoughnutChartContainer />
        </div>
        <div class="col-span-3 bg-[#FAF7F0]">
        </div>
      </section>
    </>
  );
};

export default DashboardView;
