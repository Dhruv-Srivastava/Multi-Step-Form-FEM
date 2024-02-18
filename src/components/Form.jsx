import { useState } from "react";

import Info from "./Info";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Navbar from "./Navbar";

export default function Form() {
  const [formSectionView, setFormSectionView] = useState(1);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    duration: "year",
    addOns: {
      onlineService: false,
      largerStorage: false,
      customProfile: false,
    },
  });

  return (
    <main id="form-container">
      <Navbar
        formSectionView={formSectionView}
        setFormSectionView={setFormSectionView}
      />
      <section id="form-content-container">
        {formSectionView === 1 ? (
          <Info
            formData={formData}
            setFormData={setFormData}
            formSectionView={formSectionView}
            setFormSectionView={setFormSectionView}
          />
        ) : formSectionView === 2 ? (
          <Plan
            formData={formData}
            setFormData={setFormData}
            formSectionView={formSectionView}
            setFormSectionView={setFormSectionView}
          />
        ) : formSectionView === 3 ? (
          <AddOns
            formData={formData}
            setFormData={setFormData}
            formSectionView={formSectionView}
            setFormSectionView={setFormSectionView}
          />
        ) : (
          <Summary
            formData={formData}
            setFormData={setFormData}
            formSectionView={formSectionView}
            setFormSectionView={setFormSectionView}
            formSubmitted={formSubmitted}
            setFormSubmitted={setFormSubmitted}
          />
        )}
      </section>
    </main>
  );
}
