import React, { useEffect, useState } from 'react';
import Card from './Updatescards/cards';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Event() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/updates", { withCredentials: true });
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/delete_update/${id}`, {
        withCredentials: true,
      });
      alert('Update deleted successfully!');
      fetchData(); // Refresh the data after deletion
    } catch (error) {
      console.error('Error deleting update:', error);
      alert('Failed to delete the update. Please try again.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-estg-gray-light dark:bg-black min-h-screen">
      <div className="flex gap-4">
        <Link to="/createupdate">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Add Updates
          </button>
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold text-black dark:text-white mb-5 mt-5">Updates Cards</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <Card 
            key={index}
            id={item._id || index}
            title={item.title}
            author={item.author?.username}
            description={item.description}
            updatestype={item.type}
            onUpdate={() => console.log('Update', index)}
            onDelete={() => console.log('Delete', index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Event;
