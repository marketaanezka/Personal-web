import Link from "next/link";
import { FC } from "react";
import { Github } from "../../assets/Icons/icons";

type MdxGithubLinkProps = {
  url: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

const MdxGithubLink: FC<MdxGithubLinkProps> = ({
  url,
  ariaLabel,
  children,
}) => (
  <>
    <Github fontSize="xl" mr={1} opacity={0.9} />
    <Link
      href={url}
      className="linkUnderline"
      target="_blank"
      aria-label={ariaLabel}
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  </>
);

export default MdxGithubLink;
