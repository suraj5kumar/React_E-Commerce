import { useContext, React } from 'react'
import { CartContext } from '../Context/Cart'

const Cart_Items = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

  return (
    <>
      <div className=' w-full flex-col flex items-center justify-center gap-8 text-black text-sm pt-32 lg:pt-5 px-1'>
        <h1 className=' text-3xl font-bold'>Cart</h1>
        <div className=' w-full flex flex-col lg:w-9/12'>
          {cartItems.map((item) => (
            <div className=' flex justify-between items-center border py-2 px-1 lg:py-5 lg:px-10' key={item.id}>
              <div className='flex gap-4'>
                <img src={item.image} alt={item.title} className='rounded-md h-24 w-24' />
                <div className='flex flex-col px-1'>
                  <h1 className='text-lg font-bold'>{item.title}</h1>
                  <p className='text-gray-600 font-extrabold'>${item.price}</p>
                </div>
              </div>
              <div className='flex items-center'>
                <button
                  className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                  onClick={() => {
                    removeFromCart(item)
                  }}
                >
                  -
                </button>
                <p className=' border border-gray-800 px-3 py-1'>{item.quantity}</p>
                <button
                  className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                  onClick={() => {
                    addToCart(item)
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        {
          cartItems.length > 0 ? (
            <div className=' flex flex-col justify-between items-center gap-5'>
              <h1 className='text-lg font-bold'>Total: ${getCartTotal()}</h1>
              <button
                className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                onClick={() => {
                  clearCart()
                }}
              >
                Clear cart
              </button>
            </div>
          ) : (
            <h1 className='text-lg font-bold'>Your cart is empty</h1>
          )
        }
      </div>
    </>
  )
}

export default Cart_Items