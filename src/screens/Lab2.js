import React, { useState, useEffect } from "react";
// Styled
import styled from "styled-components";
// Router
import { Link } from "react-router-dom";
const Parser = require("rss-parser");
// const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const Lab2 = () => {
  useEffect(() => {
    getRss("https://vnexpress.net/rss/tin-moi-nhat.rss");
  }, []);
  const [value, setValue] = useState({
    url: "",
    items: [],
  });

  const getRss = async (url) => {
    const parser = new Parser();

    const feed = await parser.parseURL(url);

    let items = feed.items.slice(0, 15);

    setValue((prevValue) => {
      return { ...prevValue, items };
    });
  };

  //   function handleChange(event) {
  //     let { name, value } = event.target;
  //     setValue((prevValue) => {
  //       return { ...prevValue, [name]: value };
  //     });
  //   }

  return (
    <div>
      <h1>Lab2</h1>
      <StyledNav>
        <ul>
          <li>
            <Link
              to="/lab2"
              onClick={() =>
                getRss("https://vnexpress.net/rss/tin-moi-nhat.rss")
              }
            >
              Trang chủ
            </Link>
          </li>
          <li>
            <Link
              to="/lab2"
              onClick={() => getRss("https://vnexpress.net/rss/the-gioi.rss")}
            >
              Thế giới
            </Link>
          </li>
          <li>
            <Link
              to="/lab2"
              onClick={() => getRss("https://vnexpress.net/rss/thoi-su.rss")}
            >
              Thời sự
            </Link>
          </li>
          <li>
            <Link
              to="/lab2"
              onClick={() => getRss("https://vnexpress.net/rss/suc-khoe.rss")}
            >
              Sức khỏe
            </Link>
          </li>
          <li>
            <Link
              to="/lab2"
              onClick={() => getRss("https://vnexpress.net/rss/gia-dinh.rss")}
            >
              Đời sống
            </Link>
          </li>
          <li>
            <Link
              to="/lab2"
              onClick={() => getRss("https://vnexpress.net/rss/du-lich.rss")}
            >
              Du lịch
            </Link>
          </li>
        </ul>
      </StyledNav>
      <ol>
        {value.items.map((item) => (
          <NewsItem key={item.title}>
            <li>
              <a href={item.link}>{item.title}</a>
            </li>
          </NewsItem>
        ))}
      </ol>
    </div>
  );
};

const NewsItem = styled.div`
  position:relative;
  padding: 1rem;
  margin: 1rem;
  a {
    text-decoration: none;
    color: black;
    font-size: 2rem;
  }
`;

const StyledNav = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 5rem;
    position: relative;
    font-size: 1rem;
  }
  a {
    text-decoration: none;
  }
  h1 {
    font-family: "Abril Fatface", cursive;
  }
`;

export default Lab2;
