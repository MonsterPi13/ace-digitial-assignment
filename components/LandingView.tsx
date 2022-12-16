const LandingView = () => {
  return (
    <>
      <div class="flex flex-col items-center justify-center mt-8">
        <img
          class="max-w-lg h-auto rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
          src="/images/illustration/drow_ranger.jpeg"
          alt="image description"
        />

        <blockquote class="max-w-lg p-4 my-4 bg-gray-800 border-l-4 border-gray-500">
          <p class="text-xl italic font-medium leading-relaxed text-white">
            "Not many can escape Drow Ranger once she's within range. After her
            foes have been silenced with a chilling blast, she finishes them off
            with a barrage of slowing, ice-tipped arrows that few can survive."
          </p>
        </blockquote>
      </div>
    </>
  );
};

export default LandingView;
