import React, { useState } from "react";
import { nav } from "../data/Nav";
import { Link, useLocation } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="container mx-auto z-50">
      <div className="nav mx-2 md:mx-10 mt-5 flex items-center justify-between rounded-xl p-4">
        <Link to={'/'}>
          <img
            src={require("../assets/currease logo 1.jpg")}
            alt="logo"
            className="w-[105px] object-container"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-8 hover:cursor-pointer hover font-semibold">
          {nav.map((data) => (
            <li
              key={data.id}
              className={
                location.pathname === data.path
                  ? "text-primary-color"
                  : " text-black"
              }
            >
              <Link to={data.path}>{data.name}</Link>
            </li>
          ))}
          <Link to={"/shop"}>
            <li
              onClick={() => setOpen(false)}
              className="flex bg p-3 px-5 gap-2"
            >
              <h1 className="text-white">Shop</h1>
              <img
                src={require("../assets/icons/Vector.png")}
                alt="vector_icon"
                className=""
              />
            </li>
          </Link>
        </ul>
        <div className="md:hidden">
          {!open ? (
            <LuMenu size={32} onClick={() => setOpen(!open)} />
          ) : (
            <>
              <IoClose size={32} onClick={() => setOpen(!open)} />
              <div className="w-full left-0 my-3 p-3 absolute">
                <div className="bg-white shadow p-4 rounded">
                  {nav.map((data) => (
                    <div
                      key={data.id}
                      onClick={() => setOpen(false)}
                      className={
                        location.pathname === data.path
                          ? "text-primary-color"
                          : " text-black"
                      }
                    >
                      <Link to={data.path}>{data.name}</Link>
                    </div>
                  ))}
                  <Link to={"/shop"}>
                    <div
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center bg p-3 px-5 gap-2 mt-3"
                    >
                      <h1 className="text-white">Shop</h1>
                      <img
                        src={require("../assets/icons/Vector.png")}
                        alt="vector_icon"
                        className=""
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
