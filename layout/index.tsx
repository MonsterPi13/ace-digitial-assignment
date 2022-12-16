import { Head } from "$fresh/runtime.ts";

import NavBar from "@/components/NavBar.tsx";
import { FunctionalComponent } from "preact";
import { PropsWithUser } from "@/schemas/PropsWithUser.ts";
import { PropsWithLandingPage } from "@/schemas/PropsWithLandingPage.ts";

type LayoutProps = PropsWithLandingPage & PropsWithUser;

const Layout: FunctionalComponent<LayoutProps> = ({ hero, user, children }) => {
  const bgColor = hero ? `bg-[${hero.background_color}]` : "";

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.5/dist/flowbite.min.css"
        />
        <script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js">
        </script>
        <link rel="stylesheet" href="/global.css" />
      </Head>
      <div class={`flex flex-col w-screen h-screen ${bgColor}`}>
        <NavBar user={user} />

        <main class="flex-1 w-full overflow-y-auto">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
