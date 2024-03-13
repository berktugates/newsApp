import { useState, useEffect } from "react";
import axios from "axios";
export default function Weather() {
  const [weather, setWeather] = useState("");
  useEffect(() => {
    const getWeather = async () => {
      await axios
        .get(
          "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/%C4%B0stanbul?unitGroup=metric&key=FY7ZZ3LQV66QEVGHC836LCSX8&contentType=json"
        )
        .then((response) => {
          setWeather(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getWeather();
  }, []);
  return (
    <>
      <div className="flex border rounded-lg items-center justify-center p-2">
        {weather && weather.days && weather.days[0] ? ( // Check for data presence
            <div className="flex items-center gap-2 me-4">
              <p className="text-xs m:text-sm l:text-base text-center font-semibold">{weather.currentConditions.temp}{"C°"}</p>
              <p className="text-xs m:text-sm l:text-base text-center font-semibold">{weather.hasOwnProperty("address") && weather.address}{" "}</p>
              <i className="fa-solid fa-temperature-half"></i>
            </div>
        ) : null}
        {weather.currentConditions && <p className="text-sm font-semibold">{weather.currentConditions.datetime}</p>}
      </div>
    </>
  );
}
