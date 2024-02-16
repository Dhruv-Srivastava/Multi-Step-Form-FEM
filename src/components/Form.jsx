import { useState } from "react";

import Info from "./Info";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Navbar from "./Navbar";

export default function Form() {
  const [formSectionView, setFormSectionView] = useState(1);

  return (
    <main id="form-container">
      <Navbar />
      {formSectionView === 1 ? (
        <Info />
      ) : formSectionView === 2 ? (
        <Plan />
      ) : formSectionView === 3 ? (
        <AddOns />
      ) : (
        <Summary />
      )}
    </main>
  );
}
