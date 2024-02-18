import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";
import PricePlan from "./PricePlan";
import Footer from "./Footer";

export default function Plan({
  formData,
  setFormData,
  formSectionView,
  setFormSectionView,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    if(e.nativeEvent.submitter.className==="go-back"){
      setFormSectionView(prev=>prev-1)
      return
    }

    setFormSectionView(prev=>prev+1)
  }
  return (
    <div className="form-content">
      <h1 className="page-name">Select your plan</h1>
      <h5 className="page-description">
        You have the option of monthly or yearly billing.
      </h5>

      <form onSubmit={handleSubmit}>
        <div className="plan-info-container">
          <PricePlan
            icon={iconArcade}
            planType="Arcade"
            formData={formData}
            setFormData={setFormData}
          />
          <PricePlan
            icon={iconAdvanced}
            planType="Advanced"
            formData={formData}
            setFormData={setFormData}
          />
          <PricePlan
            icon={iconPro}
            planType="Pro"
            formData={formData}
            setFormData={setFormData}
          />
        </div>

        <div className="plan-duration-container">
          <label
            htmlFor="monthly"
            style={{
              color:
                formData.duration === "month"
                  ? "var(--marine-blue)"
                  : "var(--cool-gray)",
            }}
          >
            Monthly
          </label>
          <input
            type="radio"
            name="duration"
            id="monthly"
            value="month"
            checked={formData.duration === "month"}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />

          <span className="toggle"></span>
          <label
            htmlFor="yearly"
            style={{
              color:
                formData.duration === "year"
                  ? "var(--marine-blue)"
                  : "var(--cool-gray)",
            }}
          >
            Yearly
          </label>
          <input
            type="radio"
            name="duration"
            id="yearly"
            value="year"
            checked={formData.duration === "year"}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <Footer formSectionView={formSectionView}/>
      </form>
    </div>
  );
}
