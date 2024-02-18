import { addOnsList, planList } from "../utils/price";
import Footer from "./Footer";
import ServiceSummary from "./ServiceSummary";
import iconThankYou from "../assets/images/icon-thank-you.svg"

export default function Summary({
  formData,
  setFormData,
  formSectionView,
  setFormSectionView,
  formSubmitted,
  setFormSubmitted,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    if (e.nativeEvent.submitter.className === "go-back") {
      setFormSectionView((prev) => prev - 1);
      return;
    }

    setFormSubmitted(true);
  }
  const addOnsDetails = Object.keys(formData.addOns).filter(
    (addOn) => formData.addOns[addOn]
  );

  const totalCost =
    planList[formData.plan] +
    addOnsDetails.reduce((sum, addOn) => sum + addOnsList[addOn], 0);

  const addOnElements = addOnsDetails.map((addOn) => (
    <ServiceSummary
      name={addOn}
      duration={formData.duration}
      setFormSectionView={setFormSectionView}
      key={addOn}
      className="plan-addon-info"
    />
  ));

  return (
    <>
      {formSubmitted ? (
        <div className="submit-container">
          <img src={iconThankYou} alt="Thank you icon" />
          <h1 className="thank-you-heading">Thank you!</h1>
          <p className="thank-you-description">Thank you for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
      ) : (
        <div className="form-content">
          <h1 className="page-name">Finishing up</h1>
          <h5 className="page-description">
            Double-check everything looks OK before confirming.
          </h5>

          <form onSubmit={handleSubmit}>
            <div className="summary-info-container">
              <ServiceSummary
                name={formData.plan}
                duration={formData.duration}
                setFormSectionView={setFormSectionView}
                className="plan-summary-info"
              />
              {addOnElements}
            </div>
            <div className="final-price">
              <p>Total (per {formData.duration})</p>
              <p className="total-cost">
                +${formData.duration === "year" ? totalCost * 10 : totalCost}/
                {formData.duration === "year" ? "yr" : "mo"}
              </p>
            </div>
            <Footer
              formSectionView={formSectionView}
              variant="confirm"
              content="Confirm"
            />
          </form>
        </div>
      )}
    </>
  );
}
