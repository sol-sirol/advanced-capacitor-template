import { Link } from "framework7-react";
import { LinkProps } from "framework7-react/components/link.js";

export const NavBarLink = ({ children, ...props }: LinkProps) => {
  return <Link {...props}>{children}</Link>;
};
