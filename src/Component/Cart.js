import { Data } from "./Data";

const Cart = () => {
  let cartitem = localStorage.getItem("cartitem");
  cartitem = JSON.parse(cartitem);
  return (
    <div className="header">
      <h1>Cart</h1>
      {cartitem.map((item) => {
        return (
          <div className="card">
            <ul className="productbox">
              <li>
                <img src={Data[item].img} />
              </li>
              {/* <li>{Data[item].id}</li> */}
              <li>{Data[item].name}</li>
              <li>{Data[item].Reating}</li>
              <li>{Data[item].price}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
