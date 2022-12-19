import { FunctionalComponent } from "preact";

import { PropsWithUser } from "@/schemas/PropsWithUser.ts";
import UserAvatarButton from "@/islands/UserAvatarButton.tsx";
import DrawerButton from "@/islands/DrawerButton.tsx";

type NavProps = { isShownDrawButton: boolean } & PropsWithUser;

const NavBar: FunctionalComponent<NavProps> = (
  { user, isShownDrawButton = false },
) => {
  return (
    <nav class="px-2 bg-[#adc178] border-gray-700">
      <div class="container flex flex-wrap items-center justify-between mx-auto py-1 sm:py-3">
        <div class="flex items-center">
          {isShownDrawButton && <DrawerButton />}
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
