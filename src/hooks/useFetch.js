import { useEffect, useState } from "react";

export default function useFetch(url, initialValue) {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setError(null);
      try {
        const response = await fetch(url);

        const responseData = await response.json();

        if (!response.ok || response.status >= 400) {
          throw new Error();
        }

        setData(responseData);
      } catch (error) {
        setError(error.message || "Failed to fetch data");
      }

      setIsLoading(false);
    }

    fetchData();
  }, []);

  return { data, error, isLoading };
}
