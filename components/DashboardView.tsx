import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

import { FunctionalComponent } from "preact";
import BarChartContainer from "@/islands/BarChartContainer.tsx";
import LineChartContainer from "@/islands/LineChartContainer.tsx";
import DoughnutChartContainer from "@/islands/DoughnutChartContainer.tsx";
import TableContainer from "@/islands/TableContainer.tsx";

import Prisma from "@/generated/client/deno/index.d.ts";
type DashboardProps = {
  prizeData: Prisma.PrizePool[];
};

const DashboardView: FunctionalComponent<DashboardProps> = ({ prizeData }) => {
  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </Head>
      <section class="grid grid-cols-3 grid-rows-2 gap-4 h-full p-8">
        <div class="bg-[#FAF7F0] p-8">
          <BarChartContainer prizeData={prizeData} />
        </div>
        <div class="bg-[#FAF7F0] p-8">
          <LineChartContainer prizeData={prizeData} />
        </div>
        <div class="bg-[#FAF7F0] p-8">
          <DoughnutChartContainer prizeData={prizeData} />
        </div>
        <div class="col-span-3 bg-[#FAF7F0] p-8">
          <TableContainer prizeData={prizeData} />
        </div>
      </section>
    </>
  );
};

export default DashboardView;
