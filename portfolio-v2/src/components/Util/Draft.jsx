export default function Draft({ post, children }) {
  return (
    <>
      {process.env.NODE_ENV === "development" && post.draft && (
        <span className="px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-widest bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded">
          Draft
        </span>
      )}
    </>
  );
}
