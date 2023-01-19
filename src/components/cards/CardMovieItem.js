import React from 'react';
import './CardMovieItem.css';
const CardMovieItem = (props) => {
  return (
    <>

      <div  className="col-2 m-1 d-flex justify-content-start bg-transparent border-0">
        <div className="card bg-transparent border-0 " style={{ width: "14rem" }}>
          <img className="img-fluid rounded-2"  src={props.image} />
          <div className="bg-transparent">
            <h6 className="card-title text-light my-3 ">{props.name}</h6>
            <p className="card-text"></p>

          </div>
        </div>
      </div>
    </>
  );
};

export default CardMovieItem;