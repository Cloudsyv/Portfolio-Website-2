export default function Card({
  id,
  color = "bg-(--off-white)",
  divClassName = "px-6 py-4",
  margin = "mb-12",
  opacity = "opacity-100",
  children,
}) {
  return (
    <section id={id} className={`w-full rounded-sm ${margin} ${opacity}`}>
      <div>{children}</div>
    </section>
  );
}
