import { useState } from "react";
import { Data } from "./Data";
const Search = () => {
  const [input, setInput] = useState("");
  const [noofitem,setNoofitem]=useState(0);
  
  return (
    <>
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
              setNoofitem(noofitem+1)
              console.log(noofitem)
            }}>Quick Add</button>
          </ul>
        );
      })}
    </>
  );
};

export default Search;
