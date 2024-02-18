import { planList } from "../utils/price";

export default function PricePlan({ icon, planType, formData, setFormData }) {
  const plan = planType.toLowerCase();

  return (
    <>
      <label
        htmlFor={plan}
        className={`plan-label ${plan === formData.plan ? "bg-active" : ""}`}
      >
        <img src={icon} alt="Plan Icon" className="plan-icon" />
        <div className="plan-info">
          <h3 className="plan-title">{planType}</h3>
          <p className="plan-price">
            $
            {formData.duration === "year"
              ? `${planList[plan] * 10}/yr`
              : `${planList[plan]}/mo`}
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
        checked={plan === formData.plan}
        required
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
