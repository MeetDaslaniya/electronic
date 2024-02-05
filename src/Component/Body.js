import { Data } from "./Data";

const Body = () => {
  
    Data.map((itm) => {
    return (
      <>
        <h1>{itm.name}</h1>
        <h1>{itm.Reating}</h1>
        <img src={itm.img}></img>
      </>
    );
  });
};

export default Body;
