import React, { useEffect, useState } from "react";
import QR from "../../assets/QR.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { format } from 'date-fns';
const Receipt = () => {
  const { id } = useParams(); //lấy id từ url

  const [ticket, setTicket] = useState(); 
  const [price, setPrice] = useState();
  const [ticketTypeId, setTicketTypeId] = useState(); 
  const [total, setTotal] = useState(); 

  const [quantity, setQuantity] = useState();
  const [date, setDate] = useState();

  const convertDateTimeToDate = (dateTime) => {
    return format(new Date(dateTime), 'dd-MM-yyyy'); // Custom format using date-fns
  };
  const fetchDetail = async () => {
    axios
      .get(`http://localhost:3000/api/v1/receipts/${id}`)
      .then((response) => {
        console.log(response.data);
        setTicket(response.data.ticketType.name)
        setPrice(response.data.ticketType.price)
        setDate(convertDateTimeToDate(response.data.receipt.date))
        setQuantity(response.data.amount)
        setTotal(response.data.total)

      })
      .catch((error) => {
        console.log(error);
      });
  };

 

  useEffect(() => {
    fetchDetail();
  }, []);
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
                Hi, Nguyễn Phước An Vũ
              </label>
            </div>

            <div class="w-full px-3 mx-auto">
              <p class="text-gray-600 text-xs italic">Sincerely thanks for trusting and support</p>
            </div>
          </div>
          <div
            class="flex flex-wrap -mx-3 mb-6 mx-auto"
            style={{ marginTop: 5 }}
          >
            <div class="w-full md:w-1/2 px-3">
              <img src={QR} alt="fireSpot" style={{ marginBottom: 15 }} />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Receipt's code
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                value={id}
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
                Ticket
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
                Price
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
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
                Date
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                value={date}
                disabled
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Quantity
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                value={quantity}
                disabled
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
              Total
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              value={total}
              disabled
            />
          </div>
        </div>
        <button
        
          class="block bg-blue-500 uppercase tracking-wide hover:bg-blue-700 tracking-wide text-white font-bold py-2 px-4 rounded-full mb-2 mx-auto"
          style={{ marginBottom: 10, backgroundColor: "rgb(128 61 59 / 100%)" }}
        >
          Trang đặt vé
        </button>
      </form>
    </div>
  );
};

export default Receipt;
