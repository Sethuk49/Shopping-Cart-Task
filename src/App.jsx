import React, { useState } from 'react'
import TopBar from './Components/TopBar'
import Product from './Components/Product'

function App() {
  let [cart, setCart] = useState(0)
  let data = [
    {
      name: "Smart watch",
      image: "https://m.media-amazon.com/images/I/31Zi7+cb+lL._SR290,290_.jpg",
      price:"$ 18"
    },
    {
      name: "Mens wallet",
      image: "https://5.imimg.com/data5/KL/YM/MY-44342459/g31a2372-250x250.jpg",
      price:"$ 15"
    },
    {
      name:"Mens bracelet",
      image:"https://img.freepik.com/premium-photo/silver-bracelet-white-background-bracelet-men_977935-11309.jpg", 
      price:"$ 10"
    },
    {
      name: "Laptop bag",
      image: "https://image.made-in-china.com/2f0j00zlbuZUsCbocG/Massive-Waterproof-Laptop-Bags-Backpack-Men-Leisure-Smart-College-Students-School-Bag.webp",
      price:"$ 10"
    },
  ]

  return (
    <>
      <TopBar cart={cart} />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((item, index) => (
              <Product 
                key={index} 
                data={item} 
                cart={cart} 
                setCart={setCart} 
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
