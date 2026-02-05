export default function Card({
  id,
  color = "bg-(--dark-gray)/30",
  divClassName = "px-6 py-4",
  margin = "mb-12",
  children,
}) {
  return (
    <section
      id={id}
      className={`w-full rounded-2xl shadow-xl/30 ${margin} ${color}`}
    >
      <div className={divClassName}>{children}</div>
    </section>
  );
}
