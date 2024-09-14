
import { useState } from "react";
import { close, menu } from "../../assets";
import { navLinks } from "../../assets/constants/index";
import { Button } from "../generic/Button";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <span className="text-white text-xl font-bold">Proxima Fitness</span>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        { navLinks.map((nav, index) => {
          return (
            <div key={ index }>
            { nav.id === "sign-in" ?
              <a href="https://app.proximafitness.com/"><Button text={ "Sign in" } styles={ `py-2` } /></a>
              :
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
              <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            }
          </div>
          )
      } ) }
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => {
              return (
                <div key={ index }>
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                  >

                { nav.id === "sign-in" ?
                  <a href="https://app.proximafitness.com/">{nav.title}</a>
                :
                  <a href={`#${nav.id}`}>{nav.title}</a>
                }
                </li>
              </div>
            ) })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

