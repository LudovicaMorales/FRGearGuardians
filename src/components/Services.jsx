import React from "react";

const Services = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Nuestros servicios
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              ¡Mantén tu moto en perfecto estado!<br/>En Gear Guardians, tu taller
              de confianza, te ofrecemos una amplia gama de servicios para el
              mantenimiento y reparación de tu moto.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Servicios
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Mantenimiento Preventivo
                </h2>
                <p class="leading-relaxed text-base">
                Revisiones completas y personalizadas.<br/>Cambio de aceite y filtros.<br/>Ajuste de niveles y sistemas.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/721x401"
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Servicios
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Reparaciones
                </h2>
                <p class="leading-relaxed text-base">
                Mecánica general y especializada.<br/>Diagnóstico y presupuesto sin compromiso.<br/>Reparaciones con garantía.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/722x402"
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Servicios
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Garantía
                </h2>
                <p class="leading-relaxed text-base">
                Garantía en las reparaciones.<br/>Repuestos originales de la marca.<br/>Mano de obra altamente cualificada.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/723x403"
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Tienda
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Repuestos y Accesorios
                </h2>
                <p class="leading-relaxed text-base">
                Amplia gama de productos para todas las marcas.<br/>Accesorios para personalizar tu moto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
