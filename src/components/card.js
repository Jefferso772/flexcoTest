import React from "react";

const Cards = ({ item, handleClick }) => {
  const { name, genus, order,family  } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2j1FB2wVpThAotE0JSjq7FmWspsrxoap7bJZFECZVguCllAXDL0wODq2G_Heh7Bfggac&usqp=CAU"} alt="" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>{genus}</p>
        <p>{order}</p>
        <p>{family}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
