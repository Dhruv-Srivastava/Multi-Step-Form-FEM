import { useState } from "react";
import Footer from "./Footer";

export default function Info({
  formData,
  setFormData,
  formSectionView,
  setFormSectionView,
}) {
  const [invalidClass, setInvalidClass] = useState(false);
  function handleChange(e) {
    setInvalidClass(false);
    const field = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setFormSectionView((prev) => {
      if (prev === 4) return prev;

      return prev + 1;
    });
  }

  function handleInvalid(e) {
    setInvalidClass(true);
  }

  return (
    <div className="form-content">
      <h1 className="page-name">Personal info</h1>
      <h5 className="page-description">
        Please provide your name, email address, and phone number.
      </h5>
      <form onSubmit={handleSubmit}>
        <div className="label-container">
          <label htmlFor="name" className="p-info">
            Name
          </label>
          {invalidClass && formData.name === "" && (
            <label htmlFor="name" className="error-label">
              This is a required field
            </label>
          )}
        </div>
        <input
          type="text"
          className={
            invalidClass && formData.name === "" ? "invalid-input" : ""
          }
          placeholder="e.g. Stephen King"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onInvalid={handleInvalid}
          required
        />

        <div className="label-container">
          <label htmlFor="email" className="p-info">
            Email Address
          </label>
          {invalidClass && formData.email === "" && (
            <label htmlFor="email" className="error-label">
              This is a required field
            </label>
          )}
        </div>
        <input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          id="email"
          name="email"
          className={
            invalidClass && formData.email === "" ? "invalid-input" : ""
          }
          value={formData.email}
          onChange={handleChange}
          onInvalid={handleInvalid}
          required
        />

        <div className="label-container">
          <label htmlFor="phone" className="p-info">
            Phone Number
          </label>
          {invalidClass && formData.phone === "" && (
            <label htmlFor="phone" className="error-label">
              This is a required field
            </label>
          )}
        </div>
        <input
          type="text"
          placeholder="e.g. +1 234 567 890"
          id="phone"
          name="phone"
          className={
            invalidClass && formData.phone === "" ? "invalid-input" : ""
          }
          value={formData.phone}
          onChange={handleChange}
          onInvalid={handleInvalid}
          required
        />
        <Footer
          setFormSectionView={setFormSectionView}
          formSectionView={formSectionView}
        />
      </form>
    </div>
  );
}
