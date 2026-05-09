import React, { createContext, useContext, useState, useEffect } from 'react';
import { olioData as initialData, fetcholioData } from '../data/mock';

const olioContext = createContext();

export const olioProvider = ({ children }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetcholioData();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <olioContext.Provider value={{ data, loading, error }}>
      {children}
    </olioContext.Provider >
  );
};

export const useolio = () => {
  const context = useContext(olioContext);
  if (!context) {
    throw new Error('useolio must be used within a olioProvider');
  }
  return context;
};
