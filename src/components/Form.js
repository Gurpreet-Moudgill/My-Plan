import React, { useState } from "react";
import { MdDelete } from "react-icons/md";


function Form() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const listofItems = () => {
    if (!inputList) {

    }
    else {
      setItems([...items, inputList]);
      setInputList('')
    }

  };

  const deleteItem = (id) => {
    const updateitems = items.filter((itemval, ind) =>{
      return ind !== id;
    });
    setItems(updateitems);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your today's plan"
        value={inputList}
        onChange={(e) => setInputList(e.target.value)}
        className="task"
      />
      <button onClick={listofItems} className="button">
        Add
      </button>

      <div className="nothing">
        {/* <li>{inputList}</li> */}
        {items.map((itemval, ind) => {
          return (<div key={ind}>
            <h4 className="text">{itemval}</h4>
            {/* <MdDelete/> */}
            <i className="icon" onClick={()=> deleteItem(ind)} ><MdDelete/></i>
            </div>)
        })}
      </div>
    </div>
  );
}

export default Form;
// value={input} required onChange={onInputChange}
