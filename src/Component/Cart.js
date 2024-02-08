import { Data } from "./Data";
import { Link } from "react-router-dom";

const Cart = () => {
  
  let cartitem = localStorage.getItem("cartitem");
  let totalPrice = localStorage.getItem("totalPrice");
  cartitem = JSON.parse(cartitem);
  return (
    <div className="header">
      <h1>Cart</h1>
      {cartitem.map((item) => {
        return (
          <div className="card">
            <ul className="productbox">
              <li>
                <img src={Data[item-1].img} />
              </li>
              {/* <li>{Data[item].id}</li> */}
              <li>{Data[item-1].name}</li>
              <li>{Data[item-1].Reating}</li>
              <li>{Data[item-1].price}</li>
              {/* {setTotalPrice(totalPrice + Data[item].price)} */}
            </ul>
          </div>
        );
      })}
      <div>
        <ul>
          {cartitem.map((item) => (
            <ul className="billitem">
            <li>
              {Data[item-1].name} - RS-{Data[item-1].price}
            </li>
            </ul>
          ))}
        </ul>
        <p>Total Price: RS-{totalPrice}</p>
      </div>
      <button><Link to="/paynow">Checkout</Link></button>
    </div>
  );
};

export default Cart;
