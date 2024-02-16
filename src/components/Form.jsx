import { useState } from "react";

import Info from "./Info";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Form() {
  const [formSectionView, setFormSectionView] = useState(1);

  return (
    <main id="form-container">
      <Navbar formSectionView={formSectionView} />
      <section id="form-content">
        {formSectionView === 1 ? (
          <Info />
        ) : formSectionView === 2 ? (
          <Plan />
        ) : formSectionView === 3 ? (
          <AddOns />
        ) : (
          <Summary />
        )}
        <Footer
          setFormSectionView={setFormSectionView}
          formSectionView={formSectionView}
        />
      </section>
    </main>
  );
}
