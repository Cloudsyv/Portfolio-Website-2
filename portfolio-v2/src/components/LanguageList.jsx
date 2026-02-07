import Link from "next/link";
import Image from "next/image";
import { languageImages } from "@/data/languageImages";
import Tooltip from "@mui/material/Tooltip";

export default function LanguageList({
  project,
  size = 18,
  color = "bg-(--dark-gray)/70",
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.languages.map((language) => {
        const icon = languageImages[language];
        if (!icon) return null;
        return (
          <Tooltip key={language} title={language}>
            <div className={`${color} p-1.5 rounded-md`}>
              <Image src={icon.src} alt={icon.alt} width={size} height={size} />
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
}
