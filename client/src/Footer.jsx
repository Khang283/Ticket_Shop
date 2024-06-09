import React from "react";

const NavigationLink = ({ text }) => (
  <div className="mt-1.5">{text}</div>
);

const InformationField = ({ label, info }) => (
  <div className="mt-5 max-md:max-w-full">
    <span className="font-bold">{label}</span>: {info}
  </div>
);

function MyComponent() {
  return (
    <section className="flex flex-col justify-center">
      <div className="flex gap-5 px-11 py-6 w-full bg-[#803D3B] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto my-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <figure className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37e17b5eba6b1e8ba90ce1addc81c97e3f9a2ce9df44ba3bc25cebe7ad3c5aa8?apiKey=406e425c58704709985eea4d57b2c876&"
                alt=""
                className="grow w-full border border-solid aspect-[1.33] border-black border-opacity-30 max-md:mt-10"
              />
            </figure>
            <nav className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <header className="text-4xl font-bold text-white">
                Chuyển hướng:
              </header>
              <div className="flex flex-col gap-10 text-3xl font-semibold text-orange-200 max-md:mt-10 mt-10">
                <NavigationLink text="Trang chủ" />
                <NavigationLink text="Giới thiệu" />
                <NavigationLink text="Đặt vé" />
                <NavigationLink text="Liên hệ" />
              </div>
            </nav>
          </div>
        </div>
        <aside className="flex flex-col gap-10 pl-10 text-3xl font-medium text-right text-zinc-300 max-md:max-w-full">
          <header className="text-4xl font-bold text-white max-md:max-w-full">
            Nhà thờ Đức Bà
          </header>
          <InformationField
            label="Địa chỉ"
            info="01 Công xã Paris, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh"
          />
          <InformationField label="Hotline" info="19001509" />
          <InformationField label="E-mail" info="datvenhathoducba@info.com" />
        </aside>
      </div>
    </section>
  );
}

export default MyComponent;