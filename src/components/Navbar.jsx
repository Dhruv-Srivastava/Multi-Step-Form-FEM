function NavItem({ stepNumber, stepName, active }) {
  return (
    <div className="nav-item">
      <p className={`view-number ${active ? "active" : ""}`}>{stepNumber}</p>
      <div className="view-info">
        <p className="step-number">Step {stepNumber}</p>
        <p className="step-name">{stepName}</p>
      </div>
    </div>
  );
}

export default function Navbar({ formSectionView }) {
  return (
    <nav className="navbar">
      <NavItem
        stepNumber={1}
        stepName={"your info"}
        active={formSectionView === 1}
        
      />
      <NavItem
        stepNumber={2}
        stepName={"select plan"}
        active={formSectionView === 2}
      />
      <NavItem
        stepNumber={3}
        stepName={"Add-ons"}
        active={formSectionView === 3}
      />
      <NavItem
        stepNumber={4}
        stepName={"Summary"}
        active={formSectionView === 4}
      />
    </nav>
  );
}
