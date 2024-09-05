import React from "react";
import "./App.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
function App() {
  const dispatch = useDispatch();
  const nameRef = useRef("");
  const numberRef = useRef("");
  const addressRef = useRef("");
  const users = useSelector((state) => state.users);

  console.log(users.users);

  const [isModalOpen, setIdModalOpen] = useState(true);

  function handleDelete(index) {
    dispatch({ type: "DELETE", payload: index });
  }
  function handleEdit(_, index) {
    dispatch({ type: "EDIT", payload: index });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !nameRef.current.value.trim() ||
      !numberRef.current.value.trim() ||
      !addressRef.current.value.trim()
    ) {
      alert("All fields are required.");
      return;
    }

    const user = {
      name: nameRef.current.value,
      phoneNumber: numberRef.current.value,
      address: addressRef.current.value,
    };

    dispatch({ type: "ADD", payload: user });
    nameRef.current.value = "";
    numberRef.current.value = "";
    addressRef.current.value = "";
  }

  return (
    <div>
      <form className="formm">
        <input
          ref={nameRef}
          placeholder="Enter your name"
          className="input"
          type="text"
        />
        <input
          ref={numberRef}
          placeholder="Enter your phoneNumber"
          className="input"
          type="number"
        />
        <input
          ref={addressRef}
          placeholder="Enter your address"
          className="input"
          type="text"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <div className="cards">
        {users.users.map((user, index) => {
          return (
            <div className="card" key={index}>
              <div className="cardss">
                <p>name: </p>
                <h1>{user.name}</h1>
              </div>

              <div className="cardss">
                <p>phoneNumber:</p>
                <p>{user.phoneNumber}</p>
              </div>

              <div className="cardss">
                <p>address:</p>
                <p>{user.address}</p>
              </div>
              <div className="btn-wr">
                <button onClick={handleEdit} className="btn">
                  edit
                </button>
                <button onClick={() => handleDelete(index)} className="btn">
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
