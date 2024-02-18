export default function Button({
  children,
  variant,
  type
}) {
  return (
    <button
      className={variant}
      type={type}
    >
      {children}
    </button>
  );
}
