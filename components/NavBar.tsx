import { FunctionalComponent } from "preact";

import { PropsWithUser } from "@/schemas/PropsWithUser.ts";
import UserAvatarButton from "@/islands/UserAvatarButton.tsx";

const NavBar: FunctionalComponent<PropsWithUser> = ({ user }) => {
  return (
    <nav class="px-2 bg-[#adc178] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div class="container flex flex-wrap items-center justify-between mx-auto py-1 sm:py-3">
        <div class="flex items-center">
          <img
            src="/logo.svg"
            class="h-6 mr-3 sm:h-10"
            alt="Dota2 Logo"
          />
          <h3 class="text-[#dde5b6] text-xl">DOTA2</h3>
        </div>

        <UserAvatarButton user={user} />
      </div>
    </nav>
  );
};

export default NavBar;
