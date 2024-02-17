import { useState } from "react";

import Info from "./Info";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Form() {
  const [formSectionView, setFormSectionView] = useState(2);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    duration: "year"
  });

  return (
    <main id="form-container">
      <Navbar formSectionView={formSectionView} />
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
          <AddOns />
        ) : (
          <Summary />
        )}
      </section>
    </main>
  );
}
