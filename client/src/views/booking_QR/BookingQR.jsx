import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import QR_Banking from "../../assets/QR_Banking.jpg";
import axios from 'axios';

const BookingQR = () => {
  const location = useLocation();

  const myReceipt = {
    customerId: location.state.customerId,
    ticketTypeId: location.state.ticketTypeId,
    date: location.state.date,
    amount: location.state.quantity,
    total: location.state.quantity * location.state.price,
  };


  const create = async (event) => {
    console.log(myReceipt)
    axios
      .post(`http://localhost:3000/api/v1/receipts`, myReceipt)
      .then((response) => {
        console.log(response.data);
        window.location.replace(`/receipts/${response.data.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full max-w-lg mx-auto">
        <div
          class="w-full px-3 mx-auto"
          style={{ backgroundColor: "rgb(228 197 158 / 100%)" }}
        >
          <div class="w-full md:w-1/2 px-3 mx-auto">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mx-auto "
              for="grid-first-name"
            >
              Hi, Nguyễn Phước An Vũ
            </label>
      
          </div>

          <div class="w-full md:w-1/2 px-6 mx-auto ">
            <p class="w-full text-gray-600 text-xs italic mx-auto ">
              Scan the QR below to purchase
            </p>
          </div>
        </div>
        <div className="image">
          <img src={QR_Banking} alt="fireSpot" style={{ marginBottom: 15 }} />
        </div>
        <div class="w-full md:w-1/2 px-3 mx-auto">
          <p class="text-gray-600 text-xs italic mx-auto" style={{ marginBottom: 15 }}>
            After QR payment, please press <b>Done</b>
          </p>
          <button
          class="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full mx-auto w-full"
          style={{ marginBottom: 10, backgroundColor: "rgb(128 61 59 / 100%)" }}
          onClick={() => create()}
        >
          Done
        </button>
        </div>
        
    </div>
  );
};

export default BookingQR;
