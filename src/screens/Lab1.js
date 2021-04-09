import React, { useState } from "react";
import './styles.css'

const Parser = require("rss-parser");

function Lab1() {
  const [value, setValue] = useState({
    url: "https://vnexpress.net/rss/tin-moi-nhat.rss",
    items: [],
  });

  const getRss = async () => {
    const parser = new Parser();

    const feed = await parser.parseURL(value.url);

    const items = feed.items.slice(0,5)
    console.log(items);
    
    setValue((prevValue) => {
      return { ...prevValue, items };
    });
    console.log(value);
    
    //return items
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setValue((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    console.log(event);
    console.log(event.target);
    console.log(name,value);
  }

  return (
    <div className="Lab1">
      <div className="form">
        <h1>Lab 1</h1>
        <input
          type="text"
          name="url"
          value={value.url}
          onChange={handleChange}
        ></input>
        <button className="btnGet" type="button" onClick={getRss}>
          Lấy tin
        </button>
      </div>
      {value.items.map((item) => {
        
          console.log(item);
      return ( 
          <div className="item" key={item.title}>
            <a href={item.link}>{item.title}</a>
            <p className="date">{item.pubDate}</p>
            <p>{item.contentSnippet}</p>
          </div>
      )
      })}
    </div>
  );
}

export default Lab1;
