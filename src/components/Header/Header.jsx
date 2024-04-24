import headerSvg from "/images/TODO 2.svg";
import headerSvg2 from "/images/icon-moon.svg";

export default function Header() {
  return (
    <header
      className="p-[40px] bg-cover bg-center bg-no-repeat w-full "
      style={{ backgroundImage: "url('/images/bg-mobile-light.jpg')" }}
    >
      <div className=" flex justify-between items-center">
        <img className="h-[25px]" src={headerSvg} alt="headerSvg" />
        <img className="h-[30px]" src={headerSvg2} alt="headerSvg" />
      </div>
      <div className="mt-[40px] justify-start  rounded-lg bg-white shadow-md flex items-center gap-[12px] p-[20px]">
        <div className="shadow-custom  h-[20px] w-[20px] rounded-[50%] bg-white"></div>
        <input
          type="text"
          className="text-gray-600  text-[20px] font-normal leading-normal tracking-tighter"
          placeholder="Create a new todo…"
        />
      </div>
    </header>
  );
}
