import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Button from "../Button";
import Link from "next/link";

const Modal = ({ isOpen, onClose, href }) => {
  const [btnTrue, setBtnTrue] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    email: false,
  });
  console.log(formData)

  useEffect(() => {
    // Check if all fields are filled and regex patterns are satisfied
    const isValid =
      formData.firstName &&
      formData.lastName &&
      formData.phoneNumber &&
      formData.email &&
      !Object.values(errors).some((error) => error);

    setBtnTrue(isValid);
  }, [formData, errors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = false;
    switch (name) {
      case "firstName":
      case "lastName":
        error = !/^[a-zA-Z]+$/.test(value); // Regex for letters only
        break;
      case "phoneNumber":
        error = !/^\d+$/.test(value); // Regex for digits only
        break;
      case "email":
        error = !/^\S+@\S+\.\S+$/.test(value); // Regex for email format
        break;
      default:
        break;
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleDownload = () => {
    // Validate if all fields are filled and regex patterns are satisfied
    const { firstName, lastName, phoneNumber, email } = formData;
    if (!firstName || !lastName || !phoneNumber || !email) {
      setErrors({
        firstName: !firstName,
        lastName: !lastName,
        phoneNumber: !phoneNumber,
        email: !email,
      });
    } else {
      console.log("Downloading...");
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
      });
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg flex  flex-col m-5 w-fit">
            <div className="flex justify-between mb-4 space-x-20 items-center">
              <h2 className="text-2xl font-bold">Enter Your Information</h2>
              <IoClose className="cursor-pointer" size={24} onClick={onClose} />
            </div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="* First Name"
              className={`input mb-4 focus:outline-none focus:border-green border-2 border-gray-200 rounded-md p-2 ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 mb-2">
                First Name is required and should contain letters only
              </p>
            )}
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="* Last Name"
              className={`input mb-4 focus:outline-none focus:border-green border-2 border-gray-200 rounded-md p-2 ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 mb-2">
                Last Name is required and should contain letters only
              </p>
            )}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="* Email"
              className={`input mb-4 focus:outline-none focus:border-green border-2 border-gray-200 rounded-md p-2 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 mb-2">
                Email is required and should be in valid format
              </p>
            )}
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="* Phone Number"
              className={`input mb-4 focus:outline-none focus:border-green border-2 border-gray-200 rounded-md p-2 ${
                errors.phoneNumber ? "border-red-500" : ""
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 mb-2">
                Phone Number is required and should contain digits only
              </p>
            )}
            <div>
              <Link
                href={href}
                className="no-underline text-white"
                download
                target="_blank"
              >
                <Button
                  className={`!px-10 w-full font-bold !bg-black mx-auto ${
                    !btnTrue ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  onClick={handleDownload}
                  disabled={!btnTrue}
                >
                  Download Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;