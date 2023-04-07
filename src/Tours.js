import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
  const { travels, removeTravel } = props;

  return (
    <section>
      <div className="title">
        <h2>Tours Guide</h2>
        <div className="underline"></div>
      </div>
      <div>
        {travels.map((travel) => {
          return (
            <Tour
              key={travel.id}
              id={travel.id}
              name={travel.name}
              info={travel.info}
              image={travel.image}
              price={travel.price}
              travelOut={removeTravel}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
