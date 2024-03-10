"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Article from "../components/Article";
import Footer from "../components/Footer";
import Currency from "../components/Currency";
import Weather from "../components/Weather";
export default function Ekonomi() {
  const [journals, setJournals] = useState([]);
  useEffect(()=>{
       const getJournals = async() => {
        await axios
        .get(`https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=71635681bdee4c82a86e4af023126b13`)
        .then((response)=>{
            console.log(response.data.articles)
            setJournals(response.data.articles)
        })
        .catch((err)=>{
            console.log(err)
        })
       }
       getJournals();
  },[])
  return (
    <>
      <div className="flex flex-col justify-center">
        <Navbar />
        <div className="flex flex-col tb:flex-row justify-between items-center gap-1 p-1 tb:p-4 m:p-1.5">
          <Currency />
          <Weather />
        </div>
        <div className="p-1 m:p-1.5 grid tb:grid-cols-2 tb:grid-rows-2 tb:p-4 lp:grid-cols-3 lpl:grid-cols-4 gap-2">
          {journals.map((journal, index) => {
            return (
              <Article
                key={index}
                author={journal.author}
                title={journal.title}
                content={journal.content}
                description={journal.description}
                source={journal.source}
                url={journal.url}
                urlToImage={journal.urlToImage}
              />
            );
          })}
        </div>
        <Footer />
      </div>
      a
    </>
  );
}