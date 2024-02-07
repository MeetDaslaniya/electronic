import { useEffect, useState } from "react";
import { Data } from "./Data";
const Search = () => {
  const [input, setInput] = useState("");
  const [cart,setCart]=useState([]);
  // const getLocalCartData=()=>{
  //   let localCartData=localStorage.getItem("cartitem");
  //   if(localCartData=== []){
  //     return []
  //   }
  //   else{
  //     return JSON.parse(newCartData);
  //   }
  // }
  useEffect(()=>{
    localStorage.setItem("cartitem",JSON.stringify(cart))
  },[cart])
  return (
    <>
      <cart cart={cart}/>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {Data.filter((item) => {
        return input.toLowerCase() === ""
          ? item
          : item.name.toLowerCase().includes(input.toLowerCase());
      }).map((item) => {
        return (
          <ul>
            <li><img src={item.img}/></li>
            <li>{item.name}</li>
            <li>{item.Reating}</li>
            <button onClick={()=>{
              setCart([...cart,item.name])
              // console.log(cart)
            }}>Quick Add</button>
          </ul>
        );
      })}
    </>
  );
};

export default Search;