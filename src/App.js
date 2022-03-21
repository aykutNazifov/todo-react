import React, { useState } from "react";
import "./style.css";

const INITIAL_STATE = [
  { id: 1, title: "Go to market", completed: false },
  { id: 2, title: "Pay bills", completed: true }
];

export default function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="add_form">
        <input
          value={newTodo}
         onChange={(e) => setNewTodo(e.target.value)}
          placeholer="Add to list" />
        <button
         onClick={() => {
             if (newTodo) {
                setList([...list, 
                    { id:Date.now(), title : newTodo, completed : false }
                ]);
                setNewTodo("");
             }        
    }}>Add</button>
      </div>
      <div className="list">
        {list.map(item => (
          <div
          key={item.id}
           onClick={() => {
              setList(list.map(el => el.id === item.id ? {...el, completed: !el.completed} : el))}} className={item.completed ? "completed_true" : ""}>{item.title}</div>
        ))}
      </div>
      <button
       onClick={() => {
           setList(list.filter(item => !item.completed))
       }}
      className="delete">Delete Completed</button>
    </div>
  );
}
