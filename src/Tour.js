import React, { useState } from 'react';

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);
  const { id, name, info, image, price, travelOut } = props;

  function readMoreHandler() {
    setReadMore(!readMore);
  }

  const removeTourHandler = () => {
    travelOut(id);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 150)}...`}
          <button onClick={readMoreHandler}>{readMore ? 'Show less' : 'Read more'}</button>
        </p>

        <button className="delete-btn" onClick={removeTourHandler}>
          Not interrested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
