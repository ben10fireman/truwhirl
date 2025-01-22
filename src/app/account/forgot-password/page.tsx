import React from 'react'

const page = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Gender</a>
                <ul className="p-2">
                  <li>
                    <a>Women</a>
                  </li>
                  <li>
                    <a>Men</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Soulmate</a>
              </li>
              <li>
                <a>Profile</a>
              </li>

              <li>
                <a>Account</a>
                <ul className="p-2">
                  <li>
                    <a>LogIn</a>
                  </li>
                  <li>
                    <a>Sign Up</a>
                  </li>
                </ul>
              </li>

              <li>
                <a>Contact Us</a>
                <ul className="p-2">
                  <li>
                    <a>Facebook</a>
                  </li>
                  <li>
                    <a>Instagram</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl  flex text-pink-500 ">
            Truewhirl
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="mx-7">Home</a>
            </li>
            <li>
              <details>
                <summary className="mx-7">Gender</summary>
                <ul className="p-2">
                  <li>
                    <a>Women</a>
                  </li>
                  <li>
                    <a>Men</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="mx-7">Soulmate</a>
            </li>
            <li>
              <a className="mx-7">Profile</a>

            </li>
            <li>
              <details>
                <summary className="mx-7">Account</summary>
                <ul className="p-2">
                  <li>
                    <a>Login</a>
                  </li>
                  <li>
                    <a>Sign Up</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="mx-7">Contact Us</summary>
                <ul className="p-2">
                  <li>
                    <a>Facebook</a>
                  </li>
                  <li>
                    <a>Instagram</a>
                  </li>
                </ul>
              </details>
            </li>


          </ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
          {/* Notification Icon */}
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
      {/*forgot-password*/}

      <div className="h-screen flex flex-col items-center justify-start">
        <h1 className="text-4xl font-bold text-center mt-16 mb-5">Forgot password?</h1>
        <p className=' mb-5'>Enter your phone Number to reset your password.</p>

        <div className=" flex items-center justify-center border border-gray-400 rounded-md h-14 w-96 text-sm relative focus-within:border-black mb-5">
          <input
            type="Tel"
            className="w-full h-full px-4 pt-3 outline-none bg-transparent text-white peer"
            autoComplete="off"
          />
          <label className="text-gray-400 absolute left-4 top-4 transition-all duration-300 peer-focus:text-xs peer-focus:top-2">
            Phone Number
          </label>
        </div>
        <div>
          <button className="flex items-center justify-center border-none bg-black text-white rounded-md h-14 w-96 text-sm mt-5 transform hover:scale-105 transition duration-300">
            Send reset code
          </button>
        </div>

      </div>

    </div>
  )
}

export default page