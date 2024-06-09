import * as React from "react";

const menuItems = ["Trang chủ", "Giới thiệu", "Đặt vé", "Liên hệ"];

function MenuItems() {
  return (
    <nav className="flex gap-24 items-center text-2xl font-semibold text-center text-orange-200 max-md:flex-wrap max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f44ca790a14070faca4eaf28dd92410d97ba5f8a0fe5bbc38140e31eb6dc4d4?apiKey=cde21ae57bc640bfb900d6641213c80e&"
        alt="Logo"
        className="shrink-0 self-stretch max-w-full border border-solid aspect-[2.33] border-black border-opacity-30 w-[230px]"
      />
      {menuItems.map((item, index) => (
        <a href="#" key={index} className="flex-auto self-stretch my-auto">
          {item}
        </a>
      ))}
    </nav>
  );
}

function Icons() {
  return (
    <div className="flex gap-5 justify-between my-auto">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec487db84d6211694f7a901132d6914e8ba2da651b30141d9dae12c7c6d6659c?apiKey=cde21ae57bc640bfb900d6641213c80e&"
        alt="First Icon"
        className="shrink-0 self-start aspect-square w-[45px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd22a6e8736f43a03dacf326aedaeb844ad03fab78a1b085226ba55abbe65229?apiKey=cde21ae57bc640bfb900d6641213c80e&"
        alt="Second Icon"
        className="shrink-0 aspect-[1.06] w-[51px]"
      />
    </div>
  );
}

function Navbar() {
  return (
    <header className="flex justify-between pr-7 w-full bg-[#803D3B] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <MenuItems />
      <Icons />
    </header>
  );
}

function MyComponent() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default MyComponent;