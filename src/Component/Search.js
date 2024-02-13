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

  const [input, setInput] = useState("");
  const [cart, setCart] = useState(initial);
  
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
