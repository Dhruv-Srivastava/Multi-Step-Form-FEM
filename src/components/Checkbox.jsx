import iconCheckmark from "../assets/images/icon-checkmark.svg";
import { addOnsList } from "../utils/price";
export default function Checkbox({
  title,
  description,
  formData,
  setFormData,
  name,
}) {
  function handleCheck(e) {
    setFormData((prev) => ({
      ...prev,
      addOns: {
        ...prev.addOns,
        [name]: !prev.addOns[name],
      },
    }));
  }

  const styles={
    backgroundColor:formData.addOns[name]?"var(--purplish-blue)":"",
    border:formData.addOns[name]?"none":"1px solid var(--cool-gray)"
  }
  return (
    <label
      htmlFor={name}
      className={`add-on-label ${formData.addOns[name] ? "bg-active" : ""}`}
    >
      <div className="checkbox" style={styles}>
        {
          formData.addOns[name] && 
          <img src={iconCheckmark} alt="checkmark icon" />
        }
      </div>
      <div className="add-on-detail">
        <p className="add-on-name">{title}</p>
        <p className="add-on-description">{description}</p>
      </div>
      <p className="add-on-price">
        +${formData.duration === "year" ? addOnsList[name] * 10 : addOnsList[name]}/
        {formData.duration === "year" ? "yr" : "mo"}
      </p>
      <input
        type="checkbox"
        name={name}
        id={name}
        value={formData.addOns[name]}
        checked={formData.addOns[name] === true}
        onChange={handleCheck}
      />
    </label>
  );
}
