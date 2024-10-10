import React from 'react';

const Card = ({ data }) => {
  if (!Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) {
          return null; 
        }
        return (
          <div className="card" key={index}>
            <img src={curItem.urlToImage} alt={curItem.title || "News Image"} />
            <div className="content">
              <a href={curItem.url} target="_blank" rel="noopener noreferrer">
                {curItem.title}
              </a>
              <p>{curItem.description}</p>
              <button onClick={() => window.open(curItem.url, '_blank')}>
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
