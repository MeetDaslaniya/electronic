import { useEffect, useState } from "react";
import { Data } from "./Data";
import { Link } from "react-router-dom";
const Search = () => {
  const [input, setInput] = useState("");
  const [cart, setCart] = useState([]);

  // ---------------------------------------------------------
  const [tv, setTv] = useState(true);
  const [watch, setWatch] = useState(true);
  const changehandler = (data) => {
    // console.log(e.target.value)
    if (data === "tv") {
      if (tv === true) {
        // setSelected([...selected, "tv"]);
        setInput("tv")
      }
      setTv(!tv);
    }
    if (data === "watch") {
      if (watch === true) {
        // setSelected([...selected, "watch"]);
        setInput("watch")
      }
      setWatch(!watch);
    }
    // console.log(selected)
  };
  // ---------------------------------------------------------
  // const getLocalCartData=()=>{
  //   let localCartData=localStorage.getItem("cartitem");
  //   if(localCartData=== []){
  //     return []
  //   }
  //   else{
  //     return JSON.parse(newCartData);
  //   }
  // }
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
          type="checkbox"
          value={tv}
          onChange={() => changehandler("tv")}
        />
        TV
        <input
          type="checkbox"
          value={watch}
          onChange={() => changehandler("watch")}
        />
        WATCH
      </div>
      {/* <Link to="/filter">Filter</Link> */}
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
                  // console.log(cart)
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
