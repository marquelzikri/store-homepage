import React from 'react'

import NavHeader from '../components/NavHeader'
import BrandHeader from '../components/BrandHeader'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import HorizontalProducts from '../components/HorizontalProducts/'

const HomePage = () => {
  return (
    <div
      className="overflow-x-hidden"
      style={{
        fontFamily: "Roboto"
      }}
    >
      <NavHeader />
      <BrandHeader />
      <Banner />


      <section className="flex justify-center w-screen mt-6">
        <div className="w-full max-w-5xl px-4 sm:p-0">
          <section className="gap-6 grid grid-rows-3 sm:grid-rows-none sm:grid-cols-3">
            <img src="https://picsum.photos/400" alt="Lorem Picsum" />
            <img src="https://picsum.photos/400" alt="Lorem Picsum" />
            <img src="https://picsum.photos/400" alt="Lorem Picsum" />
          </section>
        </div>
      </section>

      <HorizontalProducts
        title="Popular in Women"
        url="https://files.sirclocdn.xyz/frontend-test-37/men-products.json"
      />
      <HorizontalProducts
        title="Popular in Men"
        url="https://files.sirclocdn.xyz/frontend-test-37/women-products.json"
      />
      <HorizontalProducts
        title="Popular in Accessories"
        url="https://files.sirclocdn.xyz/frontend-test-37/accessories-products.json"
      />

      <section className="flex justify-center w-screen mt-6">
        <div className="w-full max-w-5xl px-4 xl:p-0">
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

      <Footer />
    </div>
  )
}

export default HomePage