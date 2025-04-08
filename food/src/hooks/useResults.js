import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchApi = async searchTerm => {
    try {
      setLoading(true);

      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          limit: 50,
          location: 'San Jose, CA'
        }
      });
  
      if (response?.data?.businesses) {
        setError('');
        setResults(response.data.businesses);
      }
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    searchApi('burgers');
  }, []);

  return [
    error,
    results,
    loading,
    searchApi
  ];
};