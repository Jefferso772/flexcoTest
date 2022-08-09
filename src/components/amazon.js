import React, { Component, useEffect, useState } from "react";
import Cards from "./card";
import "../styles/amazon.css";




const Amazon = ({ handleClick,list }) => {
  
  
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
