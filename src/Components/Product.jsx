import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Product({ cart, setCart, data }) {
  let [toggle, setToggle] = useState(true)
  const [rating, setRating] = useState(0)

  const handleRating = (rate) => {
    setRating(rate)
  }

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={data.image} alt={data.name} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{data.name}</h5>
            <p>{data.price}</p>
            <Rating onClick={handleRating} initialValue={rating} size={25} />
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          {toggle ? (
            <div className="text-center">
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => {
                  setCart(cart + 1)
                  setToggle(prev => !prev)
                }}
              >
                Add To Cart
              </button>
            </div>
          ) : (
            <div className="text-center">
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => {
                  setCart(cart - 1)
                  setToggle(prev => !prev)
                }}
              >
                Remove From Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
