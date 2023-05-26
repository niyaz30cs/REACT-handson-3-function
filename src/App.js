import "./App.css";

import Child from "./child";

import { useState } from "react";

 const Parent=()=> {

   const [name,setName]=useState("");
   const [department,setDepartment]=useState("");
   const [rating,setRating]=useState("");
   const [click,setClick]=useState(true);
   const [data,setData]=useState([]);

   const change = (event) => {
      const {name,value}=event.target
      if(name==="name")
      {
         setName(value)
      }
      else if(name==="department")
      {
         setDepartment(value)
      }
      else if(name==="rating")
      {
         setRating(value)
      }
      else if(name==="click")
      {
         setClick(false)
      }

   }

   const togglefunction = () => {
      setClick(!click )
   }

   const handleClick = () => {
      let obj = {
         name:name,
         department:department,
         rating:rating
      }
      setData([...data,obj])
      setName("");
      setDepartment("");
      setRating("");
      setClick(false);


   }


      return (
         <>
            {click ?
               <>
                  <h1 className="center">EMPLOYEE FEEDBACK FORM</h1>
                  <div className="input">
                     Name:<input type="text" id="area" name="name" value={name} placeholder=""
                        onChange={change} />
                  </div>
                  <div className="input" >
                     Department:<input type="text" id="area" name="department" value={department} placeholder=""
                        onChange={change} />
                  </div>
                  <div className="input">
                     Rating:<input type="number" id="area" name="rating" value={rating} placeholder=""
                        onChange={change} />
                  </div>
                  <div id="btn">
                     <button onClick={handleClick}>Submit</button>
                  </div>
               </>
               :
               <Child value={data} set={togglefunction} />
            }
         </>
      )
   }

export default Parent
