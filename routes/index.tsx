import NavBar from "@/components/NavBar.tsx";

export default function Home() {
  return (
    <>
      <div class="flex flex-col w-screen h-screen bg-[#344e41]">
        <NavBar />

        <main class="flex-1 w-full overflow-y-auto">
          <img
            src="/images/illustration/drow_ranger.jpeg"
            alt=""
            class="block mx-auto my-10 w-1/2 rounded-sm sm:rounded-3xl max-w-2xl"
          />
        </main>
      </div>
    </>
  );
}
