import { useState } from "react";
import { Data } from "./Data";
import { Link } from "react-router-dom";

const Cart = () => {
  const [qnt, setQnt] = useState(1);
  const [rerender, setRerender] = useState(0);
  let totalPrice=0

  let cartitem = localStorage.getItem("cartitem");
  cartitem = JSON.parse(cartitem);

  function  movetowishlist(id){
    
    let cartitem = localStorage.getItem("cartitem");
    cartitem = JSON.parse(cartitem);
    let newarray=[]
    for (let i=0;i< cartitem.length;i++){
      if(cartitem[i]!=id){
        newarray.push(cartitem[i])
      }
    }
    localStorage.setItem("cartitem", JSON.stringify(newarray));
    setRerender(rerender+1)

    
    let wishlist = localStorage.getItem("wishlist");
    wishlist = JSON.parse(wishlist);
    wishlist.push(id)
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
  
  function removeitem(id) {
    let cartitem = localStorage.getItem("cartitem");
    cartitem = JSON.parse(cartitem);
    let newarray=[]
    for (let i=0;i< cartitem.length;i++){
      if(cartitem[i]!=id){
        newarray.push(cartitem[i])
      }
    }
    localStorage.setItem("cartitem", JSON.stringify(newarray));
    setRerender(rerender+1)
  }

  return (
    
    <div className="card">
      <h1>Cart</h1>
      {cartitem.map((item) => {
        totalPrice=totalPrice+Data[item - 1].price
        return (
          <div className="card">
            <ul className="productbox" key={Data[item-1].id}>
              <li>
                <img src={Data[item - 1].img} alt="img" />
              </li>
              <li>{Data[item-1].id}</li>
              <li>{Data[item - 1].name}</li>
              <li>{Data[item - 1].Reating}</li>
              <li>{Data[item - 1].price}</li>
              <li>
                <button
                  onClick={() => {
                    setQnt(qnt + 1);
                    localStorage.setItem("qntofproduct", JSON.stringify(qnt));
                  }}
                >
                  +
                </button>
                <div>{qnt}</div>
                <button
                  onClick={() => {
                    setQnt(qnt - 1);
                    localStorage.setItem("qntofproduct", JSON.stringify(qnt));
                  }}
                >
                  -
                </button>
              </li>
              <li>
                <button onClick={() => removeitem(Data[item-1].id)}>
                  Remove item
                </button>
              </li>
              <li>
                <button onClick={() => movetowishlist(Data[item-1].id)}>
                  Move to Wishlist
                </button>
              </li>
            </ul>
          </div>
        );
      })}
      <div>
        <ul>
          {cartitem.map((item) => (
            <ul className="billitem">
              <li>
                {Data[item - 1].name} - RS-{Data[item - 1].price}
              </li>
            </ul>
          ))}
        </ul>
        <p>Total Price: RS-{totalPrice}</p>
      </div>
      <button>
        <Link to="/paynow">Checkout</Link>
      </button>
    </div>
  );
};

export default Cart;
