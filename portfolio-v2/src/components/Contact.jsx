// src/components/Contact.jsx
import Card from "@/components/Card";
import SocialIcon from "@/components/SocialIcon";

export default function Contact() {
  return (
    <Card id="contact">
      {/* 2. The Hero Content: Centered impact */}
      <div className="py-12 md:py-16 flex flex-col items-center text-center">
        <h3 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight">
          Let's build something.
        </h3>

        <p className="text-gray-400 max-w-lg mx-auto text-lg leading-relaxed mb-10">
          I'm currently looking for new opportunities and collaborations.
          Whether you have a question or just want to say hi, my inbox is always
          open!
        </p>

        {/* 3. The Social Grid */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            <SocialIcon href="https://github.com/Cloudsyv" platform="github" />
            <SocialIcon
              href="https://discord.com/users/301491043759816704"
              platform="discord"
            />
            <SocialIcon
              href="mailto:IzaiahColemanMain@gmail.com"
              platform="gmail"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/izaiah-coleman-a526012b1"
              platform="linkedin"
            />
          </div>

          <p className="text-zinc-500 text-sm font-mono mt-4">
            Based in Georgia | Available for freelance
          </p>
        </div>
      </div>
    </Card>
  );
}
