export default function Card({
  id,
  color = "bg-(--light-gray)",
  divClassName = "px-6 py-4",
  margin = "mb-12",
  children,
}) {
  return (
    <section
      id={id}
      className={`w-full rounded-sm shadow-xl/30 ${margin} ${color}`}
    >
      <div className={divClassName}>{children}</div>
    </section>
  );
}
