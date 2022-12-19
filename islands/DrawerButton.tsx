import { useRef } from "preact/hooks";

const DrawerButton = () => {
  const selectorRef = useRef<HTMLSelectElement>(null);

  const handleRedirectBtnClick = () => {
    const selectIndex = selectorRef.current?.selectedIndex;
    if (selectIndex && selectIndex !== 0) {
      const selectedValue = selectorRef.current.options[selectIndex].value;
      window.location.href = `/dashboard/${selectedValue}`;
    }
  };
  return (
    <>
      <div class="text-center">
        <button class="p-2 mr-2 text-gray-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <svg
            class="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            data-drawer-target="filter-drawer"
            data-drawer-show="filter-drawer"
            aria-controls="filter-drawer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            >
            </path>
          </svg>
        </button>
      </div>

      <div
        id="filter-drawer"
        class="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 transition-transform left-0 top-0 -translate-x-full"
        aria-labelledby="drawer-label"
      >
        <h5
          id="drawer-label"
          class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            class="w-5 h-5 mr-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            >
            </path>
          </svg>Filters
        </h5>
        <button
          type="button"
          data-drawer-dismiss="filter-drawer"
          aria-controls="filter-drawer"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            >
            </path>
          </svg>
          <span class="sr-only">Close menu</span>
        </button>
        <div class="mb-4">
          <label
            for="guests"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Invite guests
          </label>
          <div class="relative">
            <label
              for="edition"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an edition of The International
            </label>
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ref={selectorRef}
            >
              <option selected>
                please select
              </option>
              <option value="ti11">Ti11</option>
              <option value="ti10">Ti10</option>
              <option value="ti9">Ti9</option>
              <option value="ti8">Ti8</option>
              <option value="ti7">Ti7</option>
              <option value="ti6">Ti6</option>
              <option value="ti5">Ti5</option>
              <option value="ti4">Ti4</option>
              <option value="ti3">Ti3</option>
              <option value="ti2">Ti2</option>
              <option value="ti1">Ti1</option>
            </select>
          </div>
        </div>
        <div class="flex justify-end">
          <button
            onClick={handleRedirectBtnClick}
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Redirect
            <svg
              class="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              >
              </path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default DrawerButton;
