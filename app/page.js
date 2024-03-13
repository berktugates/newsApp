"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Weather from "./components/Weather";
import Currency from "./components/Currency";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("general");
  const [input, setInput] = useState("");

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const getArticles = async () => {
      await axios
        .get(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=71635681bdee4c82a86e4af023126b13`
        )
        .then((response) => {
          setArticles(response.data.articles);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getArticles();
  }, [query]);

  const changeArticles = async () => {
    if (input !== null || input !== "") {
      console.log(query);
      await setQuery(input);
      console.log(query);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center">
        <Navbar />
        <div
          id="contents"
          className="my-2 p-2 flex flex-col justfiy-center items-center"
        >
          <div className="flex flex-col tb:flex-row tb:gap-2 lp:gap-16  ">
            <Weather />
            <Currency />
          </div>
          <SearchBar
            value={input}
            changeInput={changeInput}
            changeArticles={changeArticles}
          />
          <div className="flex flex-col tb:flex-row tb:gap-2 lp:gap-3 my-2 lpl:w-3/4 lpl:px-6 tb:justify-center">
            <div className="tb:basis-1/2">
              {articles.slice(0, 4).map((article, index) => {
                return (
                  <Article
                    key={index}
                    author={article.author}
                    title={article.title}
                    content={article.content}
                    description={article.description}
                    source={article.source}
                    url={article.url}
                    urlToImage={article.urlToImage}
                  />
                );
              })}
            </div>
            <div className="tb:basis-1/3">
              {articles.slice(4, 8).map((article, index) => {
                return (
                  <Article
                    key={index}
                    author={article.author}
                    title={article.title}
                    content={article.content}
                    description={article.description}
                    source={article.source}
                    url={article.url}
                    urlToImage={article.urlToImage}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
