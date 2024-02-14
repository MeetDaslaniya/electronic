import { useEffect, useState } from "react";
import { Data } from "./Data";
import { Link } from "react-router-dom";

const Search = () => {


  // initialize wishlist
  const initialwishlist = () => {
    let wishlist = localStorage.getItem("wishlist");
    wishlist = JSON.parse(wishlist);
    const myArray = [];
    if (wishlist === myArray) {
      return [];
    } else {
      return wishlist;
    }
  };

  // initilize cart 
  const initialcart = () => {
    let cartdata = localStorage.getItem("cartitem");
    cartdata = JSON.parse(cartdata);
    const myArray = [];
    if (cartdata === myArray) {
      return [];
    } else {
      return cartdata;
    }
  };

  // all state that use in code
  const [input, setInput] = useState("");
  const [cart, setCart] = useState(initialcart);
  const [wishlist, setWishlist] = useState(initialwishlist);
  const [method,setMethod]=useState("most viewed")

  // const sortmethod=(method)=>{
    let newdata=[]
    if (method==="low to high"){
     newdata=Data.sort(
    (p1, p2) => 
    (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0)
    }
    if (method==="high to low"){
      newdata=Data.sort(
    (p1, p2) => 
    (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0)
    }
    if (method==="A to Z"){
      newdata=Data.sort(
    (p1, p2) => 
    (p1.name > p2.name) ? 1 : (p1.name < p2.name) ? -1 : 0)
    }
    if (method==="most reating"){
      newdata=Data.sort(
    (p1, p2) => 
    (p1.Reating < p2.Reating) ? 1 : (p1.Reating > p2.Reating) ? -1 : 0)
    }
    if (method==="most viewed"){
      newdata=Data.sort(
        (p1, p2) => 
        (p1.index > p2.id) ? 1 : (p1.id < p2.id) ? -1 : 0)
        // p1.id-p2.id)
    }
    // console.log(newdata)
    // console.log(newdata[22].id)
  // }

  // for filter funcnality set input 
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
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // main return of component
  return (
    <>
      <cart cart={cart} />
      {/* for search box input */}
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      {/* for sort by and filter product */}
      <div>
        {/* for sort by */}
        <label id="sort">Sort By</label>
        <select onChange={(e)=>{setMethod(e.target.value)}} 
         name="sort" id="sort">
          <option value="most viewed">Most Viewed</option>
          <option value="low to high">Low to High</option>
          <option value="high to low">High to Low</option>
          <option value="A to Z">A to Z</option>
          <option value="most reating">Most Reating</option>
        </select>
        {/* for filter value */}
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
        <input
          type="radio"
          name="filter"
          onChange={() => changehandler("tvandwatch")}
        />
        TV && WATCH
      </div>

      {newdata.filter((item) => {
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
              <li>{item.id}</li>
              <li><Link to={`/product/${item.id}`}>{item.name}</Link></li>
              <li>{item.Reating}</li>
              <li>{item.price}</li>
              <button
                onClick={() => {
                  setCart([...cart, item.id]);
                }}
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  setWishlist([...wishlist, item.id]);
                }}
              >
                Add to Wishlist
              </button>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Search;
