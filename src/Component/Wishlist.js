import { Data } from "./Data";
import { useState, useEffect } from "react";

const Wishlist = () => {

  
  const addtocart=(id)=>{
    let wishlist = localStorage.getItem("wishlist");
    wishlist = JSON.parse(wishlist);
    let newarray = [];
    for (let i = 0; i < wishlist.length; i++) {
      if (wishlist[i] != id - 1) {
        newarray.push(wishlist[i]);
      }
    }
    localStorage.setItem("wishlist", JSON.stringify(newarray));
    setRerender(rerender + 1);
    let cartitem = localStorage.getItem("cartitem");
    cartitem = JSON.parse(cartitem);
    cartitem.push(id-1)
    localStorage.setItem("cartitem", JSON.stringify(cartitem));
  }
  const [rerender, setRerender] = useState(0);

  let wishlist = localStorage.getItem("wishlist");
  wishlist = JSON.parse(wishlist);

  const removeitem = (id) => {
    let wishlist = localStorage.getItem("wishlist");
    wishlist = JSON.parse(wishlist);
    let newarray = [];
    for (let i = 0; i < wishlist.length; i++) {
      if (wishlist[i] != id - 1) {
        newarray.push(wishlist[i]);
      }
    }
    localStorage.setItem("wishlist", JSON.stringify(newarray));
    setRerender(rerender + 1);
  };

  return (
    <div className="header">
      <h1>Wishlist</h1>
      {wishlist.map((item) => {
        return (
          <div className="card">
            <ul className="productbox" key={Data[item].id}>
              <li>
                <img src={Data[item - 1].img} alt="img" />
              </li>
              {/* <li>{Data[item].id}</li> */}
              <li>{Data[item - 1].name}</li>
              <li>{Data[item - 1].Reating}</li>
              <li>{Data[item - 1].price}</li>
              <li>
                <button onClick={() => removeitem(Data[item].id)}>
                  Remove item
                </button>
                <button onClick={() => addtocart(Data[item].id)}>
                  Add to Cart
                </button>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Wishlist;
