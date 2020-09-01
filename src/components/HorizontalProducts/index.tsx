import React from 'react'
import Carousel from 'react-multi-carousel'

import "react-multi-carousel/lib/styles.css"
import "./styles.css"

import useFetch from '../../utils/useFetch'

function HorizontalProducts({
  title,
  url
}: { title: string, url: string }) {
  const [modalData, setModalData] = React.useState<{name: string, imgUrl: string} | null>(null)

  let [
    response,
    loading,
    hasError
  ] = useFetch({ url })

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  response = {
    products: [
      {
        "name": "Men Product 1",
        "image_file": "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      },
      {
        "name": "Men Product 2",
        "image_file": "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      },
      {
        "name": "Men Product 3",
        "image_file": "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      },
      {
        "name": "Men Product 4",
        "image_file": "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      },
      {
        "name": "Men Product 5",
        "image_file": "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      }
    ]
  }

  return (
    <>
      <section className="relative flex justify-center w-screen mt-16">
        <div className="w-full max-w-5xl pt-8 px-4 sm:px-0 relative">
          <h1 className="absolute top-0 text-sm text-gray-700 font-black uppercase">
            {title}
          </h1>
          {
            loading?
              <span>Loading...</span>: (
                hasError?
                  <span>Error occured.</span>: <></>
              )
          }
          <Carousel
            partialVisbile={false}
            itemClass="image-item"
            responsive={responsive}
            infinite
            showDots
            renderDotsOutside
            // customLeftArrow={<CustomLeftArrow />}
            // customRightArrow={<CustomRightArrow />}
          >
            {
              response?.products?.map((product: any, index: number) => (
                <ProductCart
                  key={index}
                  name={product.name}
                  category={"kategori"}
                  price={Math.ceil(Math.random() * (1000000 - 200000)).toLocaleString()}
                  imgUrl={product.image_file}
                  setModalData={setModalData}
                />
              ))
            }
          </Carousel>
        </div>
        {modalData ? (
          <ProductModal
            name={modalData.name}
            imgUrl={modalData.imgUrl}
            setModalData={setModalData}
          />
        ) : null}
      </section>
    </>
  )
}

function ProductCart({
  name,
  category,
  price,
  imgUrl,
  setModalData
}: {name: string, category: string, price: string, imgUrl: string, setModalData: Function}) {
  return (
    <button
      className="text-left"
      onClick={() => setModalData({ name, imgUrl })}
    >
      <article className="flex flex-col m-0 sm:mx-2 text-sm">
        <img
          className="h-card-img object-cover"
          src={imgUrl}
          alt={`${name} thumbnail`}
        />
        <small className="mt-4">
          {category}
        </small>
        <span>
          {name}
        </span>
        <span>
          IDR {price}
        </span>
      </article>
    </button>
  )
}

function ProductModal({
  name,
  imgUrl,
  setModalData
}: {name: string, imgUrl: string, setModalData: Function}) {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => setModalData(null)}
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-3xl font-semibold">
                {name}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setModalData(null)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <img
                className="h-full object-cover"
                src={imgUrl}
                alt={`${name} thumbnail`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

const CustomLeftArrow = ({ onClick }: any) => (
  <i onClick={() => onClick()} className="custom-left-arrow" />
)

const CustomRightArrow = ({ onClick }: any) => (
  <i onClick={() => onClick()} className="custom-right-arrow" />
)

export default HorizontalProducts
