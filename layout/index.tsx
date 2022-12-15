import { Head } from "$fresh/runtime.ts";

import NavBar from "@/components/NavBar.tsx";
import { FunctionalComponent } from "preact";
import { PropsWithUser } from "../schemas/PropsWithUser.ts";

type LayoutProps = PropsWithUser;

const Layout: FunctionalComponent<LayoutProps> = ({ user, children }) => {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js">
        </script>
      </Head>
      <div class="flex flex-col w-screen h-screen bg-[#344e41]">
        <NavBar user={user} />

        <main class="flex-1 w-full overflow-y-auto">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
