import React, { useEffect, useState } from "react";

import QR from "../../assets/QR.png";
const ReceiptDetail = () => {
  const [ticket, setTicket] = useState("VE_VIP");
  const [quantity, setQuantity] = useState(0);
  const [birth, setBirth] = useState(new Date());

  const tickets = [
    { value: "VE_NGUOI_LON", label: "Vé người lớn" },
    { value: "VE_TRE_EM", label: "Vé trẻ em" },
  ];
  return (
    <div className="w-full max-w-lg mx-auto">

      <form
        class="w-full max-w-lg mx-auto"
        style={{ backgroundColor: "rgb(228 197 158 / 100%)" }}
      >
        
        <div class="flex flex-wrap -mx-3 mb-6 mx-auto">
          <div class="w-full px-3 mx-auto" style={{ marginTop: 5 }}>
            <div class="w-full md:w-1/2 px-3 mx-auto">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mx-auto"
                for="grid-first-name"
              >
                Đây là đơn đặt vé của ABC
              </label>
            </div>

            <div class="w-full px-3 mx-auto">
              <p class="text-gray-600 text-xs italic">
                Xin trân trọng cảm ơn
              </p>
            </div>
          </div>
          <div
            class="flex flex-wrap -mx-3 mb-6 mx-auto"
            style={{ marginTop: 5 }}
          >
            <div class="w-full md:w-1/2 px-3">
            <img
          src={QR}
          alt="fireSpot"
          style={{marginBottom: 15 }}
        />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Mã đơn hàng
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="64Dxiopyhsudo"
              />
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
                placeholder="Doe"
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
                type="text"
                placeholder="Doe"
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
                placeholder="Doe"
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
                id="grid-last-name"
                type="number"
                placeholder="Doe"
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
              placeholder="100.000 VNĐ"
            />
          </div>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto"
          style={{ marginBottom: 10, backgroundColor: "rgb(128 61 59 / 100%)" }}
        >
          Trang đặt vé
        </button>
      </form>
    </div>
  );
};

export default ReceiptDetail;
