import { PropsWithPrize } from "@/schemas/PageProps.ts";

const TableContainer = ({ prizeData }: PropsWithPrize) => {
  return (
    <div class="relative w-full h-full ">
      <div class="overflow-y-auto absolute top-0 right-0 bottom-0 left-0 shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Place
              </th>
              <th scope="col" class="py-3 px-6">
                Participant
              </th>
              <th scope="col" class="py-3 px-6">
                Region
              </th>
              <th scope="col" class="py-3 px-6">
                $ USD
              </th>
            </tr>
          </thead>
          <tbody>
            {prizeData?.map((row, index) => (
              <tr
                class={index % 2 === 0
                  ? "bg-white border-b"
                  : "bg-gray-50 border-b"}
              >
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  {row.place}
                </th>
                <td class="py-4 px-6">
                  {row.participant}
                </td>
                <td class="py-4 px-6">
                  {row.region}
                </td>
                <td class="py-4 px-6">
                  {`$${row.prize.toLocaleString()}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableContainer;
