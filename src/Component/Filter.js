import { useState } from "react";

const Filter = () => {
const [selected,setSelected]=useState([])
const [tv,setTv]=useState(true)
const [watch,setWatch]=useState(true)

const changehandler=(data)=>{
    // console.log(e.target.value)
    if(data==="tv"){
        if(tv===true){
            setSelected([...selected,"tv"])
        }
        setTv(!tv)
    }
    if(data==="watch"){
        if(watch===true){
            setSelected([...selected,"watch"])
        }
        setWatch(!watch)
    }
    // console.log(selected)
}
  return (
    <div>
      <input type="checkbox" value={tv} onChange={()=>changehandler("tv")} />
      TV
      <input type="checkbox" value={watch} onChange={()=>changehandler("watch")} />
      WATCH
    </div>
  );
};

export default Filter;
