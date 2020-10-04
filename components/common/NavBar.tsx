import Link from "next/link";
import Brand from "./Brand";
import styles from "./navbar.module.css";

export type NavLink = {
  text: string;
  onClick?: () => JSX.Element;
};
export type NavBarProps = {
  links?: NavLink[];
  className?: string;
};

const NavBar: React.FunctionComponent<NavBarProps> = ({ links = [] }) => {
  return (
    <nav className={styles.container}>
      <Brand text="Tom Amiri" />
      <div className={styles.navlinks}>
        {links.map((link: NavLink, index: number) => (
          <div className={styles.navlink}>
            <Link key={index} href="/">
              {link.text}
            </Link>{" "}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
