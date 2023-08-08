import Link from "next/link";
import { FC } from "react";

type MdxLinkProps = {
  url: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

const MdxLink: FC<MdxLinkProps> = ({ url, ariaLabel, children }) => (
  <Link
    href={url}
    className="linkUnderline"
    target="_blank"
    aria-label={ariaLabel}
  >
    {children}
  </Link>
);

export default MdxLink;
