import { FaUser, FaEnvelope } from "react-icons/fa";
import React, { useState } from "react";
import "./Register.css";
import { RiNumbersFill } from "react-icons/ri";
import Summary from "../Summary";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    attendingWithGuest: "",
    guestName: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [showGuestName, setShowGuestName] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name === "attendingWithGuest") {
      setShowGuestName(value === "yes");
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.age) {
      errors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age <= 0) {
      errors.age = "Age must be a number greater than 0";
    }
    if (showGuestName && !formData.guestName) {
      errors.guestName = "Guest Name is required";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setShowSummary(true);
    } else {
      setFormErrors(errors);
      setShowSummary(false);
    }
  };

  return (
    <div className="wrapper relative bg-transparent backdrop-blur-30 border-[2px] border-white-opacity-10 w-[420px] rounded-lg text-white">
      <div className="form-box reg w-[100%] p-[40px]">
        <form onSubmit={handleSubmit}>
          <h1 className="text-[36px] text-center">Event Registration</h1>
          <div className="input-box relative w-[100%] h-[50px] my-[30px]">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Username"
              required
              className="pt-[20px] pr-[45px] pb-[20px] pl-[20px] w-[100%] h-[100%] bg-transparent outline-none border-2 border-white-opacity-10 rounded-[40px] text-[16px] placeholder:text-[#ffffff82]"
            />
            <FaUser className="icon absolute right-[20px] top-[50%] -translate-y-[50%] text-[16px]" />
            {formErrors.name && <div className="error">{formErrors.name}</div>}
          </div>
          <div className="input-box relative w-[100%] h-[50px] my-[30px]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="pt-[20px] pr-[45px] pb-[20px] pl-[20px] w-[100%] h-[100%] bg-transparent outline-none border-2 border-white-opacity-10 rounded-[40px] text-[16px] placeholder:text-[#ffffff82]"
            />
            <FaEnvelope className="icon absolute right-[20px] top-[50%] -translate-y-[50%] text-[16px]" />
            {formErrors.email && <div className="error">{formErrors.email}</div>}
          </div>
          <div className="input-box relative w-[100%] h-[50px] my-[30px]">
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="18"
              required
              className="pt-[20px] pr-[45px] pb-[20px] pl-[20px] w-[100%] h-[100%] bg-transparent outline-none border-2 border-white-opacity-10 rounded-[40px] text-[16px] placeholder:text-[#ffffff82]"
            />
            <RiNumbersFill className="icon absolute right-[20px] top-[50%] -translate-y-[50%] text-[16px]" />
            {formErrors.age && <div className="error">{formErrors.age}</div>}
          </div>
          <div className="input-box relative w-[100%] h-[50px] my-[30px]">
            <select
              name="attendingWithGuest"
              value={formData.attendingWithGuest}
              onChange={handleChange}
              required
              className="custom-select pr-[20px] pl-[20px] w-[100%] h-[100%] bg-transparent outline-none border-2 border-white-opacity-10 rounded-[40px] text-[16px] cursor-pointer appearance-none"
            >
              <option value="" disabled>
                Are you attending with a guest?
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {formErrors.attendingWithGuest && <div className="error">{formErrors.attendingWithGuest}</div>}
          </div>
          {showGuestName && (
            <div className="input-box relative w-[100%] h-[50px] my-[30px]">
              <input
                type="text"
                name="guestName"
                value={formData.guestName}
                onChange={handleChange}
                placeholder="Guest Name"
                required
                className="pt-[20px] pr-[45px] pb-[20px] pl-[20px] w-[100%] h-[100%] bg-transparent outline-none border-2 border-white-opacity-10 rounded-[40px] text-[16px] placeholder:text-[#ffffff82]"
              />
              <FaUser className="icon absolute right-[20px] top-[50%] -translate-y-[50%] text-[16px]" />
              {formErrors.guestName && <div className="error">{formErrors.guestName}</div>}
            </div>
          )}
          <button
            type="submit"
            className="w-[100%] h-[45px] bg-white outline-none rounded-[40px] text-[#333] text-[16px] font-semibold cursor-pointer shadow-custom-light"
          >
            Submit
          </button>
        </form>
        {showSummary && <Summary formData={formData} />}
      </div>
    </div>
  );
};

export default Register;
