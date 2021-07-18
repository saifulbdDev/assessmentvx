/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './item.css';
function Item(props) {
  console.log();
  return (
    <div className="item">
      <div className="service-box">
        <span className="bottom25">
          <i className={props.item?.icon}></i>
        </span>
        <h4 className=" text-nowrap">
          <a href="#">{props.item?.title}</a>
        </h4>
        <p>{props.item?.body}</p>
      </div>
    </div>
  );
}

export default Item;
