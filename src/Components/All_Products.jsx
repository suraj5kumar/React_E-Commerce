import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/Cart'


const All_Products = () => {
  const [products, setproducts] = useState([])
  const [load, setload] = useState(true)
  const [error, seterror] = useState(false)
  const { cartItems, addToCart } = useContext(CartContext)



  function getProducts() {
    try {
      setTimeout(async () => {
        setload(true)
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setload(false)
        setproducts(data)
      }, 1000);
    }
    catch (err) {
      setload(false)
      seterror(true)
      setproducts([])
    }
  }



  useEffect(() => {
    getProducts()
  }, [])


  return (
    <>

      {/* Loading Effect */}
      <div className=' w-full flex justify-center items-center'>
        {load && <div className=' text-3xl font-roboto'>
          <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="" />
        </div>}
      </div>

      {/* All Products */}
      <div className=' flex flex-wrap justify-center items-center py-32 lg:py-5 gap-5'>
        {error && <div className=' text-3xl font-roboto'>No Products Found</div>}

        {!error && products.map((p) => {
          return (
            <div key={p.id} className=' border w-72 h-92 flex flex-col items-center group'>
              <Link to={`/productPage/${p.id}`} className=' w-full h-80'>
                <div className=' w-full h-44 flex justify-center items-center'>
                  <img src={p.image} alt="" className=' h-40 w-40' />
                </div>
                <div className=' w-full flex flex-col justify-start items-start px-2 pt-7 gap-3'>
                  <h1 className=' group-hover:text-[#ec9621] leading-5'>{p.title}</h1>
                  <button className=' focus:outline-none text-white bg-green-700 font-medium rounded-lg text-md px-5 py-2 me-2 mb-2 dark:bg-green-600'>${p.price}</button>
                </div>
              </Link>
              <div className=' w-full px-2 flex items-center justify-end'>
                <button onClick={() => addToCart(p)} className=' text-nowrap focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2'>Add to cart</button>
              </div>
            </div>
          )
        }
        )
        }
      </div >
    </>
  )
}

export default All_Products