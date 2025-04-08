import { useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [error, setError] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBusiness = async id => {
    try {
      setLoading(true);

      const response = await yelp.get(`/${id}`);
  
      if (response?.data) {
        setError('');
        setResult(response.data);
      }
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  return [
    error,
    result,
    loading,
    getBusiness
  ];
};