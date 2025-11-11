import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function List() {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/products/list');
      const data = await response.json();
      console.log('Fetched data:', data); // 🔍 Check API response
      setList(Array.isArray(data.products) ? data.products : []);
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/products/remove/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Product deleted successfully!');
        fetchList(); // Refresh the list
      } else {
        alert('Error deleting product.');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <Sidebar />
        <div className="ml-[30px] mt-[30px]">
          <h1 className="font-bold text-gray-700 text-xl mb-[20px]">All Product List</h1>
          <table className="min-w-full bg-white border border-gray-400">
            <thead>
              <tr>
                <th className="py-[10px] px-[25px] border-b bg-gray-50">Image</th>
                <th className="py-[10px] px-[25px] border-b bg-gray-50">Name</th>
                <th className="py-[10px] px-[25px] border-b bg-gray-50">Category</th>
                <th className="py-[10px] px-[25px] border-b bg-gray-50">Price</th>
                <th className="py-[10px] px-[25px] border-b bg-gray-50">Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr key={item._id}>
                  <td className="py-[10px] px-[25px] border-b text-center">
                    <img
                      className="w-10 h-10 mx-auto"
                      src={item.image?.[0] || '/placeholder.jpg'}
                      alt={item.name}
                    />
                  </td>
                  <td className="py-[10px] px-[25px] border-b">{item.name}</td>
                  <td className="py-[10px] px-[25px] border-b">{item.category}</td>
                  <td className="py-[10px] px-[25px] border-b">{item.price}</td>
                  <td className="py-[10px] px-[25px] border-b">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 text-white py-[5px] px-[10px] rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {list.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No products found.
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

export default List;
