import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AnimatedSection from '../components/ui/AnimatedSection';
import axios from 'axios';
import { Search } from 'lucide-react';

const Announcement = () => {
  const [visibleNewsCount, setVisibleNewsCount] = useState(6);
  const [expandedItems, setExpandedItems] = useState({});
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleLoadMore = () => {
    setVisibleNewsCount((prev) => prev + 3);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term)
    );
    setFiltered(filteredData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/all_updates');
        setData(response.data.data);
        setFiltered(response.data.data);
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    };

    window.scrollTo(0, 0);
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-16 text-center">
       
        <AnimatedSection>
  <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">School Updates</h1>
  <p className="text-black dark:text-white max-w-xl mx-auto mb-12">
    Stay informed with the latest news, events, and achievements from our school community. Check back regularly for important announcements and exciting developments in our learning journey together.
  </p>
</AnimatedSection>

        {/* Search bar */}
        <div className="relative w-[90%] max-w-xl mx-auto mb-12">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search announcements..."
            className="w-full px-12 py-3 rounded-md shadow-sm shadow-gray-400 bg-white dark:bg-black border border-gray-300 dark:border-gray-700"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 w-5 h-5" />
        </div>

        {/* CONDITIONAL MESSAGES */}
        {data.length === 0 ? (
          // No announcements in the database
          <div className="flex flex-col items-center justify-center py-24 text-center max-w-xl mx-auto">
            <svg
              className="w-20 h-20 mb-4 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-2">
              No Announcements Found
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              The announcements database is currently empty.
            </p>
          </div>
        ) : searchTerm && filtered.length === 0 ? (
          // Search term entered but no match
          <div className="flex flex-col items-center justify-center py-24 text-center max-w-xl mx-auto">
            <svg
              className="w-20 h-20 mb-4 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-2">
              No Matching Announcements
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              No announcements found for your search. Try a different keyword.
            </p>
          </div>
        ) : (
          // Matching results found
          <>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-[90%] mx-auto px-6 container">
              {filtered.slice(0, visibleNewsCount).map((item) => {
                const isExpanded = expandedItems[item._id];
                const description = item.description;
                const shortText =
                  description.length > 150 ? description.slice(0, 150) + '...' : description;

                return (
                  <div
                    key={item._id}
                    className="group w-auto transition-all duration-300 ease-in-out p-6 mb-6 dark:bg-gray-900 dark:text-gray-100 rounded-2xl shadow-lg hover:shadow-xl flex flex-col items-start text-left justify-between"
                  >
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 uppercase">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-800 mb-2 dark:text-gray-300">
                      {new Date(item.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <p className="text-gray-600 text-left dark:text-gray-300 leading-relaxed">
                      {isExpanded ? description : shortText}
                    </p>
                    {description.length > 150 && (
                      <button
                        onClick={() => toggleExpand(item._id)}
                        className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
                      >
                        {isExpanded ? 'Show Less' : 'Show More'}
                      </button>
                    )}
                    {/* Download Option for fileUrl */}
                    {item.fileUrl && (
                      <a
                        href={item.fileUrl}
                        download={`${item.title}.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm mt-3 text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
                      >
                        📥 Download Attachment
                      </a>
                    )}
                    <p className="text-sm text-gray-600 text-left mt-4 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-2 hover:border-gray-600 hover:cursor-pointer rounded-lg">
                      # {item.type}
                    </p>
                  </div>
                );
              })}
            </div>

            {visibleNewsCount < filtered.length && (
              <div className="mt-12">
                <button
                  onClick={handleLoadMore}
                  className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full transition"
                >
                  See More →
                </button>
              </div>
            )}
          </>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Announcement;
