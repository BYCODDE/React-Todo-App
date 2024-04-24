/* eslint-disable react/prop-types */
import headerSvg from "/images/TODO 2.svg";
import moon from "/images/icon-moon.svg";
import sun from "/images/icon-sun.svg";
export default function Header({ toggleDarkMode, dark }) {
  return (
    <header
      className="  p-[40px] bg-cover bg-center bg-no-repeat w-full "
      style={{ backgroundImage: "url('/images/bg-mobile-light.jpg')" }}
    >
      <div className=" flex justify-between items-center">
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
      <div className="cursor-pointer mt-[40px] justify-start  rounded-lg bg-white shadow-md flex items-center gap-[20px] p-[20px]">
        <div className="ml-[20px] shadow-custom  h-[25px] w-[25px] rounded-[50%] bg-white"></div>
        <input
          type="text"
          className=" w-[100%]   text-gray-600  text-[20px] font-normal leading-normal tracking-tighter"
          placeholder="Create a new todo…"
        />
      </div>
    </header>
  );
}
