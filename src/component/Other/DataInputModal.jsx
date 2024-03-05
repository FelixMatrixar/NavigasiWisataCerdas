import React, { useState } from "react";

const DataInputModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    destination: "",
    rate: 1,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "rate" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = () => {
    if (formData.destination && formData.rate >= 1 && formData.rate <= 5) {
      onSubmit(formData);
      onClose();
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Data Input Form</h2>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Rate (1-5):
          <input
            type="number"
            name="rate"
            value={formData.rate}
            min="1"
            max="5"
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default DataInputModal;
