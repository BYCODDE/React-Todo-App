import headerSvg from "/images/TODO 2.svg";
import headerSvg2 from "/images/icon-moon.svg";

export default function Header() {
  return (
    <header
      className="bg-cover bg-center bg-no-repeat w-full h-screen"
      style={{ backgroundImage: "url('/images/bg-mobile-light.jpg')" }}
    >
      <div className=" flex justify-between items-center">
        <img src={headerSvg} alt="headerSvg" />
        <img src={headerSvg2} alt="headerSvg" />
      </div>
      <div className=""></div>
    </header>
  );
}
