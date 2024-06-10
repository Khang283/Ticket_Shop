import React, { useEffect, useState } from "react";

import QR_Banking from "../../assets/QR_Banking.jpg";
const Booking_QR = () => {
  const [ticket, setTicket] = useState("VE_VIP");
  const [quantity, setQuantity] = useState(0);
  const [birth, setBirth] = useState(new Date());

  const tickets = [
    { value: "VE_NGUOI_LON", label: "Vé người lớn" },
    { value: "VE_TRE_EM", label: "Vé trẻ em" },
  ];
  return (
    <div className="w-full max-w-lg mx-auto">
      <form class="w-full max-w-lg mx-auto">
        <div
          class="w-full px-3 mx-auto"
          style={{ backgroundColor: "rgb(228 197 158 / 100%)" }}
        >
          <div class="w-full md:w-1/2 px-3 mx-auto">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mx-auto"
              for="grid-first-name"
            >
              Xin chào Nguyễn Phước An Vũ
            </label>
          </div>

          <div class="w-full px-3 mx-auto">
            <p class="text-gray-600 text-xs italic">
              Vui lòng quét mã bên dưới để thanh toán online
            </p>
          </div>
        </div>
        <div className="image">
          <img src={QR_Banking} alt="fireSpot" style={{ marginBottom: 15 }} />
        </div>
        <div class="w-full px-3 mx-auto">
          <p class="text-gray-600 text-xs italic" style={{ marginBottom: 15 }}>
            Sau khi hoàn tất, vui lòng bấm <b>Hoàn thành</b>
          </p>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto"
          style={{ marginBottom: 10, backgroundColor: "rgb(128 61 59 / 100%)" }}
        >
          Hoàn thành
        </button>
      </form>
    </div>
  );
};

export default Booking_QR;
