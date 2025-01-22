import React from "react";

// Sample Masonry Grid Component
const MasonryGrid = () => {
  const pins = [
    {
      id: "jeon jungkook",
      src: "https://i.pinimg.com/474x/9c/e9/ef/9ce9ef059ed7cbf0eaadffbe3c1749e6.jpg",
      alt: "man",
    },
    {
      id: "sakurada kenshin",
      src: "https://i.pinimg.com/474x/a7/1a/c4/a71ac4806fcccbda10e8bc465d762f6d.jpg",
      alt: "man",
    },
    {
      id: "man Vanda",
      src: "https://i.pinimg.com/236x/1e/11/3a/1e113a912572c0cf3be0be77a19dcf10.jpg",
      alt: "man",
    },
    {
      id: "man-1",
      src: "https://i.pinimg.com/236x/dd/a5/e9/dda5e999ea82429e4cf78d96ff3c56e1.jpg",
      alt: "man ",
    },
    {
      id: "man-2",
      src: "https://i.pinimg.com/736x/85/22/6a/85226a6a1e8c164cf49b24e770c232aa.jpg",
      alt: "man",
    },
    {
      id: "man-3",
      src: "https://i.pinimg.com/236x/5e/26/6d/5e266d06743353cd116b07c92c647bdd.jpg",
      alt: "man",
    },
    {
      id: "man-4",
      src: "https://i.pinimg.com/736x/42/e9/22/42e922ee49236a84af2158cb13ea186e.jpg",
      alt: "man",
    },
    {
      id: "man-5",
      src: "https://i.pinimg.com/474x/d0/90/53/d090531459e6c9bb6c5d3be49e63ba98.jpg",
      alt: "man",
    },
    {
      id: "man-6",
      src: "https://i.pinimg.com/474x/4c/d9/5f/4cd95f77464a9319cc2de4aed5ab05aa.jpg",
      alt: "man",
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
