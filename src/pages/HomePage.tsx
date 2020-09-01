import React from 'react';

import "typeface-roboto";

import NavHeader from '../components/NavHeader';
import BrandHeader from '../components/BrandHeader';

const HomePage = () => {
  return (
    <div
      style={{
        fontFamily: "Roboto"
      }}
    >
      <NavHeader />
      <BrandHeader />
      <section className="flex justify-center w-screen">
        <div className="w-full max-w-5xl">
          <section className="gap-6 grid grid-cols-3">
            <img src="https://picsum.photos/400" alt="Lorem Picsum" />
            <img src="https://picsum.photos/400" alt="Lorem Picsum" />
            <img src="https://picsum.photos/400" alt="Lorem Picsum" />
          </section>

          <hr className="mt-12" />

          <section className="my-12">
            <h3 className="font-bold text-sm uppercase">Koleksi lengkap fashion dari brand-brand terbaik</h3>
            <p className="my-4 text-xs font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt feugiat vestibulum. Donec vel tempor dolor. Sed varius pellentesque urna sed viverra. Morbi eget dui sed velit condimentum dapibus. Vestibulum non fringilla metus, in faucibus arcu. Phasellus et mi nunc. Phasellus dolor mauris, bibendum et justo non, faucibus eleifend tellus. Vivamus sit amet quam ac dui viverra finibus.
            </p>
            <h3 className="font-bold text-sm uppercase">Belanja fashion di Mavelin Indonesia</h3>
            <p className="my-4 text-xs font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt feugiat vestibulum. Donec vel tempor dolor. Sed varius pellentesque urna sed viverra. Morbi eget dui sed velit condimentum dapibus. Vestibulum non fringilla metus, in faucibus arcu. Phasellus et mi nunc. Phasellus dolor mauris, bibendum et justo non, faucibus eleifend tellus. Vivamus sit amet quam ac dui viverra finibus.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default HomePage;