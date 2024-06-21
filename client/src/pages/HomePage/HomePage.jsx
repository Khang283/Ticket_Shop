import React, { useState, useEffect } from 'react';
import HomePageImg1 from './assets/Homepage-NhaThoDucBa-1.png'
import Danhgiakhachhang from './assets/Danhgiakhachhang.png'
import Thapchuong from './assets/Thapchuong.png'
import Vatlieu from './assets/Vatlieu.png'
import Thietke from './assets/Thietke.png'
import Carillon from './assets/Carillon.png'

function MainContent() {
  return (
    <div className="flex overflow-hidden relative flex-col gap-5 self-stretch pl-20 mt-8 w-auto h-auto font-bold bg-black grow-0 min-h-[1033px] max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
      <img
        loading="lazy"
        src={HomePageImg1}
        className="object-cover absolute inset-0 size-full"
        style={{ filter: 'brightness(50%) contrast(100%)' }}
      />
      <div className="absolute bottom-5 left-5 text-8xl text-left text-white backdrop-blur-[2px] border-neutral-600 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        NHÀ THỜ ĐỨC BÀ
      </div>
      <div className="flex relative flex-col gap-0 self-stretch py-16 ml-auto w-auto h-auto bg-opacity-70 grow bg-zinc-800 text-zinc-300 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col content-start items-center self-center pb-20 mx-auto w-auto text-5xl max-md:ml-2.5 max-md:text-4xl">
          <div className="max-md:text-4xl">Kiến trúc </div>
          <div className="mt-4 max-md:text-4xl">đậm chất</div>
          <div className="mt-4 text-8xl max-md:text-4xl">PHÁP</div>
          <div className="mt-4 max-md:text-4xl">giữa lòng</div>
          <div className="mt-4 max-md:text-4xl">Sài Gòn</div>
        </div>
        <div className="self-end mt-44 mr-5 ml-3 w-auto h-auto text-3xl font-medium text-right grow-0 max-w-[400px] max-md:mt-10 max-md:ml-2.5">
          01 Công xã Paris, Bến Nghé, Quận 1, <br />
          Thành phố Hồ Chí Minh
        </div>
        <div className="justify-center items-end px-16 py-9 mx-auto mt-7 max-w-full text-4xl text-center text-black bg-zinc-300 rounded-[30px] w-[365px] max-md:px-5 max-md:ml-2.5 hover:bg-black hover:text-white transition-colors duration-300">
          Đặt vé ngay!
        </div>
        
      </div>
    </div>
  );
}

function HighlightsSection() {
  const highlights = [
    { src: Vatlieu, title: "Vật liệu", info: "Thông tin về Vật liệu" },
    { src: Thietke, title: "Thiết kế", info: "Thông tin về Thiết kế" },
    { src: Thapchuong, title: "Tháp chuông", info: "Thông tin về Tháp chuông" },
    { src: Carillon, title: "Carillon", info: "Thông tin về Carillon" }
  ];

  return (
    <section className="flex flex-col px-9 py-20 mt-8 w-full bg-[#AF8260] max-md:px-5 max-md:max-w-full">
      <h2 className="self-center text-4xl font-bold text-center text-zinc-800">Những nét đặc sắc:</h2>
      <div className="flex-wrap content-start mt-20 mb-14 max-md:my-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {highlights.map((highlight, index) => (
            <article key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-px pl-1.5 text-3xl font-bold text-center text-white max-md:mt-10 relative">
                <img loading="lazy" src={highlight.src} className="w-full aspect-square" alt={highlight.title} />
                <div className="self-center mt-10">{highlight.title}</div>
                <div className="flex absolute inset-0 justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <span className="px-4 text-xl text-white">{highlight.info}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatisticsSection() {
  return (
    <section className="flex justify-center items-center px-16 py-20 mt-8 w-full bg-zinc-800 max-md:px-5 max-md:max-w-full">
      <div className="mt-12 mb-6 max-w-full w-[960px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
            <div className="justify-center items-end px-5 pt-28 pb-20 w-full text-8xl font-bold text-right whitespace-nowrap grow bg-[#AF8260] text-zinc-50 max-md:px-5 max-md:mt-9 max-md:max-w-full max-md:text-4xl">
              1.605.983
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
            <div className="self-stretch my-auto text-6xl font-bold text-center text-[#AF8260] max-md:mt-10 max-md:text-4xl">
              LƯỢT
              <br />
              ĐẶT
              <br />
              VÉ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="flex justify-center items-center self-center px-16 py-14 mt-8 max-w-full text-3xl font-semibold text-center bg-orange-200 text-zinc-800 w-[1584px] max-md:px-5">
      <div className="flex flex-col items-center ml-14 max-w-full w-[676px]">
        <h2 className>Thắc mắc của bạn?</h2>
        <p className="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          Chúng tôi rất sẵn lòng giải đáp mọi thắc mắc của bạn, hãy liên lạc với chúng tôi thông qua:
        </p>
        <button className="justify-center items-center px-16 py-7 mt-20 max-w-full bg-zinc-800 rounded-[30px] text-neutral-200 w-[282px] max-md:px-5 max-md:mt-10 hover:bg-black hover:text-white transition-colors duration-300">
          Liên hệ
        </button>
      </div>
    </section>
  );
}

function CustomerReviewSection() {
  const reviews = [
    { text: "Đặt vé tham quan trên trang web này thật đơn giản và tiện lợi. Tôi đã có một trải nghiệm thú vị và đầy ý nghĩa khi được khám phá vẻ đẹp lịch sử của Nhà thờ Đức Bà Sài Gòn. Sẽ quay lại lần nữa!", name: "Nguyễn Văn Nam" },
    { text: "Trang web rất dễ sử dụng, và dịch vụ khách hàng là xuất sắc. Tôi rất hài lòng với trải nghiệm của mình!", name: "Trần Thị Hồng" },
    { text: "Giá vé hợp lý, quy trình đặt vé trực tuyến rất nhanh chóng và dễ dàng. Cảm ơn vì đã cung cấp một dịch vụ tuyệt vời!", name: "Lê Anh Tuấn" },
    { text: "Tôi rất ấn tượng với sự chuyên nghiệp và mức độ hỗ trợ khách hàng mà tôi nhận được. Trang web này thực sự làm nên sự khác biệt!", name: "Phạm Bảo Khánh" },
    { text: "Đây là lần đầu tiên tôi sử dụng trang web này để đặt vé và tôi phải nói rằng tôi rất ấn tượng. Tất cả mọi thứ từ bắt đầu đến kết thúc đều suôn sẻ và dễ dàng.", name: "Đỗ Minh Châu" }
  ];
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col mt-8 w-full max-md:max-w-full">
      <div className="flex max-md:flex-col max-md:gap-0">
        <figure className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={Danhgiakhachhang}
            className="grow mt-28 w-full aspect-[2.56] max-md:mt-10 max-md:max-w-full"
            alt="Customer review image"
          />
        </figure>
        <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
          <div className="flex justify-center items-center px-16 py-14 w-full grow bg-zinc-800 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[560px]">
              <h3 className="self-center text-3xl font-bold text-center text-white">Đánh giá của khách hàng:</h3>
              <blockquote className="mt-9 text-3xl font-extralight text-center text-white max-md:max-w-full">
                “{reviews[currentReview].text}”
              </blockquote>
              <figcaption className="flex flex-col self-end mt-14 max-w-full w-[307px] max-md:mt-10 max-md:mr-2.5">
                <p className="self-end text-3xl font-extralight text-center text-white">{reviews[currentReview].name}</p>
                <div className="flex gap-5 justify-between self-start mt-7">
                  <div className="shrink-0 w-2.5 h-2.5 rounded-full border border-white border-solid bg-zinc-300 stroke-[1px]" />
                  <div className="shrink-0 w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <div className="shrink-0 w-2.5 h-2.5 rounded-full bg-zinc-300" />
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col bg-white">
      <Navbar />
      <MainContent />
      <section className="self-center mt-8 w-full max-w-[1809px] max-md:max-w-full">
  <div className="flex gap-0 max-md:flex-col max-md:gap-0">
    <figure className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b69cf47d0ea84b273bdddfbac042e3d18c92ec9260f4a9561bfd6026a1508a3?apiKey=cde21ae57bc640bfb900d6641213c80e&"
        className="grow self-center aspect-[1.04] h-[764px] w-[797px] max-md:max-w-full"
        alt="Nhà thờ Đức Bà image"
      />
    </figure>
    <div className="flex flex-col ml-0 w-[38%] max-md:ml-0 max-md:w-full">
      <section className="flex flex-col px-20 pt-20 pb-12 w-full font-bold text-white grow bg-zinc-800 max-md:px-5 max-md:max-w-full">
        <h2 className="mt-14 text-4xl max-md:mt-10 max-md:max-w-full">Địa điểm tham quan không thể bỏ qua!</h2>
        <p className="mt-32 text-3xl text-right max-md:mt-10 max-md:max-w-full">
          <span className="font-semibold">Không chỉ là biểu tượng của Công giáo ở Việt Nam, mà còn là một trong những công trình kiến trúc độc đáo của</span>
          <span className="font-semibold">Thành phố Hồ Chí Minh</span>
          <span className="font-semibold">và điểm đến nổi tiếng với du khách.</span>
        </p>
        <button className="justify-center self-center px-10 py-7 mt-24 text-4xl italic font-semibold text-center bg-orange-200 rounded-[30px] text-zinc-800 max-md:px-5 max-md:mt-10 hover:bg-black hover:text-white transition-colors duration-300">
          Tìm hiểu ngay!
        </button>
      </section>
    </div>
    <figure className="flex flex-col ml-0 w-[18%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c221070453b675c741ce2778100095f0ec9178353983a8a33853712a14bc2e88?apiKey=cde21ae57bc640bfb900d6641213c80e&"
        className="grow shrink-0 max-w-full aspect-[0.43] w-[329px]"
        alt="Additional image"
      />
    </figure>
  </div>
</section>
      <StatisticsSection />
      <HighlightsSection />
      <CustomerReviewSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default MyComponent;