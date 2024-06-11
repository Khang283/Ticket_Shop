import React from "react";


import './Ticket.css';

const Ticket = () => {

    return(
        <div id="ticket">
            <div className="text-center">
                <h1>QUẢN LÝ VÉ</h1>
            </div>
            <div className="flex justify-between mt-2 mb-4">
                <h2>Danh sách vé</h2>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Thêm</button>
            </div>
            <div>
                <table className='w-full bg-white border-collapse border border-gray-200'>
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>STT</th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Tên</th>
                            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200'>Loại vé</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>1</td>
                            <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Vé thường</td>
                            <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Người lớn</td>
                        </tr>
                        <tr>
                            <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>1</td>
                            <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Vé thường</td>
                            <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Người lớn</td>
                        </tr>
                        <tr>
                            <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>1</td>
                            <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Vé thường</td>
                            <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Người lớn</td>
                        </tr>
                        <tr>
                            <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>1</td>
                            <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Vé thường</td>
                            <td className='px-6 py-4 whitespace-normal border-r border-gray-200'>Người lớn</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Ticket;