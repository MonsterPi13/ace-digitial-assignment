import { Prisma } from "@/generated/client/deno/index.d.ts";

type InitialPrizeData = Omit<
  Prisma.PrizePoolCreateInput,
  "date" | "annualEdition"
>;

const ti11PrizeData: InitialPrizeData[] = [
  {
    participant: "Tundra Esports",
    place: 1,
    region: "WEU",
    prize: 8518822,
  },
  {
    participant: "Team Secret",
    place: 2,
    region: "WEU",
    prize: 2461033,
  },
  {
    participant: "Team Liquid",
    place: 3,
    region: "WEU",
    prize: 1703810,
  },
  {
    participant: "Team Aster",
    place: 4,
    region: "CN",
    prize: 1135835,
  },
  {
    participant: "PSG.LGD",
    place: 5,
    region: "CN",
    prize: 662543,
  },
  {
    participant: "Thunder Awaken",
    place: 6,
    region: "SA",
    prize: 662543,
  },
  {
    participant: "beastcoast",
    place: 7,
    region: "SA",
    prize: 473293,
  },
  {
    participant: "OG",
    place: 8,
    region: "WEU",
    prize: 473293,
  },
  {
    participant: "Evil Geniuses",
    place: 9,
    region: "NA",
    prize: 378612,
  },
  {
    participant: "BOOM Esports",
    place: 10,
    region: "SEA",
    prize: 378612,
  },
  {
    participant: "Gaimin Gladiators",
    place: 11,
    region: "CN",
    prize: 378612,
  },
  {
    participant: "Entity",
    place: 12,
    region: "WEU",
    prize: 378612,
  },
  {
    participant: "Hokori",
    place: 13,
    region: "SA",
    prize: 283931,
  },
  {
    participant: "Team Spirit",
    place: 14,
    region: "EEU",
    prize: 283931,
  },
  {
    participant: "Fnatic",
    place: 15,
    region: "SEA",
    prize: 283931,
  },
  {
    participant: "Royal Never Give Up",
    place: 16,
    region: "SEA",
    prize: 283931,
  },
  {
    participant: "Soniqs",
    place: 17,
    region: "NA",
    prize: 47228,
  },
  {
    participant: "Talon Esports",
    place: 18,
    region: "SEA",
    prize: 47228,
  },
  {
    participant: "BetBoom Team",
    place: 19,
    region: "EEU",
    prize: 47228,
  },
  {
    participant: "TSM",
    place: 20,
    region: "WEU",
    prize: 47228,
  },
];
const ti10PrizeData: InitialPrizeData[] = [
  {
    participant: "Team Spirit",
    place: 1,
    region: "EEU",
    prize: 18208300,
  },
  {
    participant: "PSG.LGD",
    place: 2,
    region: "CN",
    prize: 5202400,
  },
  {
    participant: "Team Secret",
    place: 3,
    region: "WEU",
    prize: 3601600,
  },
  {
    participant: "Invictus Gaming",
    place: 4,
    region: "CN",
    prize: 2401100,
  },
  {
    participant: "Virtus.pro",
    place: 5,
    region: "EEU",
    prize: 1400600,
  },
  {
    participant: "Vici Gaming",
    place: 6,
    region: "CN",
    prize: 1400600,
  },
  {
    participant: "OG",
    place: 7,
    region: "WEU",
    prize: 1000500,
  },
  {
    participant: "T1",
    place: 8,
    region: "SEA",
    prize: 1000500,
  },
  {
    participant: "Fnatic",
    place: 9,
    region: "SEA",
    prize: 800400,
  },
  {
    participant: "Quincy Crew",
    place: 10,
    region: "NA",
    prize: 800400,
  },
  {
    participant: "Alliance",
    place: 11,
    region: "WEU",
    prize: 800400,
  },
  {
    participant: "Evil Geniuses",
    place: 12,
    region: "NA",
    prize: 800400,
  },
  {
    participant: "Team Undying",
    place: 13,
    region: "NA",
    prize: 600300,
  },
  {
    participant: "Team Aster",
    place: 14,
    region: "CN",
    prize: 600300,
  },
  {
    participant: "beastcoast",
    place: 15,
    region: "SA",
    prize: 600300,
  },
  {
    participant: "Elephant",
    place: 16,
    region: "CN",
    prize: 600300,
  },
  {
    participant: "Thunder Predator",
    place: 17,
    region: "SA",
    prize: 100000,
  },
  {
    participant: "SG esports",
    place: 18,
    region: "SA",
    prize: 100000,
  },
];
const ti9PrizeData: InitialPrizeData[] = [
  {
    participant: "OG",
    place: 1,
    region: "EEU",
    prize: 15620181,
  },
  {
    participant: "Team Liquid",
    place: 2,
    region: "EEU",
    prize: 4462908,
  },
  {
    participant: "PSG.LGD",
    place: 3,
    region: "CN",
    prize: 3089706,
  },
  {
    participant: "Team Secret",
    place: 4,
    region: "WEU",
    prize: 2059804,
  },
  {
    participant: "Evil Geniuses",
    place: 5,
    region: "NA",
    prize: 1201552,
  },
  {
    participant: "Vici Gaming",
    place: 6,
    region: "CN",
    prize: 1201552,
  },
  {
    participant: "Royal Never Give Up",
    place: 7,
    region: "CN",
    prize: 858252,
  },
  {
    participant: "Infamous",
    place: 8,
    region: "SA",
    prize: 858252,
  },
  {
    participant: "Virtus.pro",
    place: 9,
    region: "EEU",
    prize: 686602,
  },
  {
    participant: "TNC Predator",
    place: 10,
    region: "SEA",
    prize: 686602,
  },
  {
    participant: "Newbee",
    place: 11,
    region: "CN",
    prize: 686602,
  },
  {
    participant: "Mineski",
    place: 12,
    region: "SEA",
    prize: 686602,
  },
  {
    participant: "Alliance",
    place: 13,
    region: "EEU",
    prize: 514951,
  },
  {
    participant: "Fnatic",
    place: 14,
    region: "SEA",
    prize: 514951,
  },
  {
    participant: "Keen Gaming",
    place: 15,
    region: "CN",
    prize: 514951,
  },
  {
    participant: "Natus Vincere",
    place: 16,
    region: "EEU",
    prize: 514951,
  },
  {
    participant: "Chaos Esports Club",
    place: 17,
    region: "NA",
    prize: 85825,
  },
  {
    participant: "Ninjas in Pyjamas",
    place: 18,
    region: "EEU",
    prize: 85825,
  },
];
const ti8PrizeData: InitialPrizeData[] = [
  {
    participant: "OG",
    place: 1,
    region: "EEU",
    prize: 11234158,
  },
  {
    participant: "PSG.LGD",
    place: 2,
    region: "CN",
    prize: 4085148,
  },
  {
    participant: "Evil Geniuses",
    place: 3,
    region: "NA",
    prize: 2680879,
  },
  {
    participant: "Team Liquid",
    place: 4,
    region: "EEU",
    prize: 1787252,
  },
  {
    participant: "Virtus.pro",
    place: 5,
    region: "EEU",
    prize: 1148948,
  },
  {
    participant: "Team Secret",
    place: 6,
    region: "WEU",
    prize: 1148948,
  },
  {
    participant: "OpTic Gaming",
    place: 7,
    region: "NA",
    prize: 638333,
  },
  {
    participant: "VGJ.Storm",
    place: 8,
    region: "NA",
    prize: 638333,
  },
  {
    participant: "Team Serenity",
    place: 9,
    region: "CN",
    prize: 382983,
  },
  {
    participant: "Mineski",
    place: 10,
    region: "SEA",
    prize: 382983,
  },
  {
    participant: "Winstrike Team",
    place: 11,
    region: "EEU",
    prize: 382983,
  },
  {
    participant: "Vici Gaming",
    place: 12,
    region: "CN",
    prize: 382983,
  },
  {
    participant: "Fnatic",
    place: 13,
    region: "SEA",
    prize: 127661,
  },
  {
    participant: "TNC Predator",
    place: 14,
    region: "SEA",
    prize: 127661,
  },
  {
    participant: "Newbee",
    place: 15,
    region: "CN",
    prize: 127661,
  },
  {
    participant: "VGJ.Thunder",
    place: 16,
    region: "CN",
    prize: 127661,
  },
  {
    participant: "Invictus Gaming",
    place: 17,
    region: "CN",
    prize: 63830,
  },
  {
    participant: "paiN Gaming",
    place: 18,
    region: "SA",
    prize: 63830,
  },
];
const ti7PrizeData: InitialPrizeData[] = [
  {
    participant: "Team Liquid",
    place: 1,
    region: "EEU",
    prize: 10862683,
  },
  {
    participant: "Newbee",
    place: 2,
    region: "CN",
    prize: 3950067,
  },
  {
    participant: "LGD.Forever Young",
    place: 3,
    region: "CN",
    prize: 2592231,
  },
  {
    participant: "LGD Gaming",
    place: 4,
    region: "CN",
    prize: 1728154,
  },
  {
    participant: "Virtus.pro",
    place: 5,
    region: "EEU",
    prize: 1110956,
  },
  {
    participant: "Invictus Gaming",
    place: 6,
    region: "CN",
    prize: 1110956,
  },
  {
    participant: "Team Empire",
    place: 7,
    region: "EEU",
    prize: 617198,
  },
  {
    participant: "OG",
    place: 8,
    region: "WEU",
    prize: 617198,
  },
  {
    participant: "Team Secret",
    place: 9,
    region: "WEU",
    prize: 370319,
  },
  {
    participant: "Evil Geniuses",
    place: 10,
    region: "NA",
    prize: 370319,
  },
  {
    participant: "TNC Pro Team",
    place: 11,
    region: "SEA",
    prize: 370319,
  },
  {
    participant: "Digital Chaos",
    place: 12,
    region: "NA",
    prize: 370319,
  },
  {
    participant: "Execration",
    place: 13,
    region: "SEA",
    prize: 123440,
  },
  {
    participant: "Cloud9",
    place: 14,
    region: "NA",
    prize: 123440,
  },
  {
    participant: "Infamous",
    place: 15,
    region: "SA",
    prize: 123440,
  },
  {
    participant: "iG Vitality",
    place: 16,
    region: "CN",
    prize: 123440,
  },
  {
    participant: "Fnatic",
    place: 17,
    region: "SEA",
    prize: 61720,
  },
  {
    participant: "HellRaisers",
    place: 18,
    region: "EEU",
    prize: 61720,
  },
];
const ti6PrizeData: InitialPrizeData[] = [
  {
    participant: "Wings Gaming",
    place: 1,
    region: "CN",
    prize: 9139002,
  },
  {
    participant: "Digital Chaos",
    place: 2,
    region: "NA",
    prize: 3427126,
  },
  {
    participant: "Evil Geniuses",
    place: 3,
    region: "NA",
    prize: 2180898,
  },
  {
    participant: "Fnatic",
    place: 4,
    region: "SEA",
    prize: 1453932,
  },
  {
    participant: "EHOME",
    place: 5,
    region: "CN",
    prize: 934761,
  },
  {
    participant: "MVP Phoenix",
    place: 6,
    region: "SEA",
    prize: 934761,
  },
  {
    participant: "TNC Pro Team",
    place: 7,
    region: "SEA",
    prize: 519262,
  },
  {
    participant: "Team Liquid",
    place: 8,
    region: "WEU",
    prize: 519262,
  },
  {
    participant: "OG",
    place: 9,
    region: "WEU",
    prize: 311557,
  },
  {
    participant: "LGD",
    place: 10,
    region: "CN",
    prize: 311557,
  },
  {
    participant: "Alliance",
    place: 11,
    region: "WEU",
    prize: 311557,
  },
  {
    participant: "Newbee",
    place: 12,
    region: "CN",
    prize: 311557,
  },
  {
    participant: "VG.Reborn",
    place: 13,
    region: "CN",
    prize: 103852,
  },
  {
    participant: "Team Secret",
    place: 14,
    region: "WEU",
    prize: 103852,
  },
  {
    participant: "Escape Gaming",
    place: 15,
    region: "WEU",
    prize: 103852,
  },
  {
    participant: "Natus Vincere",
    place: 16,
    region: "EEU",
    prize: 103852,
  },
];
const ti5PrizeData: InitialPrizeData[] = [
  {
    participant: "Evil Geniuses",
    place: 1,
    region: "NA",
    prize: 6634661,
  },
  {
    participant: "CDEC Gaming",
    place: 2,
    region: "CN",
    prize: 2856590,
  },
  {
    participant: "LGD Gaming",
    place: 3,
    region: "CN",
    prize: 2211554,
  },
  {
    participant: "Vici Gaming",
    place: 4,
    region: "CN",
    prize: 1566517,
  },
  {
    participant: "EHOME",
    place: 5,
    region: "CN",
    prize: 1197925,
  },
  {
    participant: "Virtus.pro",
    place: 6,
    region: "EEU",
    prize: 829333,
  },
  {
    participant: "MVP Phoenix",
    place: 7,
    region: "SEA",
    prize: 829333,
  },
  {
    participant: "Team Secret",
    place: 8,
    region: "WEU",
    prize: 829333,
  },
  {
    participant: "Team Empire",
    place: 9,
    region: "EEU",
    prize: 221155,
  },
  {
    participant: "Cloud9",
    place: 10,
    region: "NA",
    prize: 221155,
  },
  {
    participant: "compLexity Gaming",
    place: 11,
    region: "NA",
    prize: 221155,
  },
  {
    participant: "Invictus Gaming",
    place: 12,
    region: "CN",
    prize: 221155,
  },
  {
    participant: "Newbee",
    place: 13,
    region: "CN",
    prize: 55289,
  },
  {
    participant: "Natus Vincere",
    place: 14,
    region: "EEU",
    prize: 55289,
  },
  {
    participant: "Fnatic",
    place: 15,
    region: "SEA",
    prize: 55289,
  },
  {
    participant: "MVP HOT6ix",
    place: 16,
    region: "SEA",
    prize: 55289,
  },
];
const ti4PrizeData: InitialPrizeData[] = [
  {
    participant: "Newbee",
    place: 1,
    region: "CN",
    prize: 5025029,
  },
  {
    participant: "Vici Gaming",
    place: 2,
    region: "CN",
    prize: 1474737,
  },
  {
    participant: "Evil Geniuses",
    place: 3,
    region: "NA",
    prize: 1037778,
  },
  {
    participant: "Team DK",
    place: 4,
    region: "CN",
    prize: 819298,
  },
  {
    participant: "LGD Gaming",
    place: 5,
    region: "CN",
    prize: 655439,
  },
  {
    participant: "Cloud9",
    place: 6,
    region: "NA",
    prize: 655439,
  },
  {
    participant: "Invictus Gaming",
    place: 7,
    region: "CN",
    prize: 518889,
  },
  {
    participant: "Natus Vincere",
    place: 8,
    region: "EEU",
    prize: 518889,
  },
  {
    participant: "Titan",
    place: 9,
    region: "SEA",
    prize: 49158,
  },
  {
    participant: "Team Liquid",
    place: 10,
    region: "WEU",
    prize: 49158,
  },
  {
    participant: "mousesports",
    place: 11,
    region: "WEU",
    prize: 38234,
  },
  {
    participant: "Alliance",
    place: 12,
    region: "WEU",
    prize: 38234,
  },
  {
    participant: "Team Empire",
    place: 13,
    region: "EEU",
    prize: 21848,
  },
  {
    participant: "Fnatic",
    place: 14,
    region: "SEA",
    prize: 21848,
  },
  {
    participant: "Na`Vi North America",
    place: 15,
    region: "NA",
    prize: 0,
  },
  {
    participant: "Arrow Gaming",
    place: 16,
    region: "SEA",
    prize: 0,
  },
];
const ti3PrizeData: InitialPrizeData[] = [
  {
    participant: "Alliance",
    place: 1,
    region: "WEU",
    prize: 1437190,
  },
  {
    participant: "Natus Vincere",
    place: 2,
    region: "EEU",
    prize: 632364,
  },
  {
    participant: "Orange Esports",
    place: 3,
    region: "SEA",
    prize: 287438,
  },
  {
    participant: "TongFu",
    place: 4,
    region: "CN",
    prize: 201207,
  },
  {
    participant: "Invictus Gaming",
    place: 5,
    region: "CN",
    prize: 114975,
  },
  {
    participant: "Team DK",
    place: 6,
    region: "CN",
    prize: 114975,
  },
  {
    participant: "Team Liquid",
    place: 7,
    region: "WEU",
    prize: 43116,
  },
  {
    participant: "Fnatic",
    place: 8,
    region: "SEA",
    prize: 43116,
  },
  {
    participant: "Team Dignitas",
    place: 9,
    region: "WEU",
    prize: 0,
  },
  {
    participant: "LGD Gaming",
    place: 10,
    region: "CN",
    prize: 0,
  },
  {
    participant: "LGD international",
    place: 11,
    region: "CN",
    prize: 0,
  },
  {
    participant: "Team Zenith",
    place: 12,
    region: "SEA",
    prize: 0,
  },
  {
    participant: "RattleSnake",
    place: 13,
    region: "CN",
    prize: 0,
  },
  {
    participant: "mousesports",
    place: 14,
    region: "WEU",
    prize: 0,
  },
  {
    participant: "MUFC",
    place: 15,
    region: "SEA",
    prize: 0,
  },
  {
    participant: "Virtus.pro",
    place: 16,
    region: "EEU",
    prize: 0,
  },
];
const ti2PrizeData: InitialPrizeData[] = [
  {
    participant: "Invictus Gaming",
    place: 1,
    region: "CN",
    prize: 1000000,
  },
  {
    participant: "Natus Vincere",
    place: 2,
    region: "EEU",
    prize: 250000,
  },
  {
    participant: "LGD Gaming",
    place: 3,
    region: "CN",
    prize: 150000,
  },
  {
    participant: "Team DK",
    place: 4,
    region: "CN",
    prize: 80000,
  },
  {
    participant: "EHOME",
    place: 5,
    region: "CN",
    prize: 35000,
  },
  {
    participant: "Team Zenith",
    place: 6,
    region: "SEA",
    prize: 35000,
  },
  {
    participant: "TongFu",
    place: 7,
    region: "CN",
    prize: 25000,
  },
  {
    participant: "Orange Esports",
    place: 8,
    region: "SEA",
    prize: 25000,
  },
  {
    participant: "Counter Logic Gaming",
    place: 9,
    region: "NA",
    prize: 0,
  },
  {
    participant: "compLexity Gaming",
    place: 10,
    region: "NA",
    prize: 0,
  },
  {
    participant: "Evil Geniuses",
    place: 11,
    region: "NA",
    prize: 0,
  },
  {
    participant: "Darer",
    place: 12,
    region: "EEU",
    prize: 0,
  },
  {
    participant: "Mortal Teamwork",
    place: 13,
    region: "WEU",
    prize: 0,
  },
  {
    participant: "mousesports",
    place: 14,
    region: "WEU",
    prize: 0,
  },
  {
    participant: "Moscow Five",
    place: 15,
    region: "EEU",
    prize: 0,
  },
  {
    participant: "Absolute Legends",
    place: 16,
    region: "WEU",
    prize: 0,
  },
];
const ti1PrizeData: InitialPrizeData[] = [
  {
    participant: "Natus Vincere",
    place: 1,
    region: "EEU",
    prize: 1000000,
  },
  {
    participant: "EHOME",
    place: 2,
    region: "CN",
    prize: 250000,
  },
  {
    participant: "Scythe Gaming",
    place: 3,
    region: "SEA",
    prize: 150000,
  },
  {
    participant: "Meet Your Makers",
    place: 4,
    region: "WEU",
    prize: 80000,
  },
  {
    participant: "Moscow Five",
    place: 6,
    region: "EEU",
    prize: 35000,
  },
  {
    participant: "Invictus Gaming",
    place: 6,
    region: "SEA",
    prize: 35000,
  },
  {
    participant: "OK.Nirvana.int",
    place: 7,
    region: "NA",
    prize: 25000,
  },
  {
    participant: "Made in Thailand",
    place: 8,
    region: "SEA",
    prize: 25000,
  },
  {
    participant: "Virus Gaming",
    place: 9,
    region: "WEU",
    prize: 0,
  },
  {
    participant: "TYLOO",
    place: 10,
    region: "CN",
    prize: 0,
  },
  {
    participant: "Mineski",
    place: 11,
    region: "SEA",
    prize: 0,
  },
  {
    participant: "MUFC",
    place: 12,
    region: "SEA",
    prize: 0,
  },
  {
    participant: "Storm Games Clan",
    place: 13,
    region: "WEU",
    prize: 0,
  },
  {
    participant: "GosuGamers",
    place: 14,
    region: "WEU",
    prize: 0,
  },
  {
    participant: "OK.Nirvana.cn",
    place: 15,
    region: "CN",
    prize: 0,
  },
  {
    participant: "Next Evolution",
    place: 16,
    region: "WEU",
    prize: 0,
  },
];

export const prizeData: Prisma.PrizePoolCreateInput[] = [
  ...ti11PrizeData.map((item) => ({
    ...item,
    date: new Date("2022-10-30"),
    annualEdition: "Ti11" as Prisma.PrizePoolCreateInput["annualEdition"],
  })),
  ...ti10PrizeData.map((item) => ({
    ...item,
    date: new Date("2021-10-17"),
    annualEdition: "Ti10" as Prisma.PrizePoolCreateInput["annualEdition"],
  })),
  ...ti9PrizeData.map((item) => ({
    ...item,
    date: new Date("2019-09-25"),
    annualEdition: "Ti9" as Prisma.PrizePoolCreateInput["annualEdition"],
  })),
  ...ti8PrizeData.map((item) => ({
    ...item,
    date: new Date("2018-09-25"),
    annualEdition: "Ti8" as Prisma.PrizePoolCreateInput["annualEdition"],
  })),
  ...ti7PrizeData.map((item) => ({
    ...item,
    date: new Date("2017-09-12"),
    annualEdition: "Ti7" as Prisma.PrizePoolCreateInput["annualEdition"],
  })),
  ...ti6PrizeData.map((item) => ({
    ...item,
    date: new Date("2016-09-13"),
    annualEdition: "Ti6" as Prisma.PrizePoolCreateInput["annualEdition"],
  })),
  ...ti5PrizeData.map((item) => ({
    ...item,
    date: new Date("2015-09-8"),
    annualEdition: "Ti5" as Prisma.PrizePoolCreateInput["annualEdition"],
  })),
  ...ti4PrizeData.map((item) => ({
    ...item,
    date: new Date("2014-07-18"),
    annualEdition: "Ti4" as Prisma.PrizePoolCreateInput["annualEdition"],
  })),
  ...ti3PrizeData.map((item) => ({
    ...item,
    date: new Date("2013-08-11"),
    annualEdition: "Ti3" as Prisma.PrizePoolCreateInput["annualEdition"],
  })),
  ...ti2PrizeData.map((item) => ({
    ...item,
    date: new Date("2012-09-02"),
    annualEdition: "Ti2" as Prisma.PrizePoolCreateInput["annualEdition"],
  })),
  ...ti1PrizeData.map((item) => ({
    ...item,
    date: new Date("2012-08-21"),
    annualEdition: "Ti1" as Prisma.PrizePoolCreateInput["annualEdition"],
  })),
];

export const heroData: Prisma.HeroListCreateInput[] = [
  {
    name: "drow_ranger",
    img_url: "/images/illustration/drow_ranger.jpeg",
    background_color: "#181822",
    bio:
      "Not many can escape Drow Ranger once she's within range. After her foes have been silenced with a chilling blast, she finishes them off with a barrage of slowing, ice-tipped arrows that few can survive.",
  },
  {
    name: "pudge",
    img_url: "/images/illustration/pudge.jpeg",
    background_color: "#1B2430",
    bio:
      "Each carefully aimed throw of Pudge's signature hook strikes fear into his foes. Pulling his enemies near to carve them with his cleavers, he gains additional health and damage with every kill, and soon becomes an unstoppable killer.",
  },
  {
    name: "naga_siren",
    img_url: "/images/illustration/naga_siren.jpeg",
    background_color: "#0A0F0B",
    bio:
      "Sending squads of mirrored clones against her foes, Naga Siren ensnares and slays enemies as she leads her forces to victory. With the sound of her voice, she disables nearby foes to spring an ambush or crafting a hasty escape.",
  },
  {
    name: "queen_of_pain",
    img_url: "/images/illustration/queen_of_pain.jpeg",
    background_color: "#160C1F",
    bio:
      "Queen of Pain strikes without warning, destroying gathered foes with deafening screams. Should an enemy survive her onslaught, she slows their escape with a throw of her dagger before finishing them off.",
  },
  {
    name: "phantom_assassin",
    img_url: "/images/illustration/phantom_assassin.jpeg",
    background_color: "#829A9C",
    bio:
      "The moment she finds her prey, Phantom Assassin strikes. Instantly closing in on a target, she effortlessly dodges attacks as she relentlessly cuts away at her foe. Without warning, any one of her attacks could prove suddenly and brutally fatal.",
  },
  {
    name: "lina",
    img_url: "/images/illustration/lina.jpeg",
    background_color: "#f0cc22",
    bio:
      "As deadly as she is fragile, Lina effortlessly strikes down any foe foolish enough to be caught alone. Gaining attack speed with each spell she casts, she scours enemies with flame and heat lightning, ensuring few can survive her assaults.",
  },
];
