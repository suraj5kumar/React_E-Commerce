import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart02Icon } from 'hugeicons-react'

const Navbar = () => {
  const [button, setbutton] = useState("Home")
  const [hamburger, sethamburger] = useState("Close")

  const hamburgerClick = (a, b) => {
    if (hamburger === "Close") {
      sethamburger("Open")
    }
    else {
      sethamburger("Close")
      setbutton(b)
    }
  }


  return (
    <>
      <div className=' w-full h-auto flex justify-center items-center fixed z-100 top-0 bg-slate-700 lg:static'>
        <div className=' w-full flex justify-between items-center px-3 sm:px-5 py-3 xl:px-10'>
          <Link to={"/"}><img src="Images/Happy_Shop.png" className=' cursor-pointer h-16' /></Link>

          {/* Navbar for big screen */}
          <div className=' text-xl font-roboto items-center gap-10 hidden lg:flex'>
            <Link to={"/"}><button onClick={() => { setbutton("Home") }} className={` ${button === "Home" ? "text-[#FF9F00]" : "text-[#ffffff]"}`}>Home</button></Link>
            <Link to={"/about_us"}><button onClick={() => { setbutton("about_us") }} className={` ${button === "about_us" ? "text-[#FF9F00]" : "text-[#ffffff]"}`}>About Us</button></Link>
            <Link to={"/contact_us"}><button onClick={() => { setbutton("Contact_us") }} className={` ${button === "Contact_us" ? "text-[#FF9F00]" : "text-[#ffffff]"}`}>Contact_us</button></Link>
            <Link to={'/cart'}>
              <ShoppingCart02Icon
                size={48}
                color={"#FFFFFF"}
                variant={"stroke"}
              />
            </Link>
          </div>

          {/* Hamburger */}
          <div onClick={() => { hamburger === "Close" ? sethamburger("Open") : sethamburger("Close") }} className=' flex flex-col gap-2 cursor-pointer hover:opacity-60 lg:hidden'>
            <div className=' w-12 h-1 rounded-full bg-white'></div>
            <div className=' w-12 h-1 rounded-full bg-white'></div>
            <div className=' w-12 h-1 rounded-full bg-white'></div>
          </div>
        </div>

        {/* Navbar for small screen */}
        <div className={` w-[80%] h-full py-5 pl-5 pr-20 sm:w-auto sm:pr-40 md:pr-60 lg:hidden bg-slate-700 fixed top-[88px] right-0 duration-300 ${hamburger === "Open" ? "translate-x-0" : "translate-x-full"}`}>
          <div className=' flex flex-col text-xl font-roboto items-start gap-10'>
            <Link to={"/"}><button onClick={() => hamburgerClick("Close", "Home")} className={` ${button === "Home" ? "text-[#FF9F00]" : "text-[#ffffff]"}`}>Home</button></Link>
            <Link to={"/about_us"}><button onClick={() => hamburgerClick("Close", "about_us")} className={` ${button === "about_us" ? "text-[#FF9F00]" : "text-[#ffffff]"}`}>About Us</button></Link>
            <Link to={"/contact_us"}><button onClick={() => hamburgerClick("Close", "Contact_us")} className={` ${button === "Contact_us" ? "text-[#FF9F00]" : "text-[#ffffff]"}`}>Contact_us</button></Link>
            <Link to={'/cart'}>
              <ShoppingCart02Icon
                size={48}
                color={"#FFFFFF"}
                variant={"stroke"}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar