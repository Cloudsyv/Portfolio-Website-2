export default function Card({
  id,
  color = "bg-white/5",
  divClassName = "px-6 py-4",
  margin = "mb-12",
  className = "",
  children,
}) {
  return (
    <section
      id={id}
      className={`rounded-2xl shadow-xl/30 ${margin} ${color} ${className}`}
    >
      <div className={divClassName}>{children}</div>
    </section>
  );
}
