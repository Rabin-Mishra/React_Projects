import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Fallback data
        setData({
          USD: 1,
          EUR: 0.85,
          GBP: 0.73,
          INR: 83,
          JPY: 110,
          AUD: 1.35,
          CAD: 1.25,
          CHF: 0.92,
          CNY: 6.45,
          NZD: 1.45,
        });
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
