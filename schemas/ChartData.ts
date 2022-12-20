import Prisma from "@/generated/client/deno/index.d.ts";

export interface BarChartData {
  region: Prisma.Region_type;
  prize: number;
}

export interface LineChartData {
  region: Prisma.Region_type;
  participatingTeamCount: number;
}

export interface DoughnutChartData {
  region: Prisma.Region_type;
  numberOfTopEightTeams: number;
}
