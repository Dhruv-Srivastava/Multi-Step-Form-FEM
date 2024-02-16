function NavItem({stepNumber,stepName,active}) {
  return (
    <div className="nav-item">
      <p className={`view-number ${active?"active":""}`}>{stepNumber}</p>
      <div className="view-info">
        <p className="step-number">Step {stepNumber}</p>
        <p className="step-name">{stepName}</p>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavItem stepNumber={1} stepName={"your info"} active={true}/>
      <NavItem stepNumber={2} stepName={"select plan"}/>
      <NavItem stepNumber={3} stepName={"Add-ons"}/>
      <NavItem stepNumber={4} stepName={"Summary"}/>
    </nav>
  );
}
