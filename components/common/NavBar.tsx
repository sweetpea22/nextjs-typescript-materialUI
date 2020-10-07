import Link from "next/link";
import Brand from "./Brand";
import styles from "./navbar.module.css";
import { useState, useEffect, ReactNode } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export type NavLink = {
  text: string;
  onClick?: () => JSX.Element;
};
export type NavBarProps = {
  links?: NavLink[] | any;
  className?: string;
};

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

type CollapsedMenuProps = {
  children?: ReactNode;
};

const CollapsedMenu = ({ children }: CollapsedMenuProps) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Links
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {children}
      </Menu>
    </>
  );
};

const NavBar: React.FunctionComponent<NavBarProps> = ({ links = [] }) => {
  const windowSize = useWindowSize();
  const innerWidth = windowSize.width;

  return (
    <nav className={styles.container}>
      <Grid container xs={12} direction="row" alignItems="center">
        <Grid item xs={4} justify="flex-start">
          <Brand text="Tom Amiri" />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} justify="flex-end">
          <div className={styles.navlinks}>
            {innerWidth > 1000 ? (
              links.map((link: NavLink, index: number) => (
                <div className={styles.navlink}>
                  <Link key={index} href="/">
                    {link.text}
                  </Link>{" "}
                </div>
              ))
            ) : (
              <CollapsedMenu>
                {links.map((link: NavLink) => (
                  <MenuItem>
                    <Link href="/">{link.text}</Link>
                  </MenuItem>
                ))}
              </CollapsedMenu>
            )}
          </div>
        </Grid>
      </Grid>
    </nav>
  );
};

export default NavBar;
