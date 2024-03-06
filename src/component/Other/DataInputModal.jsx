// DataInputModal.js
import React, { useState } from "react";

const DataInputModal = ({ onClose }) => {
  const [destination, setDestination] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = () => {
    console.log("Destination:", destination);
    console.log("Rating:", rating);
    // Add additional logic as needed

    // Close the modal after logging the input
    onClose();
  };

  return (
    <div className="data-input-modal">
      <h3>Where have you been?</h3>
      <label htmlFor="destination">Destination:</label>
      <input
        type="text"
        id="destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <label htmlFor="rating">Rating (1-5):</label>
      <input
        type="number"
        id="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DataInputModal;
