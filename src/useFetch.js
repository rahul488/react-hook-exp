import React, { useEffect, useRef, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const refController = useRef(null);

  useEffect(() => {
    return () => {
      if (refController.current) {
        refController.current.abort("request canceclled.");
      }
    };
  }, []);

  const getData = async (url) => {
    if (refController.current) {
      refController.current.abort("request canceclled.");
    }
    refController.current = new AbortController();
    const requestParam = {
      signal: refController.current.signal
    };
    try {
      setLoading(true);
      const res = await fetch(url, {
        ...requestParam
      });
      const resData = await res.json();
      setData(resData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error----", error);
    }
  };

  const get = (url) => {
    getData(url);
  };
  return {
    data,
    loading,
    get
  };
};
export default useFetch;
