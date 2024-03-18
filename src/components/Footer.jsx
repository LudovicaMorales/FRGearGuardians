import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img className="h-8 w-auto" src={Logo} alt="" />
              <span class="ml-3 text-xl">Gear Guardians</span>
            </a>
            <p class="mt-2 text-sm text-gray-500">
            La revolución del mantenimiento para tu moto.
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                DOCUMENTACIÓN
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Manual Interfaz Gráfica</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Manual de Usuario</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Manual Proyecto Final</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © 2024 Gear Guardians
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
