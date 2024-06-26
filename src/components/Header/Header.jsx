/* eslint-disable react/prop-types */
import headerSvg from "/images/TODO 2.svg";
import moon from "/images/icon-moon.svg";
import sun from "/images/icon-sun.svg";
export default function Header({ toggleDarkMode, dark, handleKeyPress }) {
  return dark ? (
    <header
      className=" md:bg-[url('/images/bg-desktop-light.jpg')]  md:flex md:justify-center md:items-center md:flex-col p-[40px] bg-cover bg-center bg-no-repeat w-full "
      style={{
        backgroundImage: "url('/images/bg-mobile-light.jpg')",
      }}
    >
      <div className="md:gap-[375px] flex justify-between items-center">
        <img className="h-[25px]" src={headerSvg} alt="headerSvg" />
        {dark ? (
          <img
            onClick={toggleDarkMode}
            className="h-[30px] cursor-pointer"
            src={moon}
            alt="moon"
          />
        ) : (
          <img
            onClick={toggleDarkMode}
            className="h-[30px] cursor-pointer"
            src={sun}
            alt="sun"
          />
        )}
      </div>
      <div className=" md:w-[540px] cursor-pointer mt-[40px] justify-start  rounded-lg bg-white shadow-md flex items-center gap-[20px] p-[20px]">
        <div className="ml-[20px] shadow-custom  h-[25px] w-[30px] rounded-[50%] bg-white"></div>
        <input
          onKeyDown={handleKeyPress}
          type="text"
          className="outline-none   w-[100%]   text-gray-600  text-[15px] font-normal leading-normal tracking-tighter"
          placeholder="Create a new todo…"
        />
      </div>
    </header>
  ) : (
    <header
      className="md:bg-[url('/images/bg-desktop-dark.jpg')]    md:flex md:justify-center md:items-center md:flex-col p-[40px] bg-cover bg-center bg-no-repeat w-full "
      style={{ backgroundImage: "url('/images/bg-mobile-dark.jpg')" }}
    >
      <div className=" md:gap-[375px]  flex justify-between items-center">
        <img className="h-[25px]" src={headerSvg} alt="headerSvg" />
        {dark ? (
          <img
            onClick={toggleDarkMode}
            className="h-[30px] cursor-pointer"
            src={moon}
            alt="moon"
          />
        ) : (
          <img
            onClick={toggleDarkMode}
            className="h-[30px] cursor-pointer"
            src={sun}
            alt="sun"
          />
        )}
      </div>
      <div className=" md:w-[540px] cursor-pointer mt-[40px] justify-start  rounded-lg bg-customColor  shadow-lg flex items-center gap-[20px] p-[20px]">
        <div className="ml-[20px] shadow-customColor2 h-[25px] w-[30px] rounded-[50%] bg-customColor "></div>
        <input
          onKeyDown={handleKeyPress}
          type="text"
          className=" outline-none   w-[100%]  bg-customColor text-customColor2  text-[15px] font-normal leading-normal tracking-tighter"
          placeholder="Create a new todo…"
        />
      </div>
    </header>
  );
}
