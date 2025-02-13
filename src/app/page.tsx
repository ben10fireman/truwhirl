import Link from "next/link";
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
      id: "man Vanda",
      src: "https://i.pinimg.com/236x/1e/11/3a/1e113a912572c0cf3be0be77a19dcf10.jpg",
      alt: "man",
    },
    {
      id: "man-1",
      src: "https://i.pinimg.com/236x/dd/a5/e9/dda5e999ea82429e4cf78d96ff3c56e1.jpg",
      alt: "man",
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
      id: "man-6",
      src: "https://i.pinimg.com/474x/4c/d9/5f/4cd95f77464a9319cc2de4aed5ab05aa.jpg",
      alt: "man",
    },
    {
      id: "women-6",
      src: "https://i.pinimg.com/236x/f9/aa/93/f9aa936cc712760dacdcd7fc02163766.jpg",
      alt: "women",
    },
    {
      id: "man-7",
      src: "https://i.pinimg.com/236x/ce/ba/e4/cebae4d8b3554baf9569ba20f0c5e882.jpg",
      alt: "man",
    },
    {
      id: "women-7",
      src: "https://i.pinimg.com/236x/df/b6/2b/dfb62b3832b3d4d187b53f9e7bfba952.jpg",
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
              <button className="text-white bg-transparent px-3 py-1 rounded-lg">
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
      {/* Navbar */}
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
                <Link href="/">Home</Link>
              </li>
              <li>
                <details>
                  <summary>Gender</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="/women">Women</Link>
                    </li>
                    <li>
                      <Link href="/men">Men</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/soulmate">Soulmate</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Link href="/account/log-in">LogIn</Link>
              </li>
              <li>
                <details>
                  <summary>Contact Us</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="https://facebook.com">Facebook</Link>
                    </li>
                    <li>
                      <Link href="https://instagram.com">Instagram</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl flex text-pink-500">Truewhirl</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/" className="mx-7">Home</Link>
            </li>
            <li>
              <details>
                <summary className="mx-7">Gender</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/women">Women</Link>
                  </li>
                  <li>
                    <Link href="/men">Men</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/soulmate" className="mx-7">Soulmate</Link>
            </li>
            <li>
              <Link href="/profile" className="mx-7">Profile</Link>
            </li>
            <li>
              <details>
                <summary className="mx-7">Account</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/account/log-in">Login</Link>
                  </li>
                  <li>
                    <Link href="/account/sign-up">Sign Up</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="mx-7">Contact Us</summary>
                <ul className="p-2">
                  <li>
                    <Link href="https://facebook.com">Facebook</Link>
                  </li>
                  <li>
                    <Link href="https://instagram.com">Instagram</Link>
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

      {/* Buttons Section */}
      <div className="p-4">
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
      </div>

      {/* Masonry Grid Section */}
      <MasonryGrid />

      {/* Footer Section */}
      <footer className="footer bg-neutral text-neutral-content p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <nav>
            <h6 className="footer-title">Contact us</h6>
            <Link href="https://facebook.com" className="link link-hover">Facebook</Link>
            <Link href="https://instagram.com" className="link link-hover">Instagram</Link>
            <Link href="https://tiktok.com" className="link link-hover">TikTok</Link>
            <Link href="mailto:example@example.com" className="link link-hover">Email</Link>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <Link href="/about" className="link link-hover">About us</Link>
            <Link href="/terms" className="link link-hover">Terms and Conditions</Link>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <Link href="/privacy" className="link link-hover">Privacy Policy</Link>
            <Link href="/cookies" className="link link-hover">Cookie Policy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Page;