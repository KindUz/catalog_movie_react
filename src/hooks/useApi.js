import { useState, useEffect } from 'react';

function useApi(url, currentPage='') {
  const API_KEY = "0035cf73-b1a2-4fe2-82f8-bb11a6cf0c79";
  const [data, setData] = useState(null);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url+currentPage, {
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': API_KEY,
        },
      });
      const responseData = await response.json();
      setData(responseData);
      setPages(responseData.pagesCount);
    };
    fetchData();
  }, [url, currentPage]);

  return [data, pages];
}

export default useApi;