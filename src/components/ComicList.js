import "./ComicList.css";

import React from "react";

export default function ComicList({ comics }) {
  console.log(comics);
  return (
    <div className="characterDetail__content">
      <h1>COMIC LIST:</h1>

      {comics &&
        comics.map((comic) => {
          console.log(comic.resourceURI);
          return (
            <div key={comic.name} className="comic-list">
              <img
                src={comic.thumbnail.path + "/portrait_incredible.jpg"}
                alt=""
              />
              <div className="comic-list-right">
                <h3>{comic.title}</h3>
                <p>PAGE COUNT: {comic.pageCount}</p>
                <p>PUBLISHED: {comic.dates[0].date}</p>
                <p>PRICE: {comic.prices[0].price}$ </p>
                <a href={comic.urls[0].url}>Details...</a>
              </div>
            </div>
          );
        })}
    </div>
  );
}
