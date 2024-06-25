import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")
  const success = (e) => {
    e.preventDefault()

    if (name === "" || email === "" || message === "") {
      toast.error('Please fill all the fields', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
      return
    }
    else {
      toast.success('Submitted successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })

      setname("")
      setemail("")
      setmessage("")
    }
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {/* Same as */}
      <ToastContainer />
      <div className=' w-full h-screen flex justify-center items-center'>
        <div className=' w-[350px] h-auto border rounded-lg flex flex-col gap-5 px-5 py-10'>
          <Link to={'/'}><img src="Images/Contact_Us_Logo.png" /></Link>
          <form onSubmit={success} className=' w-full flex flex-col gap-3 px-3'>
            <input value={name} onChange={(e) => setname(e.target.value)} type="text" name='name' placeholder='Name' class=" border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            <input value={email} onChange={(e) => setemail(e.target.value)} type="email" name='email' placeholder='Email' class=" border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            <textarea value={message} onChange={(e) => setmessage(e.target.value)} name="message" placeholder=' Type your message here' className=' border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'></textarea>
            <button className=' focus:outline-none text-white bg-green-700 font-medium rounded-lg text-md px-5 py-2 me-2 mb-2 dark:bg-green-600'>Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact