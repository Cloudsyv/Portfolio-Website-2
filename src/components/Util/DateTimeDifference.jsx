export default function DateTimeDifference({ start, end }) {
  const startDate = new Date(start);
  const endDate = end?.toLowerCase() === "present" ? new Date() : new Date(end);

  console.log(startDate, endDate);

  if (isNaN(startDate) || isNaN(endDate)) return null;

  const diffInMs = Math.abs(endDate - startDate);

  const totalMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30.44));

  if (totalMonths < 1) {
    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    return `${days} days`;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let result = "";
  if (years > 0) result += `${years} years `;
  if (months > 0) result += `${months} months`;

  return result.trim();
}
