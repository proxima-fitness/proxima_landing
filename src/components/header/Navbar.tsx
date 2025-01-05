
import { useState } from "react";
import { navLinks } from "../../assets/constants/index";
import { Button } from "../generic/Button";
import NavDrawer from "./NavDrawer";
import { proxima_logo } from "public";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={ (proxima_logo as any).src } alt="Proxima Logo" className="absolute w-auto h-[400px] -m-20 z-[1]"
        />
      {/* <span className="text-white text-xl font-bold font-second">Proxima Fitness</span> */}

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[6]">
        { navLinks.map((nav, index) => {
          return (
            <div key={ index }>
            { nav.id === "cta" ?
                <a href={`#${nav.id}`}>
                    <Button text={ "Download App" } styles={ `py-2` }/>
                </a>
              : nav.id === "sign-in" ?
                <li
                    key={nav.id}
                    className={`font-main font-normal cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                    onClick={() => setActive(nav.title)}
                >
                <a href="https://app.proximafitness.com/">Log In</a>

                </li>
                :
              <li
                key={nav.id}
                className={`font-main font-normal cursor-pointer text-[16px] ${
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
      <NavDrawer />
        <div
        >
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

