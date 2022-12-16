import { FunctionalComponent } from "preact";

import { PropsWithLandingPage } from "../schemas/PropsWithLandingPage.ts";

const LandingView: FunctionalComponent<PropsWithLandingPage> = ({ hero }) => {
  return (
    <>
      <div class="flex flex-col items-center justify-center mt-8">
        <img
          class="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
          src={hero?.img_url}
          alt={hero?.name}
        />

        <blockquote class="max-w-lg p-4 my-4 bg-gray-800 border-l-4 border-gray-500">
          <p class="text-xl italic font-medium leading-relaxed text-white">
            {hero?.bio}
          </p>
        </blockquote>
      </div>
    </>
  );
};

export default LandingView;
