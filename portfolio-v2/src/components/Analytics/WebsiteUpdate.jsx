"use client";

import { useEffect, useState } from "react"; // Added hooks
import Card from "@/components/Util/Card";

export default function ProjectCount() {
  const [lastUpdate, setLastUpdate] = useState("Loading...");

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/Cloudsyv/Portfolio-Website-2/commits/main",
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.commit?.committer?.date) {
          const date = new Date(data.commit.committer.date);

          const formattedDate = new Intl.DateTimeFormat("en-US").format(date);
          setLastUpdate(formattedDate);
        }
      })
      .catch(() => setLastUpdate("Offline"));
  }, []);

  return (
    <>
      {/* Website Update */}
      <Card
        className="max-h-fit flex flex-col border-(--subtle-blue)/20"
        margin="mb-0"
      >
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
          Last Website Update
        </p>
        <div className="text-3xl font-bold text-(--subtle-blue2)">
          {lastUpdate}
        </div>
      </Card>
    </>
  );
}
