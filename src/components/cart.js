import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {

  


  const handleRemove = (id) => { // segundo vai chamar essa função
    const arr = cart.filter((item) => item.id !== id); // o filter ele serve pra voce "listar" os itens de uma array de acordo com a condição que voce define para ele, nesse caso ele vai listar todos os arrays que tem o id diferente do id passado por parametro. exemplo, tenho um array [1, 2, 3, 4] porém quero fazer um filter sem o numero 3, ele retornara [1,2,4]
    console.log(arr);//
    setCart(arr);// aqui ele vai sertar o novo valor do cart. exemplo adicionei três itens no carrinho, no momento tenho 3 itens, porem quando clico em remover crio um novo array chamado arr e passo apenas os itens que quero que continue no carrinho (arr = filter) e quando setto o setCart(arr) o cart vai passar a ter o valor do arr 
    
  };

  const handleRemoveAll = () => { // segundo vai chamar essa função
    const arr = []
    console.log(arr)
    setCart(arr);
    
  };

  

  useEffect(() => {
    
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
              <img src={"https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg"} alt="" />
              <p>{item.name}</p>
          </div>  
          <div className="cart_nutr">

              <p>Nutritions</p>
              <span>{item.nutritions.calories}</span>
              <br></br>
              <span>{item.nutritions.fat}</span>
              <br></br>
              <span>{item.nutritions.protein}</span>
              <br></br>
              <span>{item.nutritions.sugar}</span>
              <br></br>
          </div>
           
          
         
          <div className="but">
            <button  onClick={() => handleChange(item, 1)}>+</button>
            <label>{item.amount}</label>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            { <button onClick={() => handleRemove(item.id)}>Remove</button>  /*1 - ele vai pegar o id do item que voce quer excluir */}
          </div>
        </div> 
      ))}
      <div>
      <button  onClick={() => handleRemoveAll()}>RemoverAll</button>
      </div>
    
    </article>
  );
};

export default Cart;
