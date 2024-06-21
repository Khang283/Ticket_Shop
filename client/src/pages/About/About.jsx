import * as React from "react";
import PropTypes from 'prop-types';

const Image = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} loading="lazy" />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const StaffMember = ({ name, role, imageSrc }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow items-center-px font-semibold text-center text-[#AF8260] max-md:mt-10">
      <Image src={imageSrc} alt={`Image of ${name}`} className="self-stretch w-full aspect-[0.87]" />
      <div className="mt-7 text-3xl">{name}</div>
      <div className="mt-3.5 text-2xl">{role}</div>
    </div>
  </div>
);

StaffMember.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

const MyComponent = () => (
  <div className="flex flex-col bg-white">
    <section className="flex overflow-hidden relative flex-col items-center self-center px-16 pb-20 mt-44 w-full text-center max-w-[1575px] min-h-[712px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/590c7ce4aaae14c9c7c7bd032feb0a78b3c72c747fdee1b239026655b29d1650?apiKey=406e425c58704709985eea4d57b2c876&" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative z-10 flex-col px-16 py-16 mt-0 mb-80 max-w-full bg-[#AF8260] w-[830px] max-md:px-5 max-md:mb-10">
        <h1 className="self-center text-6xl font-bold text-zinc-800 max-md:text-4xl"> GIỚI THIỆU </h1>
        <h2 className="mt-12 text-4xl font-semibold text-white max-md:mt-10 max-md:max-w-full"> Vương cung thánh đường chính tòa Đức Mẹ Vô nhiễm Nguyên tội </h2>
      </div>
    </section>
    <section className="self-center mt-44 ml-14 max-w-full w-[1169px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
          <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c87ee9f8831491f6b89671b0e0e05865517c5a816a48b63b726079f7fb19d34?apiKey=406e425c58704709985eea4d57b2c876&" alt="Church Image" className="grow w-full aspect-[0.76] max-md:mt-10 max-md:max-w-full" />
        </div>
        <section className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 mt-4 text-black max-md:mt-10 max-md:max-w-full">
            <h3 className="text-4xl font-semibold max-md:max-w-full"> Nhà thờ chính tòa Đức Bà Sài Gòn </h3>
            <p className="mt-11 text-2xl font-light max-md:mt-10 max-md:max-w-full">
              Nhà thờ không chỉ là biểu tượng của Công giáo ở Việt Nam, mà còn là một trong những công trình kiến trúc độc đáo của Thành phố Hồ Chí
              Minh và điểm đến nổi tiếng với du khách. Tên gọi ban đầu của nhà thờ là Nhà thờ Sài Gòn (tiếng Pháp: l'eglise de Saïgon), tên gọi Nhà
              thờ Đức Bà bắt đầu được sử dụng từ năm 1959 bằng việc đặt Tượng Đức Bà Hòa Bình trước khuôn viên.
              <br />
              Nhà thờ là nơi tấn phong nhiều giám mục, đón tiếp các đại diện Tòa thánh Rôma, nhậm chức của các Tổng giám mục và cũng là nơi thụ phong
              của hàng ngàn linh mục.
            </p>
          </div>
        </section>
      </div>
    </section>
    <section className="px-14 py-6 mt-16 w-full bg-[#AF8260] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c8df93881e314913ab46a0a883bb4bf6a3d4245e8401dfc53ed46b96d96687b?apiKey=406e425c58704709985eea4d57b2c876&"
          alt="Building Material"
          className="shrink-0 max-w-full aspect-square w-[300px] max-md:mt-10"
        />
        <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
          <article className="flex flex-col self-stretch my-auto text-zinc-800 max-md:mt-10 max-md:max-w-full">
            <h4 className="text-3xl font-bold max-md:max-w-full"> Vật liệu: </h4>
            <p className="mt-5 text-2xl font-light max-md:max-w-full">
              Trong quá trình xây dựng, toàn bộ vật liệu xây dựng từ xi măng, sắt thép đến ốc vít đều mang từ Pháp sang. Ngoài của công trình xây bằng loại gạch đặt làm tại
              Marseille để trần, không tô trát, không bám bụi rêu, đến nay vẫn còn màu sắc hồng tươi. Một số ngói vỡ trong nhà thờ có in hàng chữ Guichard Carvin, Marseille St André
              France, mảnh ngói khác lại có hàng chữ Wang-Tai Saigon, có thể đây là mảnh ngói được sản xuất sau tại Sài Gòn dùng để thay thế những mảnh ngói vỡ trong thời gian
              Chiến tranh thế giới thứ hai do những cuộc không kích của quân Đồng Minh. Toàn bộ thánh đường có 56 ô cửa kính màu do hãng Lorin của tỉnh Chartres (Pháp) sản xuất.
            </p>
          </article>
        </div>
      </div>
    </section>
    <section className="self-end px-16 py-6 mt-32 max-w-full bg-zinc-800 w-[1713px] max-md:px-5 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <article className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-right max-md:mt-10 max-md:max-w-full">
            <h5 className="self-end text-3xl font-bold text-[#AF8260]"> Thiết kế: </h5>
            <p className="mt-8 text-2xl font-light text-orange-200 max-md:max-w-full">
              Trong quá trình xây dựng, toàn bộ vật liệu xây dựng từ xi măng, sắt thép đến ốc vít đều mang từ Pháp sang. Ngoài của công trình xây bằng loại gạch đặt làm tại Marseille
              để trần, không tô trát, không bám bụi rêu, đến nay vẫn còn màu sắc hồng tươi. Một số ngói vỡ trong nhà thờ có in hàng chữ Guichard Carvin, Marseille St André France,
              mảnh ngói khác lại có hàng chữ Wang-Tai Saigon, có thể đây là mảnh ngói được sản xuất sau tại Sài Gòn dùng để thay thế những mảnh ngói vỡ trong thời gian Chiến tranh
              thế giới thứ hai do những cuộc không kích của quân Đồng Minh. Toàn bộ thánh đường có 56 ô cửa kính màu do hãng Lorin của tỉnh Chartres (Pháp) sản xuất.
            </p>
          </div>
        </article>
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a6b9c16ffc86a6a2f7ec7a339821bd2a4a7fc6040e3d92dad1c154ec5b158b8?apiKey=406e425c58704709985eea4d57b2c876&" alt="Design" className="shrink-0 max-w-full aspect-square w-[300px] max-md:mt-10" />
      </div>
    </section>
    <section className="px-16 py-6 mt-32 w-full bg-[#AF8260] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbabeaaf65a15f9e0cdab59f706a7b77ac54c9669cea1ac228b2df3e773502b8?apiKey=406e425c58704709985eea4d57b2c876&" alt="Bell Tower" className="shrink-0 max-w-full aspect-square w-[300px] max-md:mt-10" />
        <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
          <article className="flex flex-col mt-3 text-zinc-800 max-md:mt-10 max-md:max-w-full">
            <h6 className="text-3xl font-bold max-md:max-w-full"> Tháp chuông: </h6>
            <p className="mt-6 text-2xl font-light max-md:max-w-full">
              Ban đầu, hai tháp chuông cao 36,6 m, không có mái và chỉ có độc một chiếc cầu thang hẹp chừng 40 cm bề ngang. Nội thất gác chuông rất tối và sàn được lót sơ sài bằng
              những miếng gỗ nhỏ cách khoảng, nhìn xuống thấy sâu hút. Vào năm 1895, thánh đường xây thêm hai mái chóp để che gác chuông cao 21 m, theo thiết kế của kiến trúc sư
              Gardes, tổng cộng tháp chuông cao 57 m.
            </p>
          </article>
        </div>
      </div>
    </section>
    <section className="self-end px-14 py-6 mt-32 max-w-full bg-zinc-800 w-[1713px] max-md:px-5 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
          <article className="flex flex-col mt-5 text-right max-md:mt-10 max-md:max-w-full">
            <h5 className="self-end text-3xl font-bold text-[#AF8260]"> Thiết kế: </h5>
            <p className="mt-7 text-2xl font-light text-orange-200 max-md:max-w-full">
              Cuối năm 2022, một dàn carillon 25 chuông đã được nhập về và lắp đặt trong khuôn viên phía trước Nhà thờ. Các chuông được treo trong một kết cấu gỗ linh sam được chế
              tạo tại Đức, với những đặc tính phù hợp với điền kiện khí hậu và mục đích sử dụng tại Sài Gòn. Nghi thức làm phép dàn carillon do TGM Giuse Nguyễn Năng chủ sự đã diễn
              ra vào sáng ngày 23 tháng 12 năm 2022.[6] Tên của bốn vị tổng giám mục của Tổng giáo phận kể từ 1960 được đúc nổi trên bốn chuông của carillon.
            </p>
          </article>
        </div>
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb878fecc2827ac26f90e59662f43485ece6c3c85cfaaec1c75155b23c63259b?apiKey=406e425c58704709985eea4d57b2c876&" alt="Carillon Design" className="shrink-0 max-w-full aspect-square w-[300px] max-md:mt-10" />
      </div>
    </section>
    <section className="flex justify-center items-center px-16 py-16 mt-24 w-full bg-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-px w-full max-w-[1633px] max-md:max-w-full">
        <h4 className="self-center text-4xl font-bold text-center text-white"> Đội ngũ nhân sự: </h4>
        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {[
              { name: "Trọng Nhân", role: "Quản lý", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6fbe0302ba41d3ec56007ac6175944533825497ea2eba4a980d240cb03b4897d?apiKey=406e425c58704709985eea4d57b2c876&" },
              { name: "Tiến Đạt", role: "Nhân viên kỹ thuật", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a7e61ac0fd872df2ec024418bcd8a04e5e2a454e9405bb3ef05283ab067b4a8?apiKey=406e425c58704709985eea4d57b2c876&" },
              { name: "Thành Nhân", role: "Nhân viên kỹ thuật", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5df075b74db76d5f519556e89e112770b941485ee650bffbcb0529186730896?apiKey=406e425c58704709985eea4d57b2c876&" },
              { name: "Minh Phước", role: "Nhân viên kỹ thuật", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b46d81588a4d262d657edbbd18123bc2d4d926ba14cad8d3286c3e15d996f09b?apiKey=406e425c58704709985eea4d57b2c876&" },
            ].map((member) => (
              <StaffMember key={member.name} name={member.name} role={member.role} imageSrc={member.src} />
            ))}
          </div>
        </div>
        <div className="mt-36 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {[
              { name: "An Vũ", role: "Nhân viên kỹ thuật", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b96b16805309f8a795e221d6daac750e816e702011380e4e3a90c0acad92fd28?apiKey=406e425c58704709985eea4d57b2c876&" },
              { name: "Bảo Khang", role: "Nhân viên kỹ thuật", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/acf4c8d43f4e9e30af2a88161979e10c9f30f34ab744d0d8932338ef8552fa82?apiKey=406e425c58704709985eea4d57b2c876&" },
              { name: "Việt Bách", role: "Nhân viên kỹ thuật", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c14a19d78bdc0edaa7afff5698c7b5310e471eda8b95d341b5dcfe2b59678f2?apiKey=406e425c58704709985eea4d57b2c876&" },
              { name: "Quang Khải", role: "Nhân viên kỹ thuật", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c1f7a20dba1e8e86f3026eefbe7b55c122fde21b83b334a059823ec5999a97c?apiKey=406e425c58704709985eea4d57b2c876&" },
            ].map((member) => (
              <StaffMember key={member.name} name={member.name} role={member.role} imageSrc={member.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="self-center mt-32 w-full max-w-[1732px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-center items-center max-md:flex-col max-md:gap-0">
        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/82f7a89bb2ad9491990bf60546b93f1740d7bdea45ea3aab8cbce8a99ab7e366?apiKey=406e425c58704709985eea4d57b2c876&" alt="Travel Quote" className="flex-1 max-w-full aspect-[1.75] max-md:max-w-full" />
        <div className="flex-1 max-w-[50%] max-md:max-w-full">
          <article className="flex flex-col items-start p-20 w-full font-semibold text-center text-white bg-[#AF8260] max-md:px-5 max-md:max-w-full">
            <blockquote className="text-4xl italic">
              “Đi một ngày đàng, học một sàng khôn.”
            </blockquote>
            <cite className="mt-16 text-3xl"> Tục ngữ Việt Nam </cite>
          </article>
        </div>
      </div>
    </section>
  </div>
);

export default MyComponent;