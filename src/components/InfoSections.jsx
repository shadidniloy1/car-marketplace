import React from 'react'

const InfoSections = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="https://media.ed.edmunds-media.com/mercedes-benz/s-class/2024/oem/2024_mercedes-benz_s-class_sedan_amg-s-63-e-performance_fq_oem_1_1600.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          Crafting Excellence: The Unrivaled Legacy of Mercedes-Benz in Luxury and Automotive Engineering
          </h2>

          <p className="mt-4 text-gray-600">
          Mercedes-Benz has long been synonymous with luxury, precision, and cutting-edge innovation. With over a century of engineering mastery, the brand continues to set new standards in automotive design, blending high-performance technology with refined elegance. Each vehicle is a testament to the brand's commitment to excellence, providing drivers with a seamless fusion of comfort, safety, and power. Mercedes-Benz doesn’t just build cars—it crafts experiences, elevating every journey to a new level of sophistication.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default InfoSections