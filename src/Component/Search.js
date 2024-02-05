import { useState } from "react";
import { Data } from "./Data";

const Search = () => {
  const [input, setInput] = useState("");
  // const [filteredData,setFilteredData]=useState([...Data])
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          console.log(input);
        }}
      />
      {Data.filter((item) => {
        return input.toLowerCase() === ""
          ? item
          : item.name.toLowerCase().includes(input);
      }).map((item) => {
        return (
          <ul>
            <li>{item.name}</li>
          </ul>
        );
      })}
    </>
  );
};

export default Search;
