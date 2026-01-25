"use client";

import { useEffect, useState } from "react";

export default function Age() {
  // Age
  const birthDate = new Date("2006-08-16");
  const [age, setAge] = useState(0);

  useEffect(() => {
    const updateAge = () => {
      const now = new Date();
      const diffMs = now - birthDate; // difference in milliseconds
      const years = diffMs / (1000 * 60 * 60 * 24 * 365.25); // convert ms → years
      setAge(years.toFixed(2)); // 2 decimal places
    };

    updateAge();
    const intervalId = setInterval(updateAge, 60 * 1000); // update every minute
    return () => clearInterval(intervalId);
  }, []);

  return <>{age}</>;
}
