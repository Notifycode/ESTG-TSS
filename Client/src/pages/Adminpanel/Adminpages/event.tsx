import React, { useEffect, useState } from 'react';
import Card from './Eventcards/cards'; // This is the actual Card component
import axios from 'axios';

function Event() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/events", {
        withCredentials: true,
      });
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/delete_event/${id}`, {
        withCredentials: true,
      });
      alert('Event deleted successfully!');
      fetchData(); // Refresh the data after deletion
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete the event. Please try again.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 dark:bg-black min-h-screen">
      <a href="/createevent">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          Add Event
        </button>
      </a>
      <h1 className="text-2xl font-bold text-white-800 mb-5 mt-5">Event Cards</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            author={item.author.username}
            imageUrl={item.imageUrl || "https://via.placeholder.com/150"}
            onUpdate={() => console.log('Update', index)}
            onDelete={() => console.log('Delete', index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Event;
