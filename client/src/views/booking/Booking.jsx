import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DL_Img from "../../assets/DL_Img.png";
const Booking = () => {
  const [ticket, setTicket] = useState("Vé người lớn");
  const [price, setPrice] = useState(100000);

  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState(new Date());
  const [total, setTotal] = useState(100000);

  const navigate = useNavigate();

  // useEffect(() => {
  //   async function caculateTotal() {
  //     try {
  //       // const accessToken = await AsyncStorage.getItem('accessToken');
  //       // setToken(accessToken);

  //       // const decodedToken = jwtDecode(accessToken);
  //       // setMyDepartment(decodedToken.department);
  //       // setMyPosition(decodedToken.position);
  //       // let curTime = Date.now() / 1000;
  //       // if (decodedToken.exp < curTime) {
  //       //     window.location.replace('/login');
  //       // }
  //       setTotal(price * quantity);
  //     } catch (error) {
  //       console.log("lỗi cmnr");
  //     }
  //   }
  //   caculateTotal();
  // }, []);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="image">
        <img
          src={DL_Img}
          alt="fireSpot"
          style={{ width: 1000, marginBottom: 15 }}
        />
      </div>
      <form
        class="w-full max-w-lg mx-auto"
        style={{ backgroundColor: "rgb(228 197 158 / 100%)" }}
      >
        <div class="flex flex-wrap -mx-3 mb-6 mx-auto">
          <div class="w-full px-3 mx-auto">
            <div class="w-full md:w-1/2 px-3 mx-auto">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mx-auto"
                for="grid-first-name"
              >
                Xin chào Nguyễn Phước An Vũ 
              </label>
            </div>

            <div class="w-full px-3 mx-auto">
              <p class="text-gray-600 text-xs italic mx-auto">
                Vui lòng điền thông tin dưới để thanh toán online
              </p>
            </div>
          </div>
          <div
            class="flex flex-wrap -mx-3 mb-6 mx-auto"
            style={{ marginTop: 10 }}
          >
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Loại vé
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                value={ticket}
                disabled
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Đơn giá
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="number"
                value={price}
                disabled
              />
            </div>
          </div>

          <div
            class="flex flex-wrap -mx-3 mb-6 mx-auto"
            style={{ marginTop: 5 }}
          >
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Ngày đi
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Số lượng
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>

          <div
            class="flex flex-wrap -mx-3 mb-6 mx-auto"
            style={{ marginTop: 5 }}
          >
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Tổng
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              value={quantity*price}
              disabled
            />
          </div>
        </div>
        <div
            class="flex flex-wrap -mx-3 mb-6 mx-auto"
            style={{ marginTop: 5 }}
          >
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto"
          style={{ marginBottom: 10, backgroundColor: "rgb(128 61 59 / 100%)" }}
          // onClick={() => {
          //   navigate("/bookingQR", { replace: true, state: { ticket, price } });
          // }}
        >
          Thanh toán
        </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
