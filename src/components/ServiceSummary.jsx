import { capitalize } from "../utils/capitalize";
import { addOnsList, planList } from "../utils/price";

const nameMapper = {
    arcade:"arcade",
    advanced:"advanced",
    pro:"pro",
    onlineService: "Online Service",
    largerStorage: "Larger Storage",
    customProfile: "Customize Profile"
}

export default function ServiceSummary({ name, duration, setFormSectionView ,className }) {

    const priceMapper= name in planList?planList:addOnsList
  return (
    <div className="plan-summary">
      <div className="plan-name-container">
        <h3 className={className}>
          {
            (name in planList) ? `${capitalize(name)}` : nameMapper[name]
          } 
          {
            (name in planList) && ` (${capitalize(duration)}ly)`
          }
        </h3>
        {name in planList && (
          <button className="go-to-plan" onClick={() => setFormSectionView(2)} type="button">
            Change
          </button>
        )}
      </div>
      <h3 className={className}>
        {name in addOnsList && "+"}${duration === "year" ? priceMapper[name] * 10 : priceMapper[name]}/
        {duration === "year" ? "yr" : "mo"}
      </h3>
    </div>
  );
}
