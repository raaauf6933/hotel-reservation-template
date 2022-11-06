/* eslint-disable consistent-return */
/* eslint-disable no-unneeded-ternary */
import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const useFetch = (params, options) => {
  // const user = useAuth();

  // const { tokenRefresh } = useContext(AuthContext);
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setloading] = useState(false);

  const Params = {
    ...params,
  };

  const fetchData = async (refetchParams) => {
    setResponse(undefined);

    setloading(true);
    try {
      const result = await axios.request({
        ...(refetchParams ? refetchParams : Params),
      });

      setResponse(result);
      return result;
    } catch (err) {
      const typedError = err;
      setError(typedError);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (!options?.skip) {
      fetchData();
    }
  }, [options?.skip]); // execute once only

  return { error, loading, refetch: fetchData, response };
};

export default useFetch;
