import React, { useState, useEffect } from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import api from "./api"
import Cards from "./components/card";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return; // essa função serve para adicionar um novo item na array do carrinho, caso o item ja esteja incluso, ele nao fara nada
    item = Object.assign(item, {"amount" : 1})
    console.log(item);
    setCart([...cart, item]);
  };

  const handleChange = (item, valor) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += valor;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const [user, setUser] = useState([])
   

  useEffect(( )=>{

     fetch('https://www.fruityvice.com/api/fruit/all')
     .then(response => response.json())
     .then(data => {
      console.log(data)
      setUser(data)
     })

  }, [])

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} list={user} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;
