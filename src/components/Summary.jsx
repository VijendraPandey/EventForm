import React from "react";
const Summary = ({ formData }) => {
  return (
    <div className="summary-box mt-[30px] p-[20px] bg-white text-[#333] rounded-lg shadow-lg">
      <h2 className="text-[24px] mb-[20px]">Registration Summary</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Age:</strong> {formData.age}</p>
      <p><strong>Attending with Guest:</strong> {formData.attendingWithGuest === "yes" ? "Yes" : "No"}</p>
      {formData.attendingWithGuest === "yes" && (
        <p><strong>Guest Name:</strong> {formData.guestName}</p>
      )}
    </div>
  );
};

export default Summary;
