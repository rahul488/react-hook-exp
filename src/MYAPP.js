import React, { useState, useEffect, useContext } from "react";
import useFetch from "./useFetch";
import { Button } from "reactstrap";
import Product from "./Product";
import usePaginationOnScroll from "./usePaginationOnScroll";
import { ThemeContext } from "./App";

const MYAPP = ({ toggleTheam }) => {
  // const [param, setParm] = useState({
  //   limit: 10,
  //   skip: 0
  // });
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const { isScrollDown, handleScroll } = usePaginationOnScroll();
  const [orgData, setOrgData] = useState([]);
  const { data, get } = useFetch();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (data?.products && data.products.length > 0) {
      setOrgData((prev) => [...prev, ...data.products]);
    }
  }, [data]);

  useEffect(() => {
    if (isScrollDown) {
      getPhotos(limit + 10, skip + 1);
      setLimit(limit + 10);
      setSkip(skip + 1);
    }
  }, [isScrollDown]);

  const getPhotos = (l, s) => {
    get(`https://dummyjson.com/products?limit=${l}&skip=${s}`);
  };
  return (
    <div style={theme === "light" ? themes.light : themes.dark}>
      <div className="d-flex justify-content-center m-3 gap-3">
        <Button color="primary" onClick={() => getPhotos(10, 0)}>
          Get Photos
        </Button>
        <Button color="secondary" onClick={toggleTheam}>
          {theme} mode
        </Button>
      </div>
      {orgData && orgData.length > 0 ? (
        <div>
          <Product data={orgData || []} handleScroll={handleScroll} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default MYAPP;

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    color: "dark"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    color: "white"
  }
};
