import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function Order() {
  const [list, setList] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/orders'); // Fetch orders
      console.log(response)
      const data = await response.json();
      console.log('Fetched orders:', data);
      setList(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <Sidebar />
        <div className="ml-[30px] mt-[30px]">
          <h1 className="font-bold text-gray-700 text-xl mb-[20px]">All Orders</h1>
          <table className="min-w-full bg-white border border-gray-400">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b bg-gray-50">Order ID</th>
                <th className="py-2 px-4 border-b bg-gray-50">User</th>
                <th className="py-2 px-4 border-b bg-gray-50">Amount (₹)</th>
                <th className="py-2 px-4 border-b bg-gray-50">Payment Method</th>
                <th className="py-2 px-4 border-b bg-gray-50">Status</th>
                <th className="py-2 px-4 border-b bg-gray-50">Date</th>
              </tr>
            </thead>
            <tbody>
              {list.map((order) => (
                <tr key={order._id}>
                  <td className="py-2 px-4 border-b">{order._id}</td>
                  <td className="py-2 px-4 border-b">{order.address.email}</td>
                  <td className="py-2 px-4 border-b">{order.amount}</td>
                  <td className="py-2 px-4 border-b">{order.paymentMethod}</td>
                  <td className="py-2 px-4 border-b">{order.status}</td>
                  <td className="py-2 px-4 border-b">{new Date(order.date).toLocaleDateString()}</td>
                </tr>
              ))}
              {list.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Order;
