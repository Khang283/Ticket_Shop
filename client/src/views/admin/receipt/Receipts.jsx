import React, { useEffect, useState } from "react";
import './Receipts.css';
import axios from "axios";
import { format } from "date-fns";
import vi from "date-fns/locale/vi";
import ReceiptDetail from "./ReceiptDetail";

const Receipts = () => {
    const [receipts, setReceipts] = useState([]);
    const [selectedReceipt, setSelectedReceipt] = useState(null);

    const fetchReceipts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/receipts');
            const receiptData = response.data;
            setReceipts(receiptData);
        } catch (error) {
            console.error("Lỗi lấy dữ liệu! ", error);
        }
    }

    useEffect(() => {
        fetchReceipts();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd/MM/yyyy', { locale: vi });
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    const handleRowClick = (receipt) => {
        setSelectedReceipt(receipt);
    };

    const handleCloseDetail = () => {
        setSelectedReceipt(null);
    };

    return (
        <div id="receipts" >
            <div className="mb-4">
                <h1 className="text-center">QUẢN LÝ HÓA ĐƠN</h1>
            </div>
            <table className="w-full bg-white border-collapse border border-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">STT</th>
                        <th scope="col" className="px-6 py-3 text-xs text-left font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Ngày hóa đơn</th>
                        <th scope="col" className="px-6 py-3 text-xs text-left font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Khách hàng</th>
                        <th scope="col" className="px-6 py-3 text-xs text-left font-medium text-gray-500 uppercase tracking-wider">Tổng tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {receipts.map((receipt, index) => (
                        <tr key={receipt.id} onClick={() => handleRowClick(receipt)} className="cursor-pointer">
                            <td className="px-6 py-4 whitespace-normal border-r border-gray-200 text-center">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-normal border-r border-gray-200">{formatDate(receipt.date)}</td>
                            <td className="px-6 py-4 whitespace-normal border-r border-gray-200">{receipt.user?.full_name || 'Không có tên'}</td>
                            <td className="px-6 py-4 whitespace-normal">{formatCurrency(receipt.total)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedReceipt && (
                <ReceiptDetail selectedReceipt={selectedReceipt} onClose={handleCloseDetail} />
            )}
        </div>
    )
}

export default Receipts;
