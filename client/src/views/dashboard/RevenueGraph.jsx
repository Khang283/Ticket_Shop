
import {Line, ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import React, { useEffect, useState } from 'react';
import axios from "axios";

const RevenueGraph = () => {
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
      const newdata = data.map(item => ({
        ...item,
        monthYear: `${item.month}/${item.year}`,
      }));
      console.log(newdata);
      setMonthlyRevenue(newdata);
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
      <h2 className="text-xl font-bold mb-4">Thống kê thu nhập theo tháng</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={monthlyRevenue}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="monthYear" />
          <YAxis dataKey="total_revenue"/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total_revenue" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueGraph;
