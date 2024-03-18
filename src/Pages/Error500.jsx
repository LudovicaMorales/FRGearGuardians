import Logo from "../assets/Logo.png";

const Error500 = () => {
  return (
    <>
      <section class="px-4 py-32 mx-auto max-w-7xl">
        <div class="w-full mx-auto lg:w-1/3">
          <a href="/" title="GearGuardians Home Page" class="flex items-center">
          <img className="h-8 w-auto" src={Logo} alt="" />
            <span class="sr-only">GearGuardians Home Page</span>
          </a>
          <p class="mt-5 mb-3 text-xl font-bold text-black md:text-2xl">
            Internal Server Error (500)
          </p>
          <p class="mb-3 text-base font-medium text-gray-700">
            Sorry this is not working properly. We know about this issue and we
            are working to fix it. Thanks for understanding!
          </p>
        </div>
      </section>
    </>
  );
};

export default Error500;
