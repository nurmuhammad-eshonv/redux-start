// Modal.js
import React from "react";
import "./Modal.css";

function Modal({ user, isOpen, onClose, onSubmit, setName, setPhoneNumber, setAddress }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit User</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
            onClose();
          }}
        >
          <input
            type="text"
            placeholder="Enter your name"
            value={user.name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter your phone number"
            value={user.phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your address"
            value={user.address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
        <button onClick={onClose} className="modal-close-btn">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
