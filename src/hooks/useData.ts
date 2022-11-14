import { useState, useEffect } from 'react';
import { FETCH_URL } from '../constants';
import { DataType } from '../types';

const useData = () => {
  const [data, setData] = useState<DataType>();
  const [isPunchline, setIsPunchline] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(FETCH_URL);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const responseData: DataType = await response.json();
      setData(responseData);
      setIsLoading(false);
      setIsPunchline(false);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !data && fetchData();
  }, [data]);
  return {
    data, fetchData, isPunchline, setIsPunchline, isLoading,
  };
};

export default useData;
