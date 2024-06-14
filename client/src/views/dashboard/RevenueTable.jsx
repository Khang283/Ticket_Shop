import React, { useEffect, useState } from 'react';
import axios from "axios";

const RevenueTable = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState(null);
  const [MonthlyRevenueLoading, setMonthlyRevenueLoading] = useState(true);

  const fetchMonthlyRevenue = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/dashboard/monthly_revenue');
      const data = response.data;
      data.sort((a, b) => {
        if (a.year !== b.year) {
          return a.year - b.year;
        }
        return a.month - b.month;
      });
      console.log(data);
      setMonthlyRevenue(data);
      setMonthlyRevenueLoading(false);
    } catch (error) {
      console.error("Lỗi lấy dữ liệu! ", error);
    }
  }

  useEffect(() => {
    fetchMonthlyRevenue();
  }, []);

  if (MonthlyRevenueLoading) {
    return <p>Loading...</p>;
  }


  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Bảng Doanh Thu</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200">Tháng</th>
            <th className="py-2 px-4 bg-gray-200">Doanh Thu</th>
          </tr>
        </thead>
        <tbody>
          {monthlyRevenue.map((data, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">Tháng {data.month}, năm {data.year}</td>
              <td className="border px-4 py-2">{data.total_revenue} đ</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RevenueTable;
