export default function Button({
  children,
  variant,
  formSectionView,
  setFormSectionView,
}) {
  function handleClick() {
    setFormSectionView((prev) => {
      if (prev === 1 && variant === "go-back") return prev;
      if (prev === 4 && variant === "next-step") return prev;

      return variant === "go-back" ? prev - 1 : prev + 1;
    });
  }
  return (
    <button
      className={variant}
      onClick={handleClick}
      style={{
        cursor:
          formSectionView === 1 && variant === "go-back" ? "not-allowed" : "pointer",
      }}
    >
      {children}
    </button>
  );
}
