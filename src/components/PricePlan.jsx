export default function PricePlan({ icon, planType, formData, setFormData }) {
  console.log(formData);
  const price = {
    arcade: 90,
    advanced: 120,
    pro: 150,
  };

  const plan=planType.toLowerCase()

  const styles={
    backgroundColor:plan===formData.plan?"var(--pastel-blue)":"",
    bordeCcolor: plan===formData.plan?"var(--purplish-blue)":"",
  }
  return (
    <>
      <label htmlFor={plan} className="plan-label" style={styles}>
        <img src={icon} alt="Plan Icon" className="plan-icon" />
        <div className="plan-info">
          <h3 className="plan-title">{planType}</h3>
          <p className="plan-price">
            $
            {formData.duration === "year"
              ? `${price[plan]}/yr`
              : `${price[plan] / 10}/mo`}
          </p>
          {formData.duration === "year" && (
            <p className="free">2 months free</p>
          )}
        </div>
      </label>
      <input
        type="radio"
        name="plan"
        id={plan}
        value={plan}
        checked={plan===formData.plan}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
    </>
  );
}
