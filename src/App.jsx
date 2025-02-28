import { Outlet } from "react-router-dom"
import logo from './assets/Black & White Minimalist Business Logo (1).png'
import Cart from './pages/Cart';
import Forgate from "./pages/Forgate";
import Pagination from "./pages/Pagination";

function App() {


  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-white max-w-[1200px] mx-auto px-2 ">
            <div className="flex-1 px-2 mx-2"><img className="w-[50%]" src={logo} alt="" /></div>

            <div className=" flex justify-center  items-center mr-[5%]">
              <div className="">Operator: <span className="font-bold px-1">Online</span></div>
              <div className="w-[10px] h-[10px] circle bg-lime-400 rounded-full border"></div>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal flex justify-center items-center uppercase font-bold text-[#006BB3] ">
                {/* Navbar menu content here */}


                <li><a>Exchage</a></li>
                <li><a>Testimonials</a></li>
                <li><a>contact</a></li>
                <li><a>Login</a></li>
                <button className="button">
                  Download App
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clip-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </ul>
            </div>

            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
          </div>
          {/* Page content here */}


          <marquee className='bg-[#006BB3] py-2 text-white ' direction=""> <span className='text-amber-300 font-bold'>Notice:</span> Exchangebari.com এ আপনাকে স্বাগতম। আমাদের ওয়েবসাইট শুধুমাত্র দেশীও ফ্রীলেন্সারদের জন্য তৈরী করা হয়েছে। </marquee>

          <div className=" ">
            <Outlet></Outlet>
            <Cart></Cart>
            <Forgate></Forgate>
            <Pagination></Pagination>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default App
