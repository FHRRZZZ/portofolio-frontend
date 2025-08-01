import React from "react";
import { Instagram, Github, Linkedin } from "lucide-react";

const sosial = [
  {
    Icon: Instagram,
    name: "Instagram",
    link: "https://www.instagram.com/miqdadfh?igsh=MXV1dXQ5Zjh0ZGtkZw==",
  },
  {
    Icon: Github,
    name: "GitHub",
    link: "https://github.com/FHRRZZZ",
  },
  {
    Icon: Linkedin,
    name: "LinkedIn",
    link: "https://linkedin.com/in/miqdad-fh-63ba3b372",
  },
];

const Medsos = () => {
  return (
    <div className="flex gap-6 text-blue-600">
      {sosial.map(({ Icon, name, link }, idx) => (
        <a
          key={idx}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="transition-transform transform hover:scale-110 hover:opacity-80"
        >
          <Icon className="w-7 h-7" />
        </a>
      ))}
    </div>
  );
};

export default Medsos;
