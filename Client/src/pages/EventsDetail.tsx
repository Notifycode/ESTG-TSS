import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Future from '../assets/future.png'
import { useEffect, useState } from "react";
import Footer from "@/components/layout/Footer";
import axios from "axios";
import NotFound from "./NotFound";

interface NewsItem {
  id: number;
  title: string;
  createdAt: string;
  imageUrl: string;
  description: string;
}

export default function NewsDetailPage() {
  const { id } = useParams();
  console.log("News id from Url", id);
  const navigate = useNavigate();
  const [otherNews, setOtherNews] = useState<NewsItem[]>([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState(3);

  const [data, setData] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/single_event/${id}`);
        setData(response.data);
        console.log("API response:", response.data);
      } catch (error) {
        console.error("Error fetching story:", error);
      } finally {
        setLoading(false);
        window.scrollTo(0, 0);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/all_events");
        const filtered = response.data.data.filter((item: NewsItem) => item.id !== Number(id));
        setOtherNews(filtered);
      } catch (error) {
        console.error("Error fetching all news:", error);
      }
    };

    fetchAllNews();
  }, [id]);

  const handleLoadMore = () => {
    setVisibleNewsCount((prev) => prev + 3);
  };


  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!data) return <NotFound />

  return (
    <section className="py-16 px-6">
      <Navbar />
      <div className="max-w-4xl mt-10 mb-20 mx-auto">
        <h1 className="text-4xl font-bold mb-2 uppercase">{data.title}</h1>
        <img src={data.imageUrl}
          alt={data.title} className="w-full rounded-lg mb-6" />
        <p className="text-sm text-gray-800 mb-2">{new Date(data.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
        <p className="text-gray-700">{data.description}</p>

      </div>
      <div className="max-w-6xl mx-auto mt-20 mb-10 px-10 ml-20">
        <h2 className="text-2xl font-semibold mb-6">More News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 cursor-pointer gap-6">
          {otherNews.slice(0, visibleNewsCount).map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/news/${item.id}`)}
              className="cursor-pointer rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img src={item.imageUrl || Future} alt={item.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-800">
                 {new Date(item.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
                </p>
                <h3 className="text-lg font-bold mt-1 text-gray-400 uppercase">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {visibleNewsCount < otherNews.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
            >
              See More →
            </button>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
}
