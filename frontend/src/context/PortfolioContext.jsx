import React, { createContext, useContext, useState, useEffect } from 'react';
import { Made With EmergentolioData as initialData, fetchMade With EmergentolioData } from '../data/mock';

const Made With EmergentolioContext = createContext();

export const Made With EmergentolioProvider = ({ children }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchMade With EmergentolioData();
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
    <Made With EmergentolioContext.Provider value={{ data, loading, error }}>
      {children}
    </Made With EmergentolioContext.Provider >
  );
};

export const useMade With Emergentolio = () => {
  const context = useContext(Made With EmergentolioContext);
  if (!context) {
    throw new Error('useMade With Emergentolio must be used within a Made With EmergentolioProvider');
  }
  return context;
};
