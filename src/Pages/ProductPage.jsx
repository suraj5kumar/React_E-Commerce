import { React, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { CartContext } from '../Context/Cart'

const ProductPage = () => {
  let { id } = useParams()
  const [product, setproduct] = useState({})
  const { cartItems, addToCart } = useContext(CartContext)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then((data) => {
        setproduct(data)
      })
  }, [])

  return (
    <>
      <Navbar />

      <div className=' w-full h-auto pt-32 px-5 flex flex-col gap-5 pb-5 lg:flex-row 2xl:items-center'>
        <div className=' w-full flex justify-center items-center'>
          <img src={product.image} className=' sm:h-96 sm:w-96 2xl:h-auto' />
        </div>
        <div className=' w-full sm:px-5 2xl:pr-40'>
          <h1 className=' font-extrabold sm:text-xl'>{product.title}</h1>
          <p className=' py-3 sm:text-xl'>{product.description}</p>
          <p className=' py-2'><b>Category</b>: {product.category}</p>
          {/* <p className=' font-extrabold text-yellow-700 py-1'>Rating: {product.rating.rate}</p> */}
          {/* <p className=' text-green-700 pb-1'>{product.rating.count > 0 ? "In stock" : "Out of stock"}</p> */}
          <button className=' focus:outline-none text-white bg-green-700 font-medium rounded-lg text-md px-5 py-2 me-2 mb-2 dark:bg-green-600'>${product.price}</button>
          <button onClick={() => { addToCart(product) }} className=' text-nowrap focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2'>Add to cart</button>
          <div className=' w-full flex items-center'>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage