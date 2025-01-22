import React from "react";

// Sample Masonry Grid Component
const MasonryGrid = () => {
  const pins = [
    
    {
      id: "huh yujin",
      src: "https://i.pinimg.com/474x/0d/a3/9f/0da39fe11b6ed005238cb0cd0ddf2d4f.jpg",
      alt: "women",
    },
    {
      id: "rose",
      src: "https://i.pinimg.com/474x/14/ad/9c/14ad9cf661c0b19d73d968773bfbccb6.jpg",
      alt: "women",
    },
    {
      id: "kim chaeyon",
      src: "https://i.pinimg.com/236x/40/da/51/40da51c416e826cf8e4821fd9e46762e.jpg",
      alt: "women",
    },
    {
      id: "kazuha",
      src: "https://i.pinimg.com/236x/66/68/e4/6668e4679870ecac7b51908bd07994c5.jpg",
      alt: "women",
    },
    {
      id: "women-1",
      src: "https://i.pinimg.com/474x/66/f5/b8/66f5b8f75568921855bb0acc8fdebfd4.jpg",
      alt: "women",
    },
    {
      id: "women-2",
      src: "https://i.pinimg.com/474x/02/67/8b/02678b167b977588ee816ac90224bc87.jpg",
      alt: "women",
    },
    {
      id: "women-3",
      src: "https://i.pinimg.com/236x/4d/61/23/4d612311494998910f3f9789ad6834a2.jpg",
      alt: "women",
    },
    {
      id: "women-4",
      src: "https://i.pinimg.com/474x/30/c0/88/30c0887e5c067354dd8f1742e2e6a5ae.jpg",
      alt: "women",
    },
    {
      id: "women-5",
      src: "https://i.pinimg.com/236x/2c/0b/f8/2c0bf83ac0e4407e4c6b0d7757209446.jpg",
      alt: "women",
    },
    {
      id: "women-6",
      src: "https://i.pinimg.com/474x/e6/00/e3/e600e3ae956e23e403cca99492583f83.jpg",
      alt: "women",
    },
    {
      id: "women-7",
      src: "https://i.pinimg.com/474x/6f/76/7e/6f767e167d1f13b9d21b72366fc11933.jpg",
      alt: "women",
    },
  ];

  return (
    <div className="p-4 bg-gray-100">
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
        {pins.map((pin) => (
          <div key={pin.id} className="relative mb-4 break-inside-avoid">
            <img
              src={pin.src}
              alt={pin.alt}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
            <div className="absolute bottom-0 w-full flex justify-center p-2 bg-transparent rounded-b-lg hover:bg-opacity-60 hover:bg-black">
              <button className="text-white bg-transparentpx-3 py-1 rounded-lg">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Page = () => {
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

      <button className="btn btn-info bg-base-100 mr-2 ml-4 hover:text-white">
        Coffee
      </button>
      <button className="btn btn-success bg-base-100 m-2 hover:text-white">
        Library
      </button>
      <button className="btn btn-warning bg-base-100 m-2 hover:text-white">
        Dinner
      </button>
      <button className="btn btn-error bg-base-100 m-2 hover:text-white">
        Movie
      </button>
      <button className="btn btn-active bg-base-100 m-2 hover:text-white">
        Hangout
      </button>
      <button className="btn btn-active btn-neutral bg-base-100 m-2 text-black hover:text-white">
        Travelling
      </button>
      <button className="btn btn-active btn-primary bg-base-100 m-2 text-black hover:text-white">
        Camping
      </button>
      <button className="btn btn-active btn-secondary bg-base-100 m-2 text-black hover:text-white">
        Outdoor
      </button>

      {/* Masonry Grid Section */}
      <MasonryGrid />

      <div>
        <footer className="footer bg-neutral text-neutral-content p-20">
          <nav>
            <h6 className="footer-title">Contact us</h6>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">Instagram</a>
            <a className="link link-hover">TikTok</a>
            <a className="link link-hover">Email</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Term and Condition</a>
          </nav>
          <nav>
            <h6 className="footer-title">We Accept</h6>
            <a className="link link-hover">ABA bank</a>
            <a className="link link-hover">Acelida</a>
            <a className="link link-hover">KH QR</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Page;

