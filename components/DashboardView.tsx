import { Head } from "$fresh/runtime.ts";

import { FunctionalComponent } from "preact";

import { pageTitle } from "@/signals/index.ts";
import BarChartContainer from "@/islands/BarChartContainer.tsx";
import LineChartContainer from "@/islands/LineChartContainer.tsx";
import DoughnutChartContainer from "@/islands/DoughnutChartContainer.tsx";
import TableContainer from "@/islands/TableContainer.tsx";

import Prisma from "@/generated/client/deno/index.d.ts";
type DashboardProps = {
  prizeData: Prisma.PrizePool[];
};

const DashboardView: FunctionalComponent<DashboardProps> = ({ prizeData }) => {
  const edition = prizeData[0].annualEdition;
  const imgSrc = `/images/ti/${edition.toLowerCase()}.jpeg`;
  pageTitle.value = "Ti Overview Dashboard";
  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </Head>
      <section class="grid grid-cols-3 grid-rows-2 gap-4 h-full p-8">
        <div class="flex items-center bg-[#FAF7F0] p-8">
          <BarChartContainer prizeData={prizeData} />
        </div>
        <div class="flex items-center bg-[#FAF7F0] p-8">
          <LineChartContainer prizeData={prizeData} />
        </div>
        <div class="flex items-center bg-[#FAF7F0] p-8">
          <DoughnutChartContainer prizeData={prizeData} />
        </div>
        <div class="grid items-center grid-cols-3 grid-rows-1 gap-4 items-center col-span-3 bg-[#FAF7F0]">
          <div class="w-full py-8 pl-8">
            <img src={imgSrc}></img>
          </div>
          <div class="col-span-2 h-full py-8 pr-8">
            <TableContainer prizeData={prizeData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardView;
