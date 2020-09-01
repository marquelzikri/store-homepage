import React from 'react'
import Carousel from 'react-multi-carousel'

import "react-multi-carousel/lib/styles.css"
import "./styles.css"

import useFetch from '../../utils/useFetch'

function HorizontalProducts({
  title,
  url
}: { title: string, url: string }) {
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
    <section className="flex justify-center w-screen mt-16">
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
        >
          {
            response?.products?.map((product: any, index: number) => (
              <ProductCart
                key={index}
                name={product.name}
                category={"kategori"}
                price={Math.ceil(Math.random() * (1000000 - 200000)).toLocaleString()}
                imgUrl={product.image_file}
              />
            ))
          }
        </Carousel>
      </div>
    </section>
  )
}

function ProductCart({
  name,
  category,
  price,
  imgUrl
}: {name: string, category: string, price: string, imgUrl: string}) {
  return (
    <button className="text-left">
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

export default HorizontalProducts
