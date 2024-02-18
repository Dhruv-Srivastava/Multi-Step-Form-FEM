import Checkbox from "./Checkbox";
import Footer from "./Footer";
export default function AddOns({
  formData,
  setFormData,
  formSectionView,
  setFormSectionView
}
) {
  function handleSubmit(e) {
    e.preventDefault();
    if (e.nativeEvent.submitter.className === "go-back") {
      setFormSectionView((prev) => prev - 1);
      return;
    }

    setFormSectionView((prev) => prev + 1);
  }
  return (
    <div className="form-content">
      <h1 className="page-name">Pick add-ons</h1>
      <h5 className="page-description">
        Add-ons help enhance your gaming experience.
      </h5>

      <form onSubmit={handleSubmit}>
        <div className="add-ons-container">
          <Checkbox
            title="Online Service"
            description="Access to mulitplayer games"
            formData={formData}
            setFormData={setFormData}
            name="onlineService"
          />
          <Checkbox
            title="Larger Storage"
            description="Extra 1TB of cloud storage"
            formData={formData}
            setFormData={setFormData}
            name="largerStorage"
          />
          <Checkbox
            title="Customizable Profile"
            description="Custom theme on your profile"
            formData={formData}
            setFormData={setFormData}
            name="customProfile"
          />
        </div>
        <Footer formSectionView={formSectionView} />
      </form>
    </div>
  );
}
