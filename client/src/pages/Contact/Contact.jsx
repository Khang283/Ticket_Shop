import * as React from "react";

const ContactFormField = ({ label, id, type = "text", className = "", ...props }) => (
  <div className="flex flex-col grow px-5 pt-3.5">
    <label htmlFor={id} className="text-3xl font-semibold text-black whitespace-nowrap">
      {label}
    </label>
    <input
      id={id}
      type={type}
      className={`mt-2 bg-zinc-300 h-[110px] ${className}`}
      aria-label={label}
      {...props}
    />
  </div>
);

const App = () => (
  <>
  <Navbar />
  <div className="flex flex-col items-center bg-white">
    <section className="flex overflow-hidden relative flex-col items-center px-16 pb-20 mt-44 w-full text-center max-w-[1575px] min-h-[712px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ce4a0e78cb39e2c4789121317d2a0cebe95e97e0299b48a936e2c32dfe0d525?apiKey=406e425c58704709985eea4d57b2c876&" alt="Background" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative z-10 flex-col px-16 py-16 mt-0 mb-80 max-w-full bg-stone-500 w-[830px] max-md:px-5 max-md:mb-10">
        <h1 className="self-center text-6xl font-bold text-zinc-800 max-md:text-4xl"> LIÊN HỆ </h1>
        <p className="mt-14 text-3xl font-semibold text-white max-md:mt-10 max-md:max-w-full"> Hãy gửi thắc mắc, góp ý của bạn về việc tham quan chúng tôi sẽ giải đáp sớm nhất có thể! </p>
      </div>
    </section>

    <main>
      <h2 className="mt-32 text-4xl font-bold text-center text-black max-md:mt-10"> LIÊN HỆ </h2>
      <form className="mt-16 max-w-full w-[981px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <ContactFormField label="Họ" id="firstName" />
          <ContactFormField label="Tên" id="lastName" />
        </div>
        <div className="flex gap-5 mt-7 max-md:flex-col max-md:gap-0">
          <ContactFormField label="E-mail" id="email" type="email" />
          <ContactFormField label="Số điện thoại" id="phone" type="tel" />
        </div>
        <div className="mt-10">
          <label htmlFor="feedback" className="text-3xl font-semibold text-black max-md:max-w-full"> Thắc mắc/góp ý của bạn </label>
          <textarea id="feedback" className="shrink-0 mt-2 max-w-full bg-zinc-300 h-[232px] w-[981px]" aria-label="Thắc mắc/góp ý của bạn" />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="px-16 py-8 mt-12 max-w-full text-3xl font-semibold text-center text-white whitespace-nowrap bg-pink-900 rounded-[30px] w-[300px] max-md:px-5 max-md:mt-10"> Gửi </button>
        </div>
      </form>
    </main>
    <Footer />
  </div>
  </>
);

export default App;