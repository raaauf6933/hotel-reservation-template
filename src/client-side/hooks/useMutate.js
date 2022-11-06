/* eslint-disable prefer-destructuring */
import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const useMutate = (props) => {
  const onComplete = props && props.onComplete ? props.onComplete : null;
  const onError = props && props.onError ? props.onError : null;
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState();
  const [loading, setloading] = useState(false);

  const callFn = async (params) => {
    setloading(true);

    // params
    const Params = {
      ...params,
    };

    try {
      const result = await axios.request(Params);
      setResponse(result);

      if (onComplete && result) {
        onComplete(result);
      }
      return result;
    } catch (err) {
      const typedError = err;
      setError(typedError);

      if (onError && err) {
        onError(typedError);
      }
      return err;
    } finally {
      setloading(false);
    }
  };
  const Opts = {
    error,
    loading,
    response,
  };

  return [callFn, Opts];
};

export default useMutate;
