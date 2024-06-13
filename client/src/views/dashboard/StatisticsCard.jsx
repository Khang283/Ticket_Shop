import React from 'react';

const StatisticsCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-2xl">{value}</p>
    </div>
  );
};

export default StatisticsCard;
