import React from "react";
import { format } from "date-fns";
import vi from "date-fns/locale/vi";

const ReceiptDetail = ({ selectedReceipt, onClose }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd/MM/yyyy', { locale: vi });
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60 mt-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md text-left">
              <h2 className="text-lg mt-8 font-semibold text-center uppercase">Chi tiết hóa đơn</h2>
              <form className="px-8 pt-6 pb-8 mb-4">
                <div className="mb-4 flex items-center">
                  <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="date">Ngày</label>
                  <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text" id="date" value={formatDate(selectedReceipt.date)} readOnly/>
                </div>
                <div className="mb-4 flex items-center">
                  <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="customer">Khách hàng</label>
                  <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text" value={selectedReceipt.user?.full_name || 'Không có tên'} readOnly/>
                </div>
                <div className="mb-4 flex items-center">
                  <label className="w-1/3 text-gray-700 text-sm font-bold mb-2 ml-4 mr-4" htmlFor="customer">Tổng tiền</label>
                  <input className="w-2/3 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text" value={formatCurrency(selectedReceipt.total)} readOnly/>
                </div>
                <h3 className="mt-2 mb-4 text-md font-semibold text-center uppercase">Chi tiết các vé</h3>
                <table className="w-full bg-white border-collapse border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="text-center">
                      <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Loại vé</th>
                      <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Số lượng</th>
                      <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Tổng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedReceipt.receiptDetails.map(detail => (
                        <tr key={detail.id}>
                            <td className="px-6 py-3 whitespace-normal border-r border-gray-200 text-center">{detail.ticketTypeId}</td>
                            <td className="px-6 py-3 whitespace-normal border-r border-gray-200 text-center">{detail.amount}</td>
                            <td className="px-6 py-3 whitespace-normal text-center">{formatCurrency(detail.total)}</td>
                        </tr>
                    ))}
                  </tbody>
                </table>
                <div className="text-center">
                  <button onClick={onClose} className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 mt-4 text-center">Đóng</button>
                </div>
              </form>
          </div>
        </div>
    );
};

export default ReceiptDetail;
