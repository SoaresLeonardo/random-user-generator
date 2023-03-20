import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState({});
  console.log(data);
  const [loading, setLoading] = useState(false);
  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setData(data.results[0]);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    const URL = "https://randomuser.me/api";
    fetchData(URL);
  }, []);

  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <div className="container">
      <div className="content">
        <div className="user-image">
          <img src={data.picture?.large} alt={data.name?.first} />
          <span className="user-name">{data.name?.first}</span>
        </div>
        <div className="user-info">
          <span className="user-email">{data.email}</span>
          <span className="user-tell">{data.phone}</span>
          <span className="user-country">{data.phone}</span>
        </div>
      </div>
    </div>
  );
}
