import { useEffect, useState } from "react";
import { Data } from "./Data";

const Search = () => {
  const initial=()=>{
    let cartdata = localStorage.getItem("cartitem")
    cartdata=JSON.parse(cartdata)
    const myArray = [];
    if(cartdata === myArray){
      return [];
    }
    else{
      return cartdata;
    }
  }
  const initialprice=()=>{
    let cartprice = localStorage.getItem("totalPrice")
    
    // const myArray = 0;
    if(cartprice === 0){
      return parseInt(0);
    }
    else{
      return parseInt(cartprice);
    }
  }

  const [input, setInput] = useState("");
  const [cart, setCart] = useState(initial);
  const [totalPrice, setTotalPrice] = useState(initialprice);
  
  const changehandler = (data) => {
    if (data === "tv") {
      setInput("TV");
    }
    if (data === "watch") {
      setInput("Watch");
    }
    if (data === "tvandwatch") {
      setInput("");
    }
  };

  useEffect(() => {
    localStorage.setItem("cartitem", JSON.stringify(cart));
    localStorage.setItem("totalPrice", totalPrice);
  }, [cart]);
  return (
    <>
      <cart cart={cart} />
      <input
        className="searchbox"
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div>
        <input
          type="radio"
          name="filter"
          // value={tv}
          onChange={() => changehandler("tv")}
        />
        TV
        <input
          type="radio"
          name="filter"
          // value={watch}
          onChange={() => changehandler("watch")}
        />
        WATCH
        <input type="radio" name="filter" onChange={() => changehandler("tvandwatch")}/>
        TV && WATCH
      </div>

      {Data.filter((item) => {
        return input.toLowerCase() === ""
          ? item
          : item.name.toLowerCase().includes(input.toLowerCase());
      }).map((item) => {
        return (
          <div className="card">
            <ul className="productbox">
              <li>
                <img src={item.img} />
              </li>
              {/* <li>{item.id}</li> */}
              <li>{item.name}</li>
              <li>{item.Reating}</li>
              <li>{item.price}</li>
              <button
                onClick={() => {
                  setCart([...cart, item.id]);
                  {
                    setTotalPrice(totalPrice + item.price);
                  }
                  // console.log(totalPrice);
                }}
              >
                Quick Add
              </button>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Search;
