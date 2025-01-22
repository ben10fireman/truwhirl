import React from "react";

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
      <div className="flex flex-col md:flex-row h-auto bg-gray-100">
        {/*  Image Section */}
        <div className="flex-1 flex items-center justify-center bg-base-100">
          <img
            src="https://i.pinimg.com/474x/9c/e9/ef/9ce9ef059ed7cbf0eaadffbe3c1749e6.jpg" // Replace with your image URL
            alt="Sample"
            className="object-cover max-h-full rounded-lg shadow-lg"
          />
        </div>

        {/*  cover letter Section */}
        <div className="w-full md:w-1/2 bg-white p-6 shadow-lg overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div className="font-semibold text-lg">Jeon jungkook</div>
          </div>
          <div>
            <h1 className="my-3">His dating preference</h1>
          </div>
          <div className='border-1 bg-gray-100 py-3 rounded-3xl'>
            <button className="btn btn-info bg-base-100 mx-2 hover:text-white">
              Coffee
            </button>
            <button className="btn btn-active bg-base-100 m-2 hover:text-white">
              Hangout
            </button>
            <button className="btn btn-active btn-primary bg-base-100 m-2 text-black hover:text-white">
              Camping
            </button>
            <button className="btn btn-active btn-secondary bg-base-100 m-2 text-black hover:text-white">
              Outdoor
            </button>
          </div>

          {/* interests*/}
          <div className='border-1 bg-gray-100 py-3 rounded-3xl px-3'>
            <button className="  border-2 rounded-md mx-2 border-green-200  ">
              21
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default page;
