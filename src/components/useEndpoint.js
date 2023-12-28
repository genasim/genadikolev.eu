import { useState, useEffect } from 'react';
import endpoints from '../constants/endpoints';

const useEndpoint = (endpoint) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints[endpoint], {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data;
};

export default useEndpoint;
