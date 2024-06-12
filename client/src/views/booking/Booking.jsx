import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DL_Img from "../../assets/DL_Img.png";
import { useLocation } from "react-router-dom";
const Booking = () => {
  const location = useLocation();

  const [ticket, setTicket] = useState(location.state.name);
  const [price, setPrice] = useState(location.state.price);
  const [ticketTypeId, setTicketTypeId] = useState(location.state.ticketTypeId);

  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState(null);
  const [customerId, setCustomerId] = useState("35c241b9-2783-4ffa-80e0-0f669855101d"); //chờ xong phần đăng nhập lấy jwt

  const navigate = useNavigate();

  const proceedPayment = async () => {
    if (date!=null && quantity != 0) {
      navigate("/bookingQR", { replace: true, state: { ticketTypeId, price, quantity, date, customerId } });
    }
    else {
      alert('Please fill out all the fields');
    }
  };

  useEffect(() => {

  }, []);

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
                Hi, user's fullname
              </label>
              
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
                Date
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
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
                id="grid-last-quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <p class="text-red-500 text-xs italic">Must not be 0.</p>
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
          onClick={() => {
            proceedPayment();
          }}
        >
          Purchase
        </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
