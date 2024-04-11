export default function Button({ children, textOnly, ...props }) {
  const cssClasses = textOnly ? "text-button" : "button";

  return (
    <button type="button" className={cssClasses} {...props}>
      {children}
    </button>
  );
}
