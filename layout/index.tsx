import { Head } from "$fresh/runtime.ts";

import NavBar from "@/components/NavBar.tsx";
import { FunctionalComponent } from "preact";
import { PropsWithLayout } from "@/schemas/PageProps.ts";
import { pageTitle } from "@/signals/index.ts";

const Layout: FunctionalComponent<PropsWithLayout> = (
  { isShownDrawButton, hero, user, children },
) => {
  const bgColor = hero ? `bg-[${hero.background_color}]` : "";

  return (
    <>
      <Head>
        <title>{pageTitle.value}</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.5/dist/flowbite.min.css"
        />
        <script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js">
        </script>
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <div class={`flex flex-col w-screen h-screen ${bgColor}`}>
        <NavBar
          isShownDrawButton={!!isShownDrawButton}
          user={user}
        />

        <main class="flex-1 w-full overflow-y-auto">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
