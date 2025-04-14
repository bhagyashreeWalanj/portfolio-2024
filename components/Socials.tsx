"use client";

import Link from "next/link";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";

const icons = [
  {
    path: "https://www.linkedin.com/in/bhagyashreewalanj6490/",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/bhagyashreewalanj6490/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/bhagyashreeWalanj",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/study.tunes.co/",
    name: <RiInstagramFill />,
  },
];

interface SocialsProps {
  containerStyles: string;
  iconsStyles: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  return (
    <>
      <div className={`${containerStyles}`}>
        {icons.map((icon, index) => {
          return (
            <Link href={icon.path} key={index}>
              <div className={`${iconsStyles}`}>{icon.name}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Socials;
