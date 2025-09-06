//import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/UI/Card";
import Search from "../components/UI/Search";
import { getNews } from "../services/getService";
const defaultImage = "../images/image-not-found.png";

const News = () => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Tracks user input

  //const API = ("https://newsapi.org/v2/top-headlines?category=health&apiKey=e0355f2fe7f34c2e9627a46afa8171ad");

  const getData = async () => {
    try {
      //const response = await axios.get(API);
      const response = await getNews();
      setValue(response.data.articles);
      setLoading(false);
      //console.log(response.data.articles);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  //Handle search input change
  const filterData = value.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Date
  const formatDateIntl = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };
  //time

  if (loading) {
    return (
      <div className="loader">
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <div className="main">
      <h1>Responsive Card Grid Layout</h1>
      <div className="card_search">
        {/* <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name..."
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        /> */}
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <ul className="cards">
        {filterData.length > 0 ? (
          filterData.map((item, index) => (
            <Card
              key={index}
              data={item}
              formatDateIntl={formatDateIntl}
              defaultImage={defaultImage}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center">No results found.</p>
        )}
      </ul>
    </div>
  );
};

export default News;
