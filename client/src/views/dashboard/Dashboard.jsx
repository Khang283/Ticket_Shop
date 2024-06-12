import React, { useEffect, useState } from 'react';
import StatisticsCard from './StatisticsCard';
import RevenueGraph from './RevenueGraph';
import RevenueTable from './RevenueTable';

import axios from "axios";

const Dashboard = () => {
  // totalRevenue
  const [totalRevenue, setTotalRevenue] = useState(null);
  const [TotalRevenueLoading, setTotalRevenueLoading] = useState(true);

  const fetchTotalRevenue = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/dashboard/total_revenue');
      const data = response.data;
      console.log(data);
      setTotalRevenue(data);
      setTotalRevenueLoading(false);
    } catch (error) {
      console.error("Lỗi lấy dữ liệu! ", error);
    }
  }

  useEffect(() => {
    fetchTotalRevenue();
  }, []);

  // totalTicket
  const [totalTicket, setTotalTicket] = useState(null);
  const [TotalTicketLoading, setTotalTicketLoading] = useState(true);

  const fetchTotalTicket = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/dashboard/total_ticket');
      const data = response.data;
      console.log(data);
      setTotalTicket(data);
      setTotalTicketLoading(false);
    } catch (error) {
      console.error("Lỗi lấy dữ liệu! ", error);
    }
  }

  useEffect(() => {
    fetchTotalTicket();
  }, []);

  // totalclient
  const [totalClient, setTotalClient] = useState(null);
  const [TotalClientLoading, setTotalClientLoading] = useState(true);

  const fetchTotalClient = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/dashboard/total_client');
      const data = response.data;
      console.log(data);
      setTotalClient(data);
      setTotalClientLoading(false);
    } catch (error) {
      console.error("Lỗi lấy dữ liệu! ", error);
    }
  }

  useEffect(() => {
    fetchTotalClient();
  }, []);

  

  if (TotalRevenueLoading || TotalTicketLoading || TotalClientLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Thống Kê</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <StatisticsCard title="Tổng Doanh Thu" value={totalRevenue.total_revenue + " đ"} />
        <StatisticsCard title="Tổng khách hàng" value={totalClient.client_count+ " khách hàng"} />
        <StatisticsCard title="Số Vé Đã Bán" value={totalTicket.total_ticket + " vé"} />
        <StatisticsCard title="Doanh Thu Trung Bình Mỗi Vé" value={totalRevenue.total_revenue/totalTicket.total_ticket + " đ/vé"} />
      </div>
      <div className="mt-8">
        <RevenueGraph />
      </div>
      <div className="mt-8">
        <RevenueTable />
      </div>
    </div>
  );
};

export default Dashboard;
