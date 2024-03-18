import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section class="text-gray-600 body-font py-40">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">
            Gear Guardians
          </h1>
          <p class="mb-8 leading-relaxed">
          La revolución del mantenimiento para tu moto.
          </p>
          <div class="flex justify-center">
            <Link to='/schedule'>
            <button class="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary-400 rounded text-lg">
              Agendar
            </button>
            </Link>
            <Link to='/consult'>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Seguimiento  <span aria-hidden="true">→</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
