import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [groceryInput, setGroceryInput] = useState("");
  const [groceryList, setGroceryList] = useState([]);

  useEffect(() => {
    console.log(groceryInput, groceryList);
  }, [groceryInput, groceryList]);

  function handleInput(e) {
    setGroceryInput(e.target.value);
  }

  function handleSubmit() {
    // get my groceryInput value,
    // push that value into my groceryList array, make sure it doesn't mutate
    // reset groceryInput to ''
    let count = 1;
    let copy = [...groceryList];
    for (let i = 0; i < copy.length; i++) {
      if (groceryList[i].name === groceryInput) {
        count++;
      }
    }

    let item = { name: groceryInput, count: count };
    // search my grocerylist to see if my current input
    // if it's in there, count how many are in there, and store that in a variable
    // update the entry with the new total count
    setGroceryList([...groceryList, item]);
    setGroceryInput("");
  }

  function handleDelete(e) {
    let index = parseInt(e.target.id, 10);
    // filter my groceryList and return all items where index !== id
    let updated = [...groceryList];
    console.log(index);
    updated = updated.filter((item, id) => {
      return id !== index;
    });

    setGroceryList(updated);
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="grocery item"
        value={groceryInput}
        onChange={(e) => handleInput(e)}
      />
      <button onClick={handleSubmit}>Add to grocery list</button>
      <ul>
        {groceryList.map((item, index) => {
          return (
            <div>
              <li key={index}>{item.name}</li>
              <p>{item.count}</p>
              <button id={index} onClick={handleDelete}>
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

// input, button (add item to list)
// I'm so sorry - interet issues. Attempting to rejoin
