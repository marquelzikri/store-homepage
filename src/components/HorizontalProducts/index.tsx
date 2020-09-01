import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'
import './styles.css'

import useFetch from '../../utils/useFetch'
import classNames from 'classnames'

function HorizontalProducts({
  title,
  url
}: { title: string, url: string }) {
  const [modalData, setModalData] = useState<{name: string, imgUrl: string} | null>(null)
  const [hasCarouselRendered, setHasCarouselRendered] = useState(false)

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
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  if (hasError) {
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

    hasError = null
  }

  useEffect(() => {
    if (response?.products) {
      setTimeout(() => {
        setHasCarouselRendered(true)
      }, 100)
    }
  }, [response])

  return (
    <>
      <section className="relative flex justify-center w-screen mt-16">
        <div
          className={classNames(
            "w-full max-w-6xl pt-8 px-4 sm:px-0 relative",
            {
              "flex justify-center": hasCarouselRendered
            }
          )}
        >
          <div className="absolute flex h-8 justify-center left-0 top-0 w-full">
            <div className="w-full max-w-5xl pl-4 sm:px-0">
              <h1 className="text-sm text-gray-700 font-black uppercase">
                {title}
              </h1>
            </div>
          </div>
          {
            loading?
              <span>Loading...</span>: (
                hasError?
                  <span>Error occured.</span>: (
                    <Carousel
                      partialVisbile={false}
                      responsive={responsive}
                      infinite
                      showDots
                      renderDotsOutside
                      removeArrowOnDeviceType={["tablet", "mobile"]}
                      customLeftArrow={<CustomLeftArrow />}
                      customRightArrow={<CustomRightArrow />}
                    >
                      {
                        response?.products?.map((product: any, index: number) => (
                          <ProductCard
                            key={index}
                            name={product.name}
                            category={"kategori"}
                            price={Math.ceil(Math.random() * (1000000 - 200000)).toLocaleString()}
                            imgUrl={product.image_file}
                            // discount={20}
                            setModalData={setModalData}
                          />
                        ))
                      }
                    </Carousel>
                  )
              )
          }
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

function ProductCard({
  name,
  category,
  price,
  discount,
  imgUrl,
  setModalData
}: {name: string, category: string, price: string, discount?: number, imgUrl: string, setModalData: Function}) {
  return (
    <button
      className="text-left font-normal"
      onClick={() => setModalData({ name, imgUrl })}
    >
      <article className="flex flex-col m-0 sm:mx-2 text-sm">
        <img
          className="h-card-img object-cover"
          src={imgUrl}
          alt={`${name} thumbnail`}
        />
        {
          discount? (
            <div className="flex justify-end absolute sm:relative top-0 right-0">
              <div>
                <div className="bg-red-500 flex h-12 justify-center w-8 p-2">
                  <span className="text-xs text-white">
                    Off <br/>
                    {discount}%
                  </span>
                </div>
                <div
                  className="triangle-down"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "1rem solid transparent",
                    borderRight: "1rem solid transparent",
                    borderTop: "1rem solid #f56565",
                  }}
                ></div>
              </div>
            </div>
          ): null
        }
        <small className="mt-4 text-gray-500">
          {category}
        </small>
        <span className="font-semibold text-sm">
          {name}
        </span>
        <span className="font-semibold text-sm">
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
