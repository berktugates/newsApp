import axios from "axios"
import { useEffect, useState } from "react"
export default function Currency(){
    const [currencies, setCurrencies] = useState([]);
    useEffect(()=>{
        const getCurrencies = async ()=>{
            await axios
            .get(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ksWe2sABqzQlNr9dMBlS1rkCl8U7OeIFxxVQEgND&currencies=EUR%2CUSD%2CGBP&base_currency=TRY`)
            .then((response)=>{
                setCurrencies(response.data.data);
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        getCurrencies();
    },[]);

    return(
        <>
            <div id="currencies" className="my-2">
                <ul className="flex justify-center text-xs m:text-sm l:text-base text-center gap-1">
                    <li className="border rounded-lg p-1"><i className="fa-solid fa-euro-sign"></i> {Object.values(currencies)[0]}</li>
                    <li className="border rounded-lg p-1"><i className="fa-solid fa-sterling-sign"></i> {Object.values(currencies)[1]}</li>
                    <li className="border rounded-lg p-1"><i className="fa-solid fa-dollar-sign"></i> {Object.values(currencies)[2]}</li>
                </ul>
            </div>
        </>
    )
}
