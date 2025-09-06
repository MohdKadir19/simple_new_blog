import React from "react";

const Card = ({ data, index, formatDateIntl, defaultImage }) => {
  return (
    <>
      <li className="cards_item" key={index}>
        <div className="card">
          <div className="card_image">
            <img
              src={data.urlToImage || defaultImage}
              alt={data.source.name}
              onError={(e) => (e.target.src = defaultImage)}
            />
          </div>
          <div className="card_content">
            <small className="card_publish">
              {formatDateIntl(data.publishedAt)}
            </small>
            <h2 className="card_title">{data.title}</h2>
            <p className="card_text">{data.description}</p>
          </div>
          <div className="card_btn">
            <button className="btn">
              <a href={data.url} target="_blank" rel="noreferrer">
                Read More
              </a>
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Card;
