"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from "./components/ImageGallery";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("life")
  const [input,setInput] = useState("")
  const changeInput = (e)=>{
    setInput(e.target.value);
  }
  const changeArticles = ()=>{
    if(input !== null || input !== ""){
      setQuery(input);
    }
  }
  useEffect(() => {
    const getArticles = async () => {
      await axios
        .get(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=71635681bdee4c82a86e4af023126b13`
        )
        .then((response) => {
          console.log(response.data.articles);
          setArticles(response.data.articles);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getArticles();
  }, [query]);
  return (
    <>
      <div className="flex flex-col justify-center">
        <Navbar />
        <div id="contents" className="my-2 p-2">
          <ImageGallery />
          <SearchBar
            value = {input}
            changeInput = {changeInput}
            changeArticles = {changeArticles}
          />
          <div className="my-2">
            {articles.map((article, index) => {
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
    </>
  );
}
