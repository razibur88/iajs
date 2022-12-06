import React, { useState, useEffect } from "react";

import axios from "axios";
import Post from "./Post";
import Pagecontainer from "./Pagecontainer";

const Api = () => {
  let [info, setInfo] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(9);
  // pagination
  const lastpage = currentPage * perPage;
  const firstpage = lastpage - perPage;
  const allPage = info.slice(firstpage, lastpage);

  let paginate = (pageNumber) => setCurrentPage(pageNumber);

  let next = () => {
    if (currentPage < allPage) {
      setCurrentPage((currentState) => currentState + 1);
    }
  };
  let prev = () => {
    if (currentPage > 1) {
      setCurrentPage((currentState) => currentState - 1);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setInfo(data);
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}> API Blog</h2>
      <Post post={allPage} />
      <Pagecontainer
        perPage={perPage}
        totalpage={info.length}
        paginate={paginate}
        next={next}
        prev={prev}
        currentPage={currentPage}
      />
    </>
  );
};

export default Api;
