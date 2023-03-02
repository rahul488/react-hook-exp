import { useState } from "react";

const usePaginationOnScroll = () => {
  const [isScrollDown, setScrollDown] = useState(false);
  const [scrollHeight, setScrollHeight] = useState();

  let lasScrollTop = 0;

  const handleScroll = (e) => {
    if (e.scrollTop < lasScrollTop) {
      setScrollDown(false);
    }
    lasScrollTop = e.scrollTop <= 0 ? 0 : e.scrollTop;
    if (e.scrollTop + e.offsetHeight >= e.scrollHeight) {
      setScrollDown(true);
      setScrollHeight(e.scrollHeight);
    }
  };

  return { isScrollDown, handleScroll, scrollHeight };
};
export default usePaginationOnScroll;
